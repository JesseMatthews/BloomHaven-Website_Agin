import { site, cqc, careers } from './config.mjs';
import { services, bySlug, svcCard } from './services.mjs';
import { esc, icon, statusBox, cqcShort, finder, faqList, faqSchema, ctaBand, enquiryForm, pageHead, logo } from './layout.mjs';

const abs = p => site.url + p;
const P = [];
const add = p => P.push(p);
const tel = `<a href="tel:${site.phoneTel}">${site.phone}</a>`;
const mail = `<a href="mailto:${site.email}">${site.email}</a>`;

/* ═══════════════ HOME ═══════════════ */
const homeFaqs = [
  ['How do I arrange home care?', 'Call us, message us or fill in the enquiry form. We will have a first conversation, then visit you at home for a free assessment, with no obligation. From that we write a care plan, agree a start date and introduce your carer.'],
  ['What areas do you cover?', 'We cover Lancashire, including Preston, Lytham St Annes, Fleetwood and Blackpool. Use the postcode checker on the <a href="/areas/">areas page</a>. If you are just outside, ask us.'],
  ['How much does home care cost?', 'It depends on the type of care, the number and length of visits and whether you need nights. We give you a written quote after your assessment. Please see <a href="/paying-for-care/">paying for care</a> for how funding works.'],
  ['Are you regulated by the CQC?', cqc.status === 'pending' ? 'We are a new company and are not yet registered with the Care Quality Commission. We cannot deliver personal care until we are. We will publish our registration details on this website as soon as they are confirmed.' : 'Yes. ' + cqcShort() + '. See our <a href="/quality-and-safety/">quality and safety</a> page.']
];
add({
  path: '/', title: 'Home Care in Lancashire',
  description: 'Bloomhaven Care is a home care agency in Lancashire. Personal care, dementia care, live-in care, overnight care and companionship. Call 07436 125564.',
  schema: [faqSchema(homeFaqs)],
  body: `<section class="hero"><div class="wrap hero-grid"><div>
<p class="eyebrow">Care agency in Lancashire</p>
<h1>Care at home that treats you <em>as a person</em>, not a task list.</h1>
<p class="lede">Bloomhaven Care helps people live well in their own homes, with personal care, dementia care, live-in and overnight support and company. We start by listening, and everything else follows from that.</p>
<div class="btn-row"><a class="btn btn-primary" href="tel:${site.phoneTel}">${icon.phone} Call ${site.phone}</a><a class="btn btn-ghost" href="/contact/">Send an enquiry</a></div>
<ul class="facts"><li>Free home assessment</li><li>Plans written with you and your family</li><li>Reply within one working day</li></ul>
</div>
<aside class="card" aria-labelledby="fh"><h2 id="fh" class="h3">Do you cover my area?</h2><p class="note">We cover Lancashire, including Preston, Lytham St Annes, Fleetwood and Blackpool.</p>${finder('pc-home')}</aside>
</div></section>

<section class="tight"><div class="wrap"><div class="grid g3">
<a class="path" href="/home-care/"><span class="ico">${icon.home}</span><h3>I am looking for care</h3><p>For yourself or someone you love. Explore the care we provide and how to get started.</p><span class="more">Explore home care</span></a>
<a class="path" href="/for-professionals/"><span class="ico">${icon.org}</span><h3>I am a professional or organisation</h3><p>Hospital teams, social workers, GPs and care providers. How to refer and work with us.</p><span class="more">Referrals and partnerships</span></a>
<a class="path" href="/careers/"><span class="ico">${icon.people}</span><h3>I would like to work in care</h3><p>No experience needed. Find out about the role, training and what we look for.</p><span class="more">Careers at Bloomhaven</span></a>
</div></div></section>

<section><div class="wrap"><div class="sect-head"><p class="eyebrow">Home care services</p><h2>Support that fits around your life</h2><p class="lede">Use one service on its own or combine several. Your care plan changes as you do.</p></div>
<div class="grid g3">${services.slice(0, 6).map(s => svcCard(s)).join('')}</div>
<p><a href="/home-care/">See all home care services →</a></p></div></section>

<section class="alt"><div class="wrap split"><div><p class="eyebrow">Getting started</p><h2>From first call to first visit</h2><p class="lede">You do not need to know exactly what you need. Tell us what is happening and we will help you work it out.</p><div class="btn-row"><a class="btn btn-sage" href="/contact/">Ask about care</a></div></div>
<ol class="steps"><li><h3>Talk to us</h3><p>Call, message or send an enquiry. We will listen and answer your questions.</p></li><li><h3>Free home assessment</h3><p>We visit, meet you and your family and look at your home, your routine and what you would like help with.</p></li><li><h3>Your care plan</h3><p>We write a clear plan and quote. You decide whether to go ahead.</p></li><li><h3>Care begins, and keeps being reviewed</h3><p>We introduce your carer before the first visit and review the plan regularly.</p></li></ol></div></section>

<section><div class="wrap"><div class="sect-head"><p class="eyebrow">Quality and safety</p><h2>Held to the standards that matter</h2><p class="lede">Care in England is judged on five questions. We plan, train and check against them, and we say plainly where we are in the process.</p></div>
${statusBox()}
<div class="five"><div class="q"><h3>Safe</h3><p>People are protected from abuse and avoidable harm.</p></div><div class="q"><h3>Effective</h3><p>Care and support achieve good outcomes.</p></div><div class="q"><h3>Caring</h3><p>Staff treat people with kindness, dignity and respect.</p></div><div class="q"><h3>Responsive</h3><p>Services meet people’s needs and preferences.</p></div><div class="q"><h3>Well-led</h3><p>Leadership is open, accountable and always improving.</p></div></div>
<p class="btn-row"><a class="btn btn-ghost" href="/quality-and-safety/">How we approach each one</a></p></div></section>

<section class="deep"><div class="wrap split"><div><p class="eyebrow">Our people</p><h2>Good care starts with good carers</h2><p>We recruit for kindness first. Skills can be taught. Our team are supported with induction, training and regular supervision, and we want carers who feel valued enough to stay. That consistency is what you notice most in your own home.</p><div class="btn-row"><a class="btn btn-light" href="/careers/">Work with us</a></div></div>
<ul class="ticks"><li>Enhanced DBS checks and references before anyone visits a client</li><li>Induction before first visits, and training that follows the Care Certificate standards</li><li>Regular supervision and spot checks</li><li>Small, consistent teams wherever we can</li></ul></div></section>

<section><div class="wrap"><div class="sect-head"><p class="eyebrow">Common questions</p><h2>Answers before you ask</h2></div><div class="prose">${faqList(homeFaqs)}<p><a href="/faq/">More questions and answers →</a></p></div></div></section>
${ctaBand()}`
});

/* ═══════════════ HOME CARE HUB + SERVICE PAGES ═══════════════ */
add({
  path: '/home-care/', title: 'Home Care Services in Lancashire', crumbs: [['Home care', '/home-care/']],
  description: 'Home care in Lancashire: personal care, dementia care, live-in care, overnight care, companionship, medication support and everyday home support.',
  body: `${pageHead([['Home care', '/home-care/']], 'Home care services', 'Home care in Lancashire', 'Whether you need an hour a day or someone living in, we will build care around you. Here is what we offer and how it works.')}
<section><div class="wrap"><div class="grid g3">${services.map(s => svcCard(s, 'h2')).join('')}</div></div></section>
<section class="alt"><div class="wrap split"><div><p class="eyebrow">Not sure what you need?</p><h2>Start with a conversation</h2><p class="lede">Most people do not know exactly what care they need. A free assessment at home helps us agree it together. There is no obligation.</p><div class="btn-row"><a class="btn btn-primary" href="/contact/">Arrange an assessment</a><a class="btn btn-ghost" href="/paying-for-care/">Paying for care</a></div></div>
<div class="card"><h3>What an assessment covers</h3><ul class="ticks"><li>What you want to keep doing yourself</li><li>Where you would like help, and when</li><li>Health conditions, medicines and equipment</li><li>Your home and any risks in it</li><li>Who is involved: family, friends, GP, social worker</li><li>Cost, in writing, before you decide</li></ul></div></div></section>
${ctaBand()}`
});

for (const s of services) {
  const faqs = s.faqs;
  add({
    path: `/home-care/${s.slug}/`, title: s.seo[0], description: s.seo[1],
    crumbs: [['Home care', '/home-care/'], [s.nav, `/home-care/${s.slug}/`]],
    schema: [{ '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: s.nav, provider: { '@id': abs('/#business') }, areaServed: ['Preston', 'Lytham St Annes', 'Fleetwood', 'Blackpool'].map(n => ({ '@type': 'City', name: n })), description: s.seo[1], url: abs(`/home-care/${s.slug}/`) }, faqSchema(faqs)],
    body: `${pageHead([['Home care', '/home-care/'], [s.nav, `/home-care/${s.slug}/`]], s.tag, s.title, s.lede)}
<section><div class="wrap twocol"><div class="prose">
${s.intro.map(t => `<p>${t}</p>`).join('')}
<h2>What this can include</h2><ul class="ticks">${s.includes.map(i => `<li>${i}</li>`).join('')}</ul>
<h2>Who it helps</h2><ul class="ticks">${s.who.map(i => `<li>${i}</li>`).join('')}</ul>
<h2>How it works</h2><p>${s.how}</p>
<h2>Things to bear in mind</h2><p>${s.consider}</p>
<h2>Questions</h2>${faqList(faqs)}
<h2>Related support</h2><ul>${s.related.map(r => `<li><a href="/home-care/${r}/">${bySlug[r].title}</a></li>`).join('')}</ul>
</div>
<aside class="aside"><div class="card"><h2 class="h3">Talk to us about ${s.nav.toLowerCase()}</h2><p>Free assessment, no obligation. We reply within one working day.</p><div class="btn-row"><a class="btn btn-primary" href="tel:${site.phoneTel}">Call ${site.phone}</a><a class="btn btn-ghost" href="/contact/">Send an enquiry</a></div><hr><p class="note">${esc(cqcShort())}. <a href="/quality-and-safety/">Read more</a>.</p></div></aside></div></section>
${ctaBand()}`
  });
}

/* ═══════════════ AREAS ═══════════════ */
add({
  path: '/areas/', title: 'Areas We Cover: Preston, Lytham, Fleetwood & Blackpool', crumbs: [['Areas we cover', '/areas/']],
  description: 'Home care across Preston, Lytham St Annes, Fleetwood and Blackpool. Check your postcode and see how funding and local services differ by area.',
  body: `${pageHead([['Areas we cover', '/areas/']], 'Where we work', 'Areas we cover', 'We provide care in people’s own homes across Lancashire. Check your postcode below.')}
<section><div class="wrap split"><div class="card">${finder('pc-areas')}</div><div class="prose"><h2>Our areas</h2><ul class="ticks"><li><a href="/areas/preston/"><strong>Preston</strong></a> (PR1 to PR5), including the city centre, Fulwood, Ashton, Penwortham and Bamber Bridge</li><li><a href="/areas/fylde-coast/"><strong>Lytham St Annes</strong></a> (FY8)</li><li><a href="/areas/fylde-coast/"><strong>Fleetwood</strong></a> (FY7)</li><li><a href="/areas/fylde-coast/"><strong>Blackpool</strong></a> (FY1 to FY4)</li></ul><p>Outside these areas? Ask us. We may be able to help or suggest someone who can.</p><p class="note">We provide care in people’s own homes, so there is no need to visit us. Call or send an enquiry and we will arrange to meet you.</p></div></div></section>
${ctaBand()}`
});

add({
  path: '/areas/preston/', title: 'Home Care in Preston', crumbs: [['Areas we cover', '/areas/'], ['Preston', '/areas/preston/']],
  description: 'Home care in Preston, Lancashire. How Bloomhaven Care supports people in Preston, how care is funded through Lancashire County Council, and local hospital discharge support.',
  schema: [],
  body: `${pageHead([['Areas we cover', '/areas/'], ['Preston', '/areas/preston/']], 'Preston', 'Home care in Lancashire', 'Based in the city, supporting people in their own homes across Preston and the surrounding neighbourhoods.')}
<section><div class="wrap twocol"><div class="prose">
<p>Bloomhaven Care is based in Lancashire. We support people across the PR1 to PR5 postcode districts, including the city centre, Fulwood, Ashton-on-Ribble, Penwortham, Walton-le-Dale and Bamber Bridge. Knowing the area helps with practical things: how long it takes carers to reach you, which parts of town are well served by buses, and how to link up with local services.</p>
<h2>Care funding in Preston</h2>
<p>Adult social care in Preston is organised by <strong>Lancashire County Council</strong>. If you think you may need support, you can ask the council for a care needs assessment, and a financial assessment decides how much you contribute. People with savings above the national threshold usually pay for their own care. Many people in Preston arrange and pay for care privately, and we can help you think this through. See <a href="/paying-for-care/">paying for care</a>.</p>
<h2>Coming home from hospital</h2>
<p>Many people in Preston are admitted to <strong>Royal Preston Hospital</strong>, run by Lancashire Teaching Hospitals NHS Foundation Trust. If you or a relative are about to be discharged, tell the ward early that you would like to arrange care at home. If you are a member of a discharge team, see our page for <a href="/for-professionals/">professionals and referrers</a>.</p>
<h2>Services in Preston</h2>
<ul class="ticks">${services.map(s => `<li><a href="/home-care/${s.slug}/">${s.title}</a></li>`).join('')}</ul>
<h2>Getting in touch</h2><p>Call ${tel}, or <a href="/contact/">send an enquiry</a>. We will arrange a free assessment at a time that suits you.</p>
</div><aside class="aside"><div class="card">${finder('pc-preston')}</div></aside></div></section>
${ctaBand('Care in Preston, arranged with care')}`
});

add({
  path: '/areas/fylde-coast/', title: 'Home Care in Lytham St Annes, Fleetwood & Blackpool', crumbs: [['Areas we cover', '/areas/'], ['Fylde coast', '/areas/fylde-coast/']],
  description: 'Home care for Lytham St Annes, Fleetwood and Blackpool. How adult social care is organised on the Fylde coast, and how to arrange care at home.',
  body: `${pageHead([['Areas we cover', '/areas/'], ['Fylde coast', '/areas/fylde-coast/']], 'Fylde coast', 'Home care on the Fylde coast', 'Support at home in Lytham St Annes, Fleetwood and Blackpool.')}
<section><div class="wrap twocol"><div class="prose">
<p>We support people at home across the Fylde coast. The three towns we serve sit in different council areas, which affects who to ask about a needs assessment or funding, so it is worth knowing before you start.</p>
<h2>Lytham St Annes (FY8)</h2><p>Lytham St Annes is in the Borough of Fylde. Adult social care is provided by <strong>Lancashire County Council</strong>.</p>
<h2>Fleetwood (FY7)</h2><p>Fleetwood is in the Borough of Wyre. Adult social care is provided by <strong>Lancashire County Council</strong>.</p>
<h2>Blackpool (FY1 to FY4)</h2><p>Blackpool is a separate unitary authority. Adult social care is provided by <strong>Blackpool Council</strong>, not Lancashire County Council.</p>
<h2>Hospitals</h2><p>Most people on the Fylde coast use <strong>Blackpool Victoria Hospital</strong>, run by Blackpool Teaching Hospitals NHS Foundation Trust. If you are being discharged and would like help at home, ask the ward or discharge team and tell them you would like to talk to us.</p>
<h2>Our services here</h2><ul class="ticks">${services.map(s => `<li><a href="/home-care/${s.slug}/">${s.title}</a></li>`).join('')}</ul>
<p>Call ${tel} or <a href="/contact/">send an enquiry</a>.</p></div>
<aside class="aside"><div class="card">${finder('pc-fylde')}</div></aside></div></section>
${ctaBand()}`
});

/* ═══════════════ PAYING FOR CARE ═══════════════ */
const payFaqs = [
  ['Does the council pay for home care?', 'Sometimes. The council will assess your care needs and, separately, your finances. If your savings and assets are above the national limit, you will normally pay for your own care. If you are below it, the council may contribute. Everyone can ask for a care needs assessment, regardless of income.'],
  ['What is NHS Continuing Healthcare?', 'NHS Continuing Healthcare (CHC) is a package of care that the NHS funds for people with a primary health need that meets certain criteria. It is not means-tested. A health professional can start the assessment process.'],
  ['What is Attendance Allowance?', 'Attendance Allowance is a benefit for people over State Pension age who have a disability or illness that means they need help with personal care or supervision. It is not means-tested and you can claim whether or not you receive care.'],
  ['Will you give me a price in writing?', 'Yes. After your assessment we will give you a written quote that explains the visits, hours and rates, and any extra costs, before you agree to anything.']
];
add({
  path: '/paying-for-care/', title: 'Paying for Home Care: Costs & Funding Explained', crumbs: [['Paying for care', '/paying-for-care/']],
  description: 'How home care is paid for in England: self-funding, council funding, NHS Continuing Healthcare and Attendance Allowance. Plain-English guidance for Preston and Lancashire.',
  schema: [faqSchema(payFaqs)],
  body: `${pageHead([['Paying for care', '/paying-for-care/']], 'Costs and funding', 'Paying for home care', 'A plain-English guide to how care is funded, and the questions to ask before you commit.')}
<section><div class="wrap twocol"><div class="prose">
<div class="warn"><strong>General information only.</strong> Funding rules and thresholds change. Please check current figures with your council, GOV.UK or an independent adviser such as <a href="https://www.ageuk.org.uk/" rel="noopener">Age UK</a>. We are not financial advisers.</div>
<h2>Four common routes</h2>
<h3>1. Paying for it yourself</h3><p>Many people arrange and pay for care directly. You choose the provider, agree the plan and pay the agency. You can do this even if the council would pay part of the cost.</p>
<h3>2. Council support</h3><p>Anyone can ask their local council for a <a href="https://www.gov.uk/apply-needs-assessment-social-services" rel="noopener">care needs assessment</a>. A financial assessment then decides whether you pay all, some or none of the cost. In ${'Preston, Lytham St Annes and Fleetwood this is Lancashire County Council; in Blackpool it is Blackpool Council'}.</p>
<h3>3. NHS Continuing Healthcare</h3><p>For people with significant ongoing health needs, the NHS may fund care in full. Ask your GP or hospital team about a CHC checklist. More information is on the <a href="https://www.nhs.uk/conditions/social-care-and-support-guide/" rel="noopener">NHS social care and support guide</a>.</p>
<h3>4. Benefits</h3><p>Benefits such as <a href="https://www.gov.uk/attendance-allowance" rel="noopener">Attendance Allowance</a> can help towards costs and are not means-tested.</p>
<h2>What affects the price</h2><ul class="ticks"><li>How many visits you need and how long they are</li><li>Whether care is needed at night, at weekends or on bank holidays</li><li>Whether you need two carers at once, for example for moving and handling</li><li>Live-in care costs more than visiting care but covers all hours</li></ul>
<h2>Questions to ask any provider</h2><ul class="ticks"><li>Are you registered with the CQC, and can I see your latest report?</li><li>What exactly is included in the price, and what is extra?</li><li>Will I have a regular carer, and what happens if they are off?</li><li>How do you handle complaints, and who do I speak to?</li><li>What notice is needed to change or end care?</li></ul>
<h2>Questions</h2>${faqList(payFaqs)}
</div><aside class="aside"><div class="card"><h2 class="h3">Want a written quote?</h2><p>After a free assessment we will give you a clear written quote.</p><div class="btn-row"><a class="btn btn-primary" href="/contact/">Arrange an assessment</a></div></div></aside></div></section>
${ctaBand()}`
});

/* ═══════════════ PROFESSIONALS ═══════════════ */
add({
  path: '/for-professionals/', title: 'Referrals & Partnerships for Healthcare Professionals', crumbs: [['For professionals', '/for-professionals/']],
  description: 'Home care referrals and partnerships in Lancashire for hospital discharge teams, social workers, GPs and care providers.',
  body: `${pageHead([['For professionals', '/for-professionals/']], 'For professionals and organisations', 'Working with Bloomhaven Care', 'For hospital discharge teams, social workers, GPs, care homes and other organisations who need reliable home care for the people they support.')}
<section><div class="wrap twocol"><div class="prose">
${cqc.status === 'pending' ? '<div class="warn"><strong>Please note:</strong> we are not yet registered with the CQC and cannot accept referrals for regulated care until we are. You are welcome to introduce yourself now so that we can plan for working together. We will update this page when registration is confirmed.</div>' : ''}
<h2>What we can offer</h2><ul class="ticks"><li>Home care packages for adults who are being discharged from hospital or who need support to stay at home</li><li>Personal care, dementia care, medication support, overnight care and live-in care</li><li>A named contact for referrers, and clear communication about starts, changes and concerns</li><li>Written care plans, daily records and reviews that can be shared with consent</li></ul>
<h2>How referrals work</h2><ol class="steps"><li><h3>Contact us</h3><p>Phone or send the form with a brief outline: who the person is, where they live, what support is needed and by when.</p></li><li><h3>We check we can help</h3><p>We confirm area, capacity and whether we can safely meet the person’s needs. If we cannot, we will say so quickly.</p></li><li><h3>Assessment and start</h3><p>We carry out our own assessment and agree a start date and care plan.</p></li></ol>
<h2>Staffing and other enquiries</h2><p>If you run a care home or other service and would like to discuss supporting your work, please tell us what you need in the form. We will be honest about whether it is something we can do.</p>
<h2>Safeguarding and information sharing</h2><p>We share information only with consent or where the law allows or requires it. See our <a href="/quality-and-safety/safeguarding/">safeguarding page</a> and <a href="/privacy/">privacy policy</a>.</p>
</div><aside class="aside"><div class="card"><h2 class="h3" id="form-title-pro">Professional enquiry</h2>${enquiryForm('pro')}</div></aside></div></section>`
});

/* ═══════════════ CAREERS ═══════════════ */
const jobFaqs = [
  ['Do I need experience?', 'No. We look for kindness, reliability and a willingness to learn. Full induction and training is provided before you work alone.'],
  ['What checks are needed?', 'An enhanced DBS check, references, proof of identity and your right to work in the UK. We explain each step and help with the paperwork.'],
  ['Do I need a driving licence?', 'This is worth asking about at your first call. Some roles need a car and some can be done on foot or by public transport in compact areas.'],
  ['What training will I get?', 'Induction and training in areas such as safeguarding, moving and handling, infection control, medication, dementia awareness and health and safety, following the Care Certificate standards.']
];
add({
  path: '/careers/', title: 'Care Jobs in Lancashire: Careers at Bloomhaven Care', crumbs: [['Careers', '/careers/']],
  description: 'Care assistant jobs in Lancashire. No experience needed, full training. Find out about the role, requirements and how to apply to Bloomhaven Care.',
  schema: [faqSchema(jobFaqs), ...careers.vacancies.filter(v => v.open).map(v => ({ '@context': 'https://schema.org', '@type': 'JobPosting', title: v.title, description: v.summary, datePosted: site.lastUpdated, validThrough: v.validThrough || undefined, employmentType: 'OTHER', hiringOrganization: { '@type': 'Organization', name: site.legalName, sameAs: site.url }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Preston', addressRegion: 'Lancashire', addressCountry: 'GB' } } }))],
  body: `${pageHead([['Careers', '/careers/']], 'Careers', 'Care jobs in Lancashire', 'A job where you make a visible difference to someone’s day. No experience is needed. We will teach you what you need to know.')}
<section><div class="wrap twocol"><div class="prose">
<h2>Current roles</h2>
${careers.vacancies.map(v => `<div class="card"><span class="tag">${v.open ? 'Hiring now' : 'Register your interest'}</span><h3>${v.title}</h3><p>${v.summary}</p><ul class="ticks"><li>${v.type}</li><li>${v.area}</li><li>${careers.payNote ? esc(careers.payNote) : 'We talk about pay openly at your first call'}</li></ul>${v.open ? '' : '<p class="note">We are building our team ahead of launch. Tell us you are interested and we will contact you when we start recruiting for this role.</p>'}</div>`).join('')}
<h2>What the job involves</h2><p>You will visit people at home to help with washing and dressing, meals, medication prompts, moving safely, and company. Every visit is different, and the relationships you build matter as much as the tasks you do.</p>
<h2>Who we are looking for</h2><ul class="ticks"><li>Kind, patient and reliable people</li><li>Good communicators who treat people with respect</li><li>People who are willing to learn, from school leavers to career changers</li><li>Right to work in the UK, and willingness to have an enhanced DBS check</li></ul>
<h2>What you can expect from us</h2><ul class="ticks"><li>Induction and training before you work alone</li><li>Mileage or travel time covered for travel between visits (details given at application)</li><li>Regular supervision and a named person to ask for help</li><li>Routes to progress to senior carer or coordinator roles as we grow</li></ul>
<h2>How applying works</h2><ol class="steps"><li><h3>Tell us about you</h3><p>Use the form. It takes a couple of minutes.</p></li><li><h3>An informal chat</h3><p>We will call you to talk about the role and answer your questions.</p></li><li><h3>Checks and induction</h3><p>Enhanced DBS check, references, right-to-work check and induction before you meet clients.</p></li></ol>
<h2>Questions</h2>${faqList(jobFaqs)}
</div><aside class="aside"><div class="card"><h2 class="h3" id="form-title-job">Register your interest</h2>${enquiryForm('job')}</div></aside></div></section>`
});

/* ═══════════════ QUALITY AND SAFETY ═══════════════ */
const five = [
  ['Safe', 'Are people protected from abuse and avoidable harm?', ['Staff are recruited safely: identity and right-to-work checks, enhanced DBS checks, references and a full employment history', 'Every client has a written risk assessment for the home and for their needs, and carers are told about the risks before they visit', 'Safeguarding training for all staff, and a clear route to raise concerns, including whistleblowing', 'Medicines are handled following NICE guidance, with records at every visit', 'Infection prevention and control training, and personal protective equipment', 'Incidents and near misses are recorded and learned from']],
  ['Effective', 'Does care and support achieve good outcomes?', ['An assessment before care starts, covering needs, preferences and goals', 'Care plans written with you, and reviewed regularly and when things change', 'Induction and training following the Care Certificate standards, with competence checks', 'Regular supervision and observation of carers at work', 'Working with GPs, district nurses, therapists and others, with your consent', 'Following the Mental Capacity Act 2005 and supporting people to make their own decisions']],
  ['Caring', 'Do staff involve and treat people with compassion, kindness, dignity and respect?', ['We ask what matters to you and put it in the plan, in your words', 'Consistent carers, so people are known and not rushed', 'Privacy, dignity and choice protected in every visit', 'Respect for religion, culture, gender and identity', 'Families kept informed, as much as the person wants']],
  ['Responsive', 'Are services organised so that they meet people’s needs?', ['Care that fits around your routine, not the other way around', 'Plans reviewed when things change, such as after a fall or hospital stay', 'A named contact, and an out-of-hours number for people we support', 'A simple, well-publicised complaints process, and we learn from what people tell us']],
  ['Well-led', 'Does leadership assure high-quality, person-centred care, support learning and promote a fair and open culture?', ['A registered manager, once approved by the CQC, accountable for the quality of care', 'Regular audits of records, medicines, care plans and visits', 'Feedback sought from people we support, families and staff, and acted on', 'A duty of candour: we will be open and honest when something goes wrong', 'Policies kept up to date, and staff supported to follow them']]
];
add({
  path: '/quality-and-safety/', title: 'Quality & Safety: How We Approach the CQC Five Key Questions', crumbs: [['Quality & safety', '/quality-and-safety/']],
  description: 'How Bloomhaven Care approaches safe, effective, caring, responsive and well-led care, plus safeguarding, complaints and our CQC registration status.',
  body: `${pageHead([['Quality & safety', '/quality-and-safety/']], 'Quality and safety', 'How we approach quality and safety', 'The Care Quality Commission judges care on five questions. This is how we plan to meet each one, and how you can hold us to it.')}
<section><div class="wrap"><div class="prose">${statusBox()}
<p>A website cannot prove that care is good. Only inspection and the experience of the people we support can do that. What we can do is tell you plainly what we commit to, and where to check our regulator’s findings. You can find any registered provider and its reports on the <a href="https://www.cqc.org.uk/" rel="noopener">CQC website</a>.</p></div>
${five.map(([n, q, items]) => `<div class="key"><div><h2 class="h3">${n}</h2><p class="kq">${q}</p></div><ul class="ticks">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}
</div></section>
<section class="alt"><div class="wrap"><div class="sect-head"><h2>Policies and information</h2><p class="lede">Open information is part of being well-led.</p></div>
<div class="grid g3"><a class="svc" href="/quality-and-safety/safeguarding/"><h3>Safeguarding</h3><p>How we protect people, and how to raise a concern.</p><span>Read more →</span></a><a class="svc" href="/quality-and-safety/complaints-and-feedback/"><h3>Complaints and feedback</h3><p>How to tell us what is working and what is not.</p><span>Read more →</span></a><a class="svc" href="/privacy/"><h3>Privacy and your information</h3><p>How we look after personal information.</p><span>Read more →</span></a></div>
<p class="note">Other policies, including recruitment, medicines, infection control and whistleblowing, are available on request. Email ${mail}.</p></div></section>
${ctaBand()}`
});

add({
  path: '/quality-and-safety/safeguarding/', title: 'Safeguarding Adults', crumbs: [['Quality & safety', '/quality-and-safety/'], ['Safeguarding', '/quality-and-safety/safeguarding/']],
  description: 'How Bloomhaven Care protects adults from abuse and neglect, and how to raise a safeguarding concern.',
  body: `${pageHead([['Quality & safety', '/quality-and-safety/'], ['Safeguarding', '/quality-and-safety/safeguarding/']], 'Safeguarding', 'Safeguarding adults', 'Everyone has the right to live free from abuse and neglect. Protecting people is the responsibility of everyone who works with us.')}
<section><div class="wrap"><div class="prose">
<div class="warn"><strong>In an emergency, or if someone is in immediate danger, call 999.</strong></div>
<h2>Our commitments</h2><ul class="ticks"><li>Safeguarding training for all staff before they work with people, with regular refreshers</li><li>Safe recruitment: enhanced DBS checks, references and interviews that explore values</li><li>Every worker knows that they must report concerns, and that they will be supported for doing so</li><li>We work with the local authority safeguarding adults team and, where necessary, the police and the CQC</li><li>We respect people’s views and wishes, and involve them in decisions about their safety as far as possible</li></ul>
<h2>What is abuse?</h2><p>Abuse can be physical, emotional, sexual, financial, or neglect, and it can include discrimination, domestic abuse, modern slavery and self-neglect. It can happen anywhere and be done by anyone, including family, carers and professionals.</p>
<h2>Raise a concern</h2><ul class="ticks"><li><strong>About us:</strong> call ${tel} or email ${mail}. If you would rather not speak to us, you can go to the local authority or the CQC directly.</li><li><strong>About anyone:</strong> contact the adult safeguarding team at your local council (Lancashire County Council or Blackpool Council). You can find the contact on their websites.</li><li><strong>Non-emergency police:</strong> 101</li><li><strong>CQC:</strong> <a href="https://www.cqc.org.uk/give-feedback-on-care" rel="noopener">give feedback on care</a></li></ul>
<p>If you work for us and have a concern about our practice, you are protected under whistleblowing law. You can speak to the manager, or directly to the CQC.</p>
</div></div></section>`
});

add({
  path: '/quality-and-safety/complaints-and-feedback/', title: 'Complaints & Feedback', crumbs: [['Quality & safety', '/quality-and-safety/'], ['Complaints and feedback', '/quality-and-safety/complaints-and-feedback/']],
  description: 'How to give feedback or make a complaint to Bloomhaven Care, what happens next, and who you can go to if you are not satisfied.',
  body: `${pageHead([['Quality & safety', '/quality-and-safety/'], ['Complaints and feedback', '/quality-and-safety/complaints-and-feedback/']], 'Feedback', 'Complaints and feedback', 'We want to know what is working and what is not. Complaints help us improve.')}
<section><div class="wrap"><div class="prose">
<div class="warn"><strong>Draft for owner approval.</strong> The timescales below are proposals. Confirm they match your written complaints policy before publishing.</div>
<h2>How to tell us</h2><ul class="ticks"><li>Phone: ${tel}</li><li>Email: ${mail}</li>${site.registeredOffice ? `<li>Post: ${site.legalName}, ${esc(site.registeredOffice)}</li>` : ''}<li>Or speak to your carer or care coordinator. You do not need to use a form.</li></ul>
<h2>What happens next</h2><ol class="steps"><li><h3>We acknowledge it</h3><p>We will confirm we have received your complaint within three working days.</p></li><li><h3>We look into it</h3><p>Someone senior who was not involved will investigate, and speak to you to understand what happened.</p></li><li><h3>We reply in writing</h3><p>We will explain what we found, what we will change, and apologise where we got something wrong. We aim to do this within 28 days, and will tell you if it will take longer.</p></li></ol>
<h2>If you are not satisfied</h2><p>You can take your complaint further, whether you pay for your own care or not:</p><ul class="ticks"><li>The <a href="https://www.lgo.org.uk/" rel="noopener">Local Government and Social Care Ombudsman</a> can look at complaints about adult social care providers, including privately funded care</li><li>If your care is arranged or funded by the council or NHS, you can also complain to them</li><li>You can share your experience with the <a href="https://www.cqc.org.uk/give-feedback-on-care" rel="noopener">Care Quality Commission</a>. The CQC does not resolve individual complaints but uses what it hears in its inspections</li></ul>
<h2>Compliments and suggestions</h2><p>Please tell us what we get right too. It helps carers and shapes how we work.</p>
</div></div></section>`
});

/* ═══════════════ ABOUT ═══════════════ */
add({
  path: '/about/', title: 'About Bloomhaven Care', crumbs: [['About us', '/about/']],
  description: 'About Bloomhaven Care Ltd, a new home care agency in Lancashire. Our values, how we work and who is behind the company.',
  body: `${pageHead([['About us', '/about/']], 'About us', 'A new local agency with clear principles', 'Bloomhaven Care Ltd was incorporated in April 2026. We are new, and we think you deserve to know exactly what that means.')}
<section><div class="wrap split"><div class="prose"><h2>Who we are</h2><p>Bloomhaven Care is a home care company based in Lancashire. We are a new business, and we are at the stage of building our team and completing our regulatory registration. We would rather tell you that plainly than pretend to a long history we do not have.</p><p>What we do have is a clear idea of how care should feel for the person receiving it: listened to, treated with respect, and supported by people who know them.</p>${statusBox()}
<h2>Company details</h2><p>${site.legalName}<br>Registered in England and Wales, company number ${site.companyNumber}<br>Incorporated ${new Date(site.incorporated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}${site.registeredOffice ? '<br>Registered office: ' + esc(site.registeredOffice) : '<br>Registered office: as shown on the Companies House register'}</p>
</div><div><h2>What we stand for</h2><div class="grid"><div class="card"><h3>Dignity</h3><p>Everyone is treated with respect and has the right to make their own choices, including ones we might not make ourselves.</p></div><div class="card"><h3>Consistency</h3><p>Small teams who know you, so you are not starting from scratch every visit.</p></div><div class="card"><h3>Honesty</h3><p>We tell you what we can and cannot do, what it costs, and when something goes wrong.</p></div><div class="card"><h3>Partnership</h3><p>We work with you, your family and the professionals around you.</p></div></div></div></div></section>
<section class="alt"><div class="wrap"><div class="sect-head"><h2>Meet the team</h2></div><p class="lede">We will introduce our registered manager and leadership team here once they are in post and approved by the CQC.</p></div></section>
${ctaBand()}`
});

/* ═══════════════ FAQ ═══════════════ */
const faqGroups = [
  ['Arranging care', [
    ['How do I arrange home care?', 'Call, message or use the enquiry form. We talk first, then visit you at home for a free assessment, write a care plan and quote, and agree a start date.'],
    ['Is the assessment really free?', 'Yes, and there is no obligation to go ahead.'],
    ['Can I choose my carer?', 'We match carers according to your needs and preferences, and will always introduce you before regular visits begin. If it is not working, tell us and we will change it.'],
    ['Can care change as my needs change?', 'Yes. Your plan is reviewed regularly and any time something changes. Visits can be added, reduced or changed.'],
    ['How quickly can care start?', 'It depends on what is needed and our capacity. Tell us how urgent it is and we will give you an honest answer.']
  ]],
  ['Costs and funding', [
    ['How much does it cost?', 'It depends on the visits, hours and times of day. You will get a written quote after the assessment. See <a href="/paying-for-care/">paying for care</a>.'],
    ['Can the council or NHS pay?', 'Possibly. It depends on your needs and finances. See <a href="/paying-for-care/">paying for care</a> for how to ask.']
  ]],
  ['Safety and regulation', [
    ['Are you regulated by the CQC?', cqc.status === 'pending' ? 'We are a new company and are not yet registered. We cannot deliver personal care until we are. We will publish our registration details here as soon as they are confirmed.' : cqcShort() + '. See <a href="/quality-and-safety/">quality and safety</a>.'],
    ['Are your carers checked?', 'Carers have enhanced DBS checks, references and identity and right-to-work checks before they visit anyone.'],
    ['How do I complain?', 'Please see <a href="/quality-and-safety/complaints-and-feedback/">complaints and feedback</a>.']
  ]],
  ['Working with us', [
    ['Do I need experience to work in care?', 'No. We provide induction and training.'],
    ['How do I apply?', 'Use the form on our <a href="/careers/">careers page</a>.']
  ]]
];
const allFaqs = faqGroups.flatMap(g => g[1]);
add({
  path: '/faq/', title: 'Home Care FAQs', crumbs: [['FAQ', '/faq/']],
  description: 'Answers to common questions about arranging home care in Lancashire, costs, regulation, safety and working for Bloomhaven Care.',
  schema: [faqSchema(allFaqs)],
  body: `${pageHead([['FAQ', '/faq/']], 'Questions and answers', 'Frequently asked questions', 'If you cannot find your answer here, please call or message us.')}
<section><div class="wrap"><div class="prose">${faqGroups.map(([g, f]) => `<h2>${g}</h2>${faqList(f)}`).join('')}</div></div></section>${ctaBand()}`
});

/* ═══════════════ CONTACT ═══════════════ */
add({
  path: '/contact/', title: 'Contact Bloomhaven Care', crumbs: [['Contact', '/contact/']],
  description: 'Contact Bloomhaven Care in Lancashire. Call 07436 125564, email or send an enquiry about home care. We reply within one working day.',
  body: `${pageHead([['Contact', '/contact/']], 'Contact', 'Talk to us', 'The easiest way is to call. If you would rather write, we will reply within one working day.')}
<section><div class="wrap twocol"><div><div class="card"><h2 class="h3" id="form-title-care">Send an enquiry</h2>${enquiryForm('care')}</div></div>
<aside><div class="card"><h2 class="h3">Other ways to reach us</h2><ul class="ticks"><li><strong>Phone:</strong> ${tel}</li><li><strong>Email:</strong> ${mail}</li><li><strong>WhatsApp:</strong> <a href="${site.whatsapp}" rel="noopener">message us</a></li></ul>
<h3>Office hours</h3><p>${site.hours.map(h => h.label).join('<br>')}</p>
<h3>Where we work</h3><p>We provide care in people’s own homes across Lancashire. We will come to you.</p>${site.registeredOffice ? '<p class="note">Registered office: ' + esc(site.registeredOffice) + '</p>' : ''}</div>
<div class="card"><h3>Professional or looking for work?</h3><p><a href="/for-professionals/">Referrals and partnerships</a><br><a href="/careers/">Careers</a></p></div></aside></div></section>`
});

add({ path: '/thank-you/', title: 'Thank You', noindex: true, description: 'Thank you for contacting Bloomhaven Care.', body: `<section><div class="wrap narrow"><h1>Thank you, we have your message</h1><p class="lede">A member of the team will reply within one working day. If it is urgent, please call ${tel}.</p><p><a class="btn btn-primary" href="/">Back to the home page</a></p></div></section>` });

/* ═══════════════ LEGAL ═══════════════ */
const legalDate = '16 November 2026';
const legal = (path, title, desc, inner) => add({ path, title, description: desc, crumbs: [[title, path]], body: `${pageHead([[title, path]], 'Legal', title, `Last updated ${legalDate}.`)}<section><div class="wrap"><div class="prose">${inner}</div></div></section>` });

legal('/privacy/', 'Privacy Policy', 'How Bloomhaven Care collects, uses and protects personal information from this website, enquiries and job applicants.', `
<div class="warn"><strong>Draft for owner and adviser review.</strong> This reflects how the website works. Before relying on it, check it against your actual data practices, register with the ICO if required, and have it reviewed by someone qualified.</div>
<h2>Who we are</h2><p>${site.legalName} (company number ${site.companyNumber}) ${site.registeredOffice ? 'of ' + esc(site.registeredOffice) + ' ' : ''}is the controller of personal information described here. Contact us at ${mail} or ${tel}.</p>
<h2>What we collect and why</h2><ul><li><strong>Enquiry forms:</strong> your name, email, phone, postcode and message, to reply to you. Our legal basis is legitimate interests, or taking steps at your request before a contract.</li><li><strong>Careers enquiries:</strong> the details you provide, to consider your interest in working with us.</li><li><strong>Phone, email and WhatsApp:</strong> whatever you share with us, to respond.</li></ul>
<p>Please do not put detailed health or financial details on a form. We will ask for what we need when we speak. If we later provide care, we will give you a separate notice about how we handle care records.</p>
<h2>Who we share it with</h2><p>Form messages are delivered by <strong>FormSubmit</strong> (formsubmit.co), which passes them to our email inbox. Our email and phone providers also process messages. If you contact us on WhatsApp, Meta processes the messages. We do not sell personal information. We share it where the law requires, or to protect someone from harm.</p>
<h2>This website</h2><p>This website does not use advertising or analytics cookies. Fonts are hosted on our own server. The “view on Google Maps” links take you to Google only if you click them.</p>
<h2>How long we keep it</h2><p>Enquiries that do not lead to care are kept for up to 12 months. Careers enquiries are kept for up to 6 months unless you ask us to remove them sooner. <em>(Owner to confirm retention periods.)</em></p>
<h2>Your rights</h2><p>You can ask to see, correct, delete or restrict the use of your personal information, and to object to its use. Contact us at ${mail}. You can also complain to the Information Commissioner’s Office at <a href="https://ico.org.uk/" rel="noopener">ico.org.uk</a>.</p>`);

legal('/cookies/', 'Cookies', 'Information about cookies and similar technologies on the Bloomhaven Care website.', `<h2>Summary</h2><p>This website does not set cookies and does not use advertising or analytics trackers. For that reason you do not see a cookie banner.</p><p>Your browser may store ordinary technical information when you load pages, which we do not use to identify you. If we add analytics or other tools in future, we will update this page and ask for your consent first where the law requires it.</p><p>Third-party sites you choose to visit, such as Google Maps or WhatsApp, have their own cookie policies.</p>`);

legal('/terms/', 'Website Terms', 'Terms of use for the Bloomhaven Care website.', `<div class="warn"><strong>Draft for owner and adviser review.</strong></div><h2>About this website</h2><p>This website is operated by ${site.legalName}. By using it you agree to these terms.</p><h2>Information, not advice</h2><p>The information here is general. It is not medical, legal or financial advice. Funding rules, thresholds and regulations change, so please check with the relevant organisation.</p><h2>Our services</h2><p>Nothing on this website is an offer of care. Care is only provided after an assessment and a written agreement, and only once we are registered with the Care Quality Commission.</p><h2>Links</h2><p>We link to other websites for information. We are not responsible for their content.</p><h2>Intellectual property</h2><p>The content and design of this website belong to ${site.legalName}. Please do not copy it without permission.</p><h2>Law</h2><p>These terms are governed by the law of England and Wales.</p>`);

legal('/accessibility/', 'Accessibility Statement', 'Accessibility statement for the Bloomhaven Care website, including how to report a problem.', `<p>We want everyone to be able to use this website. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.</p><h2>What we have done</h2><ul><li>Headings, landmarks, labels and a skip link so that screen readers and keyboard users can navigate</li><li>Text that can be enlarged, high-contrast colours, and focus outlines that are always visible</li><li>Large touch targets and forms that explain errors in text</li><li>No auto-playing media, and animation turned off if your device asks for reduced motion</li><li>The site works without JavaScript for reading and for sending forms</li></ul><h2>Status</h2><p>This is a self-assessment. We have tested with automated tools and a keyboard but have not yet had an independent audit. We plan to commission one.</p><h2>Report a problem or ask for another format</h2><p>Email ${mail} or call ${tel}. We can provide information in other formats on request.</p><h2>Complaints</h2><p>If you are not happy with our response, contact the <a href="https://www.equalityadvisoryservice.com/" rel="noopener">Equality Advisory and Support Service</a>.</p>`);

add({ path: '/404.html', file: '404.html', title: 'Page Not Found', noindex: true, description: 'Page not found.', body: `<section><div class="wrap narrow"><h1>We could not find that page</h1><p class="lede">It may have moved. Try one of these instead.</p><ul><li><a href="/">Home</a></li><li><a href="/home-care/">Home care services</a></li><li><a href="/contact/">Contact us</a></li></ul><p>Or call ${tel}.</p></div></section>` });

export const pages = P;
export const oldUrls = { 'index.html': '/', 'services.html': '/home-care/', 'about.html': '/about/', 'contact.html': '/contact/', 'faq.html': '/faq/', 'recruit.html': '/careers/', 'privacy.html': '/privacy/', 'terms.html': '/terms/', 'cookies.html': '/cookies/' };
