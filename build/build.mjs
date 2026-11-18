import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './config.mjs';
import { render } from './layout.mjs';
import { pages, oldUrls } from './pages.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../site');
fs.rmSync(out, { recursive: true, force: true });
const w = (p, c) => { const f = path.join(out, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, c); };

// Assets
fs.cpSync(path.join(here, 'assets'), path.join(out, 'assets'), { recursive: true });
const fonts = path.join(here, 'node_modules/@fontsource-variable');
fs.mkdirSync(path.join(out, 'assets/fonts'), { recursive: true });
fs.copyFileSync(path.join(fonts, 'fraunces/files/fraunces-latin-wght-normal.woff2'), path.join(out, 'assets/fonts/fraunces.woff2'));
fs.copyFileSync(path.join(fonts, 'dm-sans/files/dm-sans-latin-wght-normal.woff2'), path.join(out, 'assets/fonts/dm-sans.woff2'));

// Pages
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error('duplicate ' + p.path); seen.add(p.path);
  const file = p.file || (p.path === '/' ? 'index.html' : p.path.replace(/^\//, '') + 'index.html');
  w(file, render(p));
}

// Old URL stubs so existing Google results and links keep working on any static host
for (const [old, dest] of Object.entries(oldUrls)) {
  if (old === 'index.html') continue;
  w(old, `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Moved | ${site.name}</title><link rel="canonical" href="${site.url}${dest}"><meta http-equiv="refresh" content="0; url=${dest}"><meta name="robots" content="noindex,follow"></head><body><p>This page has moved to <a href="${dest}">${site.url}${dest}</a>.</p></body></html>`);
}

// Sitemap (indexable pages only)
const urls = pages.filter(p => !p.noindex).map(p => p.path);
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${site.url}${u}</loc><lastmod>${site.lastUpdated}</lastmod></url>`).join('\n')}\n</urlset>\n`);
w('robots.txt', `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${site.url}/sitemap.xml\n`);

// Host config for Netlify / Cloudflare Pages (ignored elsewhere)
w('_headers', `/*\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Strict-Transport-Security: max-age=31536000; includeSubDomains\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; connect-src https://formsubmit.co; form-action 'self' https://formsubmit.co; base-uri 'self'; object-src 'none'; frame-ancestors 'none'\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
w('_redirects', Object.entries(oldUrls).filter(([o]) => o !== 'index.html').map(([o, d]) => `/${o}  ${d}  301`).join('\n') + '\n');

console.log('built', pages.length, 'pages');
