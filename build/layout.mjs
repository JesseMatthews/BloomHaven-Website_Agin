import { site, cqc, coverage } from './config.mjs';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = p => site.url + p;

/* ── Icons / logo ─────────────────────────────────────────── */
export const icon = {
  home: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>',
  org: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  people: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.8c2 .7 3.2 2.4 3.5 5.2"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',
  msg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>'
};

export const logo = (size = 70) => `<img src="/assets/logo-symbol.svg" width="${size}" height="${size}" alt="" decoding="async">`;

/* ── Regulatory status (single source of truth) ───────────── */
export function cqcShort() {
  if (cqc.status === 'rated') return `CQC rated ${cqc.rating}${cqc.ratingDate ? ' (' + cqc.ratingDate + ')' : ''}`;
  if (cqc.status === 'registered') return 'Registered with the Care Quality Commission';
  return 'Not yet registered with the Care Quality Commission';
}
export function statusBox() {
  const link = cqc.locationUrl ? ` <a href="${esc(cqc.locationUrl)}" rel="noopener">View our CQC profile</a>.` : '';
  if (cqc.status === 'rated') return `<div class="status good"><strong>${esc(cqcShort())}</strong><p>This is the rating from our most recent CQC report.${link}</p></div>`;
  if (cqc.status === 'registered') return `<div class="status good"><strong>Registered with the Care Quality Commission</strong><p>We have not yet been inspected, so we do not have a CQC rating.${link}</p></div>`;
  return `<div class="status"><strong>Our registration status</strong><p>${esc(site.legalName)} is a new company and is <b>not yet registered with the Care Quality Commission (CQC)</b>. In England, personal care at home can only be provided by a CQC-registered provider, so we cannot start delivering care until registration is complete. You are welcome to register your interest now. We will publish our registration details and CQC profile here as soon as they are confirmed.</p></div>`;
}

/* ── Navigation ───────────────────────────────────────────── */
const NAV = [
  ['/home-care/', 'Home care'],
  ['/areas/', 'Areas we cover'],
  ['/paying-for-care/', 'Paying for care'],
  ['/quality-and-safety/', 'Quality & safety'],
  ['/about/', 'About us']
];
const AUD = [
  ['/', 'Finding care', p => !p.startsWith('/for-professionals') && !p.startsWith('/careers')],
  ['/for-professionals/', 'Professionals', p => p.startsWith('/for-professionals')],
  ['/careers/', 'Careers', p => p.startsWith('/careers')]
];

function header(path) {
  const cur = (href) => (href === '/' ? path === '/' : path.startsWith(href)) ? ' aria-current="page"' : '';
  return `<div class="topbar"><div class="wrap">
<nav aria-label="Choose your journey"><ul class="aud">${AUD.map(([h, l, f]) => `<li><a href="${h}"${f(path) ? ' aria-current="true"' : ''}>${l}</a></li>`).join('')}</ul></nav>
<aside aria-label="Telephone"><a class="tel" href="tel:${site.phoneTel}">Call ${site.phone}</a></aside></div></div>
<header class="site"><div class="wrap">
<a class="brand" href="/">${logo()}<span><b>${site.name}</b><small>Care agency · Lancashire</small></span></a>
<button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="main-nav">Menu</button>
<nav class="main" id="main-nav" aria-label="Main"><ul>${NAV.map(([h, l]) => `<li><a href="${h}"${cur(h)}>${l}</a></li>`).join('')}<li class="cta"><a href="/contact/"${cur('/contact/')}>Enquire</a></li></ul></nav>
</div></header>`;
}

function footer() {
  const services = [['personal-care', 'Personal care'], ['dementia-care', 'Dementia care'], ['live-in-care', 'Live-in care'], ['overnight-care', 'Overnight care'], ['companionship', 'Companionship'], ['medication-support', 'Medication support'], ['everyday-support', 'Everyday home support']];
  return `<footer class="site"><div class="wrap">
<div class="fgrid">
<div><a class="brand" href="/"><span>${logo(58)}</span><span><b>${site.name}</b></span></a>
<p>A care agency based in Lancashire, providing care in people’s own homes.</p>
<div class="regline"><strong>${esc(cqcShort())}</strong><br>${esc(site.legalName)}, registered in England &amp; Wales, company no. ${site.companyNumber}.${site.registeredOffice ? '<br>Registered office: ' + esc(site.registeredOffice) : ''}</div></div>
<div><h2>Home care</h2><ul>${services.map(([s, l]) => `<li><a href="/home-care/${s}/">${l}</a></li>`).join('')}</ul></div>
<div><h2>Explore</h2><ul><li><a href="/areas/">Areas we cover</a></li><li><a href="/paying-for-care/">Paying for care</a></li><li><a href="/quality-and-safety/">Quality &amp; safety</a></li><li><a href="/quality-and-safety/complaints-and-feedback/">Complaints &amp; feedback</a></li><li><a href="/for-professionals/">For professionals</a></li><li><a href="/careers/">Careers</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/about/">About us</a></li></ul></div>
<div><h2>Contact</h2><ul><li><a href="tel:${site.phoneTel}">${site.phone}</a></li><li><a href="mailto:${site.email}">${site.email}</a></li><li><a href="${site.whatsapp}" rel="noopener">WhatsApp us</a></li>${site.hours.map(h => `<li>${h.label}</li>`).join('')}</ul></div>
</div>
<div class="fbottom"><span>© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.</span><ul><li><a href="/privacy/">Privacy</a></li><li><a href="/cookies/">Cookies</a></li><li><a href="/terms/">Terms</a></li><li><a href="/accessibility/">Accessibility</a></li></ul></div>
</div></footer>
<nav class="callbar" aria-label="Quick contact"><a href="tel:${site.phoneTel}">${icon.phone} Call us</a><a href="/contact/">${icon.msg} Enquire</a></nav>`;
}

/* ── Structured data ──────────────────────────────────────── */
export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': abs('/#business'),
    name: site.legalName,
    alternateName: site.name,
    url: abs('/'),
    logo: abs('/assets/logo-lockup.png'),
    image: abs('/assets/og-default.png'),
    description: 'Care agency based in Lancashire, providing care at home across Lancashire: personal care, dementia care, live-in care, overnight care, companionship and medication support.',
    telephone: site.phoneTel,
    email: site.email,
    identifier: { '@type': 'PropertyValue', name: 'Companies House number', value: site.companyNumber },
    foundingDate: site.incorporated,
    address: { '@type': 'PostalAddress', addressLocality: site.address.locality, addressRegion: site.address.region, addressCountry: site.address.country },
    areaServed: [...Object.keys(coverage).map(n => ({ '@type': 'City', name: n })), { '@type': 'AdministrativeArea', name: 'Lancashire' }],
    openingHoursSpecification: site.hours.map(h => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    sameAs: site.socials
  };
}
export const crumbSchema = crumbs => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(p) }))
});
export const faqSchema = faqs => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } }))
});

/* ── Components ───────────────────────────────────────────── */
export const faqList = faqs => faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="ans">${a}</div></details>`).join('\n');

export const ctaBand = (h = 'Talk to us about care', p = 'Tell us what you are looking for. A real person will reply within one working day, and there is no pressure to go any further.') =>
  `<section class="tight"><div class="wrap"><div class="band"><div><h2>${h}</h2><p>${p}</p></div><div class="btn-row"><a class="btn btn-light" href="tel:${site.phoneTel}">Call ${site.phone}</a><a class="btn btn-line-light" href="/contact/">Send an enquiry</a></div></div></div></section>`;

export function finder(id = 'pc') {
  return `<form class="finder" data-coverage='${JSON.stringify(coverage)}' novalidate><label for="${id}">Check your area <span class="hint">Enter your postcode, for example PR1 1AA</span></label>
<div class="row"><input id="${id}" name="postcode" type="text" autocomplete="postal-code" inputmode="text" aria-describedby="${id}-r"><button class="btn btn-primary" type="submit">Check</button></div><div class="result" id="${id}-r" role="status" aria-live="polite"></div></form>`;
}

const reasonCare = ['Care for myself', 'Care for a family member', 'Question about services', 'Costs and funding', 'Other'];
export function enquiryForm(kind = 'care') {
  const subj = { care: 'Care enquiry', pro: 'Professional / organisation enquiry', job: 'Careers enquiry' }[kind];
  const sel = {
    care: ['Who is the care for?', reasonCare],
    pro: ['Type of organisation', ['Hospital or discharge team', 'Social worker / local authority', 'GP surgery / primary care', 'Care home or provider', 'Other organisation']],
    job: ['What are you interested in?', ['Home care assistant', 'Live-in care', 'Overnight care', 'Senior / coordinator role', 'Not sure yet']]
  }[kind];
  const msgLabel = { care: 'How can we help?', pro: 'What would you like to discuss?', job: 'Tell us a little about yourself' }[kind];
  const org = kind === 'pro' ? '<div class="f"><label for="org">Organisation name <span class="hint">Optional</span></label><input id="org" name="organisation" type="text" autocomplete="organization"></div>' : '';
  return `<form action="${site.formEndpoint}" method="POST" data-enquiry data-phone="${site.phone}" data-tel="${site.phoneTel}" aria-labelledby="form-title-${kind}">
<div class="formmsg" tabindex="-1"></div>
<input type="hidden" name="_subject" value="${subj} — ${site.name} website">
<input type="hidden" name="_next" value="${site.url}/thank-you/">
<input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false">
<div class="hp" aria-hidden="true"><label for="hp-${kind}">Leave this empty</label><input id="hp-${kind}" name="_honey" type="text" tabindex="-1" autocomplete="off"></div>
<input type="hidden" name="enquiry_type" value="${kind}">
<div class="f"><label for="name-${kind}">Your name *</label><input id="name-${kind}" name="name" type="text" autocomplete="name" required></div>
${org}
<div class="f"><label for="email-${kind}">Email address *</label><input id="email-${kind}" name="email" type="email" autocomplete="email" required></div>
<div class="f"><label for="tel-${kind}">Phone number <span class="hint">Optional, but helpful if you would like a call back</span></label><input id="tel-${kind}" name="phone" type="tel" autocomplete="tel"></div>
<div class="f"><label for="sel-${kind}">${sel[0]}</label><select id="sel-${kind}" name="topic"><option value="">Please choose</option>${sel[1].map(o => `<option>${o}</option>`).join('')}</select></div>
<div class="f"><label for="area-${kind}">Postcode <span class="hint">${kind === 'job' ? 'Where you live' : 'Where care would be provided'}. Optional.</span></label><input id="area-${kind}" name="postcode" type="text" autocomplete="postal-code"></div>
<div class="f"><label for="msg-${kind}">${msgLabel} *</label><textarea id="msg-${kind}" name="message" required></textarea>
<span class="hint">${kind === 'job' ? 'Please do not include sensitive personal details.' : 'Please do not include detailed medical or financial information. We will ask for what we need when we speak.'}</span></div>
<div class="f check"><input id="consent-${kind}" name="consent" type="checkbox" required><label for="consent-${kind}">I agree to ${site.name} using these details to reply to me, as explained in the <a href="/privacy/">privacy policy</a>. *</label></div>
<button class="btn btn-primary" type="submit">Send ${kind === 'job' ? 'my details' : 'enquiry'}</button>
<p class="note top">Forms are delivered by FormSubmit, a third-party email service. If you would rather not use a form, call ${site.phone}.</p>
</form>`;
}

/* ── Page shell ───────────────────────────────────────────── */
export function render({ path, title, description, body, crumbs = [], schema = [], noindex = false, ogType = 'website' }) {
  const canon = abs(path);
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`;
  const ld = [...schema];
  if (path === '/') ld.unshift(orgSchema());
  if (crumbs.length) ld.push(crumbSchema([['Home', '/'], ...crumbs]));
  const csp = "default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; connect-src https://formsubmit.co; form-action 'self' https://formsubmit.co; base-uri 'self'; object-src 'none'";
  return `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canon}">
<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}">
${site.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(site.googleSiteVerification)}">` : ''}
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="theme-color" content="#16314F">
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="${site.name}"><meta property="og:locale" content="en_GB">
<meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canon}">
<meta property="og:image" content="${abs('/assets/og-default.png')}"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon-64.png" type="image/png" sizes="64x64"><link rel="icon" href="/assets/favicon-192.png" type="image/png" sizes="192x192"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/dm-sans.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/styles.css">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head><body>
<a class="skip" href="#main">Skip to main content</a>
${header(path)}
<main id="main">
${crumbs.length ? '' : ''}${body}
</main>
${footer()}
<script src="/assets/site.js" defer></script>
</body></html>`;
}

export const crumbsHtml = crumbs => `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li>${crumbs.map(([n, p], i) => i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;

export const pageHead = (crumbs, eyebrow, h1, lede) => `<div class="pagehead"><div class="wrap">${crumbsHtml(crumbs)}<p class="eyebrow">${eyebrow}</p><h1>${h1}</h1><p class="lede">${lede}</p></div></div>`;
