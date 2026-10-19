// Wedding photography packages. Prices are intentionally not shown on the site;
// each package links to WhatsApp to ask for a quote.
export interface Package {
  num: string;
  name: string;
  tagline: string;
  bestFor: string;
  /** "Everything in …, plus" line, when the package builds on another. */
  base?: string;
  included: string[];
  gifts: string[];
  featured?: boolean;
}

export const coverageOptions = [
  { name: 'Reception', detail: '6 hours of coverage' },
  { name: 'Reception + Wedding', detail: '2 days of coverage' },
];

export const packages: Package[] = [
  {
    num: '01',
    name: 'Essential',
    tagline: 'The day, beautifully kept.',
    bestFor: 'Couples who want classic, complete coverage of every ritual.',
    included: ['Traditional Photography', 'Traditional Videography', 'Premium Album 12×36 — 80 slides', 'Mobile Application Access'],
    gifts: ['32GB Pendrive', '3 Photo Frames', 'Album Warranty'],
  },
  {
    num: '02',
    name: 'Signature',
    tagline: 'Candid moments, nothing missed.',
    bestFor: 'Couples who want the unposed laughter as well as the rituals.',
    base: 'Everything in Essential, plus',
    included: ['Videography upgraded to 4K', 'Candid Photography', 'Unlimited Photos Coverage'],
    gifts: ['Couple Album', '360° Spinny Video', '64GB Pendrive', 'Pre- or Post-Wedding Photoshoot', '2 Photo Frames', 'Album Warranty'],
    featured: true,
  },
  {
    num: '03',
    name: 'Cinematic',
    tagline: 'Your wedding, told as a film.',
    bestFor: 'Couples who want to relive the day in motion, start to finish.',
    base: 'Everything in Signature, plus',
    included: ['Candid Videography', 'Cinematic Wedding Film'],
    gifts: ['Couple Album', '360° Spinny Video', 'Pre- or Post-Wedding Photoshoot', '3 Photo Frames', 'Album Warranty'],
  },
];

export const additionalServices = ['Additional Album', 'Drone Coverage', 'LED Wall Coverage'];

export const paymentTerms = [
  { value: '10%', detail: 'Advance — Date Booking Confirmation' },
  { value: '80%', detail: 'On Wedding Day' },
  { value: '10%', detail: 'At the time of Album Delivery' },
  { value: 'BOOKING', detail: 'Date is confirmed only after advance payment' },
];
