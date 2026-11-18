# Bloomhaven Care — Go-live checklist

## A. Legal and regulatory (blockers)
- [ ] **Registered office / home privacy (do before launch).** Your home address is NOT published anywhere on this site. But: (1) the registered office address is public on the Companies House register whatever we do, and (2) a UK company's website is generally required to show its registered office address. The clean fix is to move the registered office to a business/virtual-office or accountant's address (Companies House form AD01, done online; usually a small yearly fee), then put that address in `registeredOffice` in `build/config.mjs` and rebuild. Also check your *directors'* home addresses are not on the public register (use a service address; you can apply to Companies House to protect/remove residential addresses already shown).
- [ ] CQC: you will need to give CQC a location address for your service and it appears on your public CQC profile. Use the business address, not your home. Ask CQC/your adviser what they accept for a home care office.
- [ ] Google Business Profile: choose "service-area business" and hide the address so your home is never shown.
- [ ] Check old listings (Companies House, directories, domain WHOIS, old site cache) for the previous or home address and update them; turn on WHOIS privacy at your domain registrar.
- [ ] Confirm CQC registration status. Until registered, do NOT deliver or advertise-to-start personal care. Keep `cqc.status: 'pending'`.
- [ ] When registered: set `cqc.status`, provider ID, CQC profile URL in `build/config.mjs`; rebuild. When first rated: add rating + report date (must match CQC exactly, Regulation 20A).
- [ ] Register with the ICO (data protection fee) if required; update privacy page.
- [ ] Have privacy, terms and complaints pages reviewed by a qualified adviser; confirm retention periods and complaints timescales match your real policies.
- [ ] Confirm insurance (public liability, employers' liability if you employ staff). Add an "insured" statement only with proof.
- [ ] Confirm every item in CLAIMS-TO-CONFIRM.md.
- [ ] Write the real policies the site mentions (safeguarding, recruitment, medicines, infection control, whistleblowing, complaints) so "available on request" is true.

## B. Content you must supply
- [ ] Real photos (team, local area; consent for anyone shown). Add alt text.
- [ ] Registered manager and leadership bios once approved.
- [ ] Pay rate (`careers.payNote`), start dates and real vacancies (`careers.vacancies`, set `open:true` when hiring).
- [ ] Real testimonials with written permission (none until then; never invent).
- [ ] Read all copy for tone; correct anything that is not how you work.
- [ ] Confirm social links exist, hours, WhatsApp number monitored.
- [ ] Confirm coverage postcodes and named neighbourhoods.

## C. Technical
- [ ] Choose host (Netlify / Cloudflare Pages / current host), upload contents of `site/`.
- [ ] Point domain (www.bloomhavencare.co.uk) with HTTPS; redirect non-www to www (or vice versa) consistently.
- [ ] Confirm `_headers` / `_redirects` supported (otherwise add security headers in host panel).
- [ ] Test both forms live (care, professional, careers): arrive in inbox, activate FormSubmit by clicking its confirmation email, check spam folder. Consider FormSubmit hashed alias to hide your email.
- [ ] Test on real phone (iPhone + Android), Chrome, Safari, Edge; keyboard-only run; screen reader quick pass (NVDA/VoiceOver); zoom 200%.
- [ ] Click-check every external link (gov.uk, NHS, LGO, CQC, ICO, Age UK).
- [ ] Run PageSpeed Insights / Lighthouse; fix anything under 90.
- [ ] Commission independent accessibility audit when budget allows.
- [ ] Set up email SPF/DKIM/DMARC for bloomhavencare.co.uk so your replies are not marked spam.
- [ ] Set up automatic backups/versioning (keep the project in Git).

## D. Google visibility
- [ ] Google Search Console: verify (paste string into `googleSiteVerification`, rebuild), submit /sitemap.xml, check indexing of key pages.
- [ ] Google Business Profile: create as service-area business, category "Home care service" / "Home health care service", same name/address/phone as site, add services, areas, hours, photos, link to /contact/. Do not state a CQC rating until true.
- [ ] Bing Webmaster Tools (import from Search Console).
- [ ] Check old Google results redirect properly (services.html etc. now redirect).
- [ ] Consistent listings: Companies House, CQC, NHS Services, Care directories (homecare.co.uk, carehome.co.uk, Age UK directories) with identical details.
- [ ] Ask early clients for Google reviews (once real).
- [ ] Optional: privacy-friendly analytics (e.g. Plausible); if you add any cookies, update the cookies page and add consent.

## E. Business readiness (not website)
- [ ] Complete CQC registration, appoint registered manager.
- [ ] Complaints, safeguarding and recruitment procedures operating, staff trained.
- [ ] Phone answered in office hours; out-of-hours arrangement if promised.
- [ ] Enquiry follow-up process (reply within one working day as promised).
- [ ] Local partnerships: GP surgeries, hospital discharge teams, council provider lists.
