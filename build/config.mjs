// ─────────────────────────────────────────────────────────────
// SITE CONFIG — the one file the owner edits for facts that change.
// Everything on the site that is a fact about the business comes from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Bloomhaven Care',
  legalName: 'Bloomhaven Care Ltd',
  companyNumber: '17172482',
  incorporated: '2026-04-21',
  url: 'https://www.bloomhavencare.co.uk',
  phone: '07436 125564',
  phoneTel: '+447436125564',
  email: 'info@bloomhavencare.co.uk',
  whatsapp: 'https://wa.me/447436125564?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20home%20care.',
  // PRIVACY: the home address is deliberately NOT published. Locality only.
  address: { locality: 'Preston', region: 'Lancashire', country: 'GB' },
  // Fill in ONLY after you have moved the company's registered office to a business/service address
  // (Companies House form AD01). UK company websites must show the registered office address.
  registeredOffice: '',
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00', label: 'Monday to Friday, 8am to 6pm' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00', label: 'Saturday, 9am to 1pm' }
  ],
  socials: ['https://www.facebook.com/bloomhavencare', 'https://www.instagram.com/bloomhavencare'],
  // FormSubmit.co delivers form posts to this inbox. See README to switch to a hashed alias.
  formEndpoint: 'https://formsubmit.co/info@bloomhavencare.co.uk',
  // Paste the content value from Google Search Console's "HTML tag" verification method.
  googleSiteVerification: '',
  lastUpdated: '2026-11-16'
};

// ─────────────────────────────────────────────────────────────
// CQC STATUS — drives every regulatory statement on the site.
//   'pending'    : not yet registered (current, based on the old site's placeholders)
//   'registered' : registered, not yet inspected/rated
//   'rated'      : registered and rated
// NEVER change this to anything other than the truth. Verify at cqc.org.uk.
// ─────────────────────────────────────────────────────────────
export const cqc = {
  status: 'pending',
  providerId: '',          // e.g. '1-123456789' from your CQC profile URL
  locationUrl: '',         // full URL of your CQC location page
  rating: '',              // 'Outstanding' | 'Good' | 'Requires improvement' | 'Inadequate'
  ratingDate: '',          // date of the report that gave the rating, e.g. '12 March 2027'
  registeredManager: ''    // name, only once CQC has approved them
};

// ─────────────────────────────────────────────────────────────
// VACANCIES — add real roles here. Only roles with open:true get
// JobPosting structured data (Google requires a genuinely open role).
// ─────────────────────────────────────────────────────────────
export const careers = {
  payNote: '', // e.g. 'From £12.60 an hour plus mileage'. Leave blank until confirmed.
  vacancies: [
    {
      slug: 'home-care-assistant',
      title: 'Home Care Assistant',
      type: 'Full-time, part-time or flexible',
      area: 'Preston and the Fylde coast',
      open: false, // set true once you are actively hiring AND have confirmed pay and start date
      summary: 'Support people in their own homes with personal care, meals, medication prompts and company. No previous care experience needed.',
      validThrough: ''
    }
  ]
};

// Postcode districts the checker treats as covered. Owner to confirm.
export const coverage = {
  Preston: ['PR1', 'PR2', 'PR3', 'PR4', 'PR5'],
  'Lytham St Annes': ['FY8'],
  Fleetwood: ['FY7'],
  Blackpool: ['FY1', 'FY2', 'FY3', 'FY4']
};
