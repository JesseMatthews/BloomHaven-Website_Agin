# Bloomhaven Care website
Static site. `build/` generates `site/`.
- Edit facts: `build/config.mjs` (CQC status, vacancies, phone, hours, coverage). Content: `build/pages.mjs`, `build/services.mjs`.
- Build: `cd build && npm install && node build.mjs` → upload everything in `site/` to your host.
- Netlify/Cloudflare Pages use `_headers` and `_redirects`. Other hosts: old .html URLs still redirect via small stub pages; add the security headers in `_headers` at your host if you can.
- After going live: Search Console (see AUDIT-AND-NOTES.md), Google Business Profile, test both forms.
