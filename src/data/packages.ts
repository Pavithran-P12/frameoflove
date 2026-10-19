// Wedding photography packages, with prices for the two coverage options
// (Session 1 = Reception, Session 2 = Reception + Wedding).
export interface IncludedItem {
  text: string;
  /** New in this package (not in the smaller one). Highlighted with a "+". */
  isNew?: boolean;
}

export interface Package {
  num: string;
  name: string;
  tagline: string;
  bestFor: string;
  /** Price in rupees for each coverage option, in the same order as coverageOptions. */
  prices: [number, number];
  /** Full list of what's included, carried-over items first, new items marked isNew. */
  included: IncludedItem[];
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
    prices: [30000, 40000],
    included: [
      { text: 'Traditional Photography' },
      { text: 'Traditional Videography' },
      { text: 'Premium Album 12×36 — 80 slides' },
      { text: 'Mobile Application Access' },
      { text: 'Unlimited Photos Coverage' },
    ],
    gifts: ['32GB Pendrive', '3 Photo Frames', 'Album Warranty'],
  },
  {
    num: '02',
    name: 'Signature',
    tagline: 'Candid moments, nothing missed.',
    bestFor: 'Couples who want the unposed laughter as well as the rituals.',
    prices: [45000, 65000],
    included: [
      { text: 'Traditional Photography' },
      { text: 'Videography upgraded to 4K', isNew: true },
      { text: 'Premium Album 12×36 — 80 slides' },
      { text: 'Mobile Application Access' },
      { text: 'Candid Photography', isNew: true },
      { text: 'Unlimited Photos Coverage' },
    ],
    gifts: ['Couple Album', '360° Spinny Video', '64GB Pendrive', 'Pre- or Post-Wedding Photoshoot', '2 Photo Frames', 'Album Warranty'],
    featured: true,
  },
  {
    num: '03',
    name: 'Cinematic',
    tagline: 'Your wedding, told as a film.',
    bestFor: 'Couples who want to relive the day in motion, start to finish.',
    prices: [60000, 85000],
    included: [
      { text: 'Traditional Photography' },
      { text: '4K Videography' },
      { text: 'Premium Album 12×36 — 80 slides' },
      { text: 'Mobile Application Access' },
      { text: 'Candid Photography' },
      { text: 'Unlimited Photos Coverage' },
      { text: 'Candid Videography', isNew: true },
      { text: 'Cinematic Wedding Film', isNew: true },
    ],
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
