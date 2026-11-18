# Bloomhaven Care — audit, decisions and hand-over

## 1. Most important issue (legal)
The old site advertised personal care, medication administration, live-in and night care, while all CQC content was commented out awaiting a provider ID. In England, providing personal care without CQC registration is an offence (CQC prosecutes this). The new site therefore states the status honestly everywhere, driven by ONE setting in `build/config.mjs` (`cqc.status`: pending / registered / rated). Change it only when true, add the provider ID and CQC URL, rebuild.

## 2. What was wrong with the old site
- Unverifiable or overstated claims: "above industry-average pay", "fully insured", "ICO registered", "24-hour on-call", "365 days", "annual appraisals", "Employee Assistance Programme", "Registered Care Management", testimonial-style quotes attributed to a "Founder" and a "Care Coordinator", "the NHS identifies compassion as the single most important quality".
- Only 9 thin pages. No individual service pages (services were a JS-rendered modal, so Google saw an empty grid), no area pages, no funding, referral, safeguarding or complaints content.
- Services, FAQs, team, skills and the header/footer were injected by JavaScript: weak for SEO and fails without JS.
- Hotlinked Unsplash stock photos (some irrelevant), particle canvas, marquee, scroll-hijack animations: slow, distracting, hard for older/assistive users. Google Fonts leaked visitor IPs.
- Structured data used the wrong type (HealthAndBeautyBusiness), price range, unverified socials. Sitemap dates stale.
- Accessibility: clickable divs as buttons, FAQ without proper semantics, modal without focus management, low-contrast gold/white, 3-line CSS overrides with !important, duplicated stylesheet.
- Forms: no spam protection, no error summary, no fallback without JS, email exposed in script.
- Single audience journey; recruitment page said "apply in 60 seconds" with a one-box form; no referrer route.

## 3. What was built
27 pages, static HTML (no framework, builds in <1s), self-hosted fonts, no cookies/trackers, no images to slow it, CSP, security headers. Three separate journeys (care / professionals / careers) in a top bar. Service pages x7 with Service + FAQ schema, 2 area pages (Preston; Fylde coast with the real council/hospital differences), Paying for care, Quality & Safety organised on the CQC five key questions, safeguarding, complaints, accessibility statement. Old URLs (services.html etc.) redirect. axe-core scan (WCAG 2.2 AA + best practice): 0 violations on all pages at desktop and mobile; no horizontal overflow.

## 4. Competitors (what I could verify)
Caremark's homepage leads with recruitment and franchise CTAs, shows no CQC rating on the homepage and has a postcode finder that did not render for me. Home Instead and Helping Hands were blocked in my environment, so I did not assess them; treat that as outstanding. A research helper also failed. Opportunities used: visible phone number, postcode check, honest regulatory status, separate referrer route, transparent funding guidance, pay line on careers page once confirmed.

## 5. Not done / needs you
- **Photography.** Your logo is now in. Add real photos of your team and clients (with consent): real beats stock.
- Google Search Console: paste verification string into `googleSiteVerification` in config, rebuild, then submit /sitemap.xml. Create/verify the Google Business Profile (service-area business, NAP identical to the site). Do not claim CQC rating there until true.
- External links (gov.uk, NHS, LGO, CQC, Age UK) were written from knowledge: click-check them.
- FormSubmit sends your inbox address in the page. Consider its hashed alias, and test a live submission after deploy.
- Competitor research and local search-volume research were limited (no keyword tool).
