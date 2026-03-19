// ─── Pricing Data Constants ───────────────────────────────────────────────────
// All numbers sourced from clean4you.com.au & cleancorp.com pricing guides.
// This file is the single source of truth for every number on the /pricing page.

// ─── Types ───────────────────────────────────────────────────────────────────

export type BedroomOption = 'studio' | '2bed' | '3bed' | '4bed' | '5plus';
export type Frequency = 'weekly' | 'fortnightly' | 'monthly' | 'once-off';
export type ResidentialService =
  | 'standard'
  | 'deep'
  | 'bond'
  | 'airbnb'
  | 'post-renovation'
  | 'carpet'
  | 'ndis'
  | 'gutter'
  | 'rubbish';

export type CommercialFrequency = 'daily' | '3x-week' | 'weekly' | 'fortnightly' | 'one-off';
export type SpaceSizeBracket = 'up-to-150' | '150-300' | '300-500' | '500-1000' | '1000-plus';
export type IndustryComplexity = 'standard' | 'medium' | 'high';

// ─── Bedroom Labels ──────────────────────────────────────────────────────────

export const BEDROOM_OPTIONS: { key: BedroomOption; label: string; short: string }[] = [
  { key: 'studio', label: 'Studio / 1 Bed', short: 'Studio/1 Bed' },
  { key: '2bed', label: '2 Bedrooms', short: '2 Bed' },
  { key: '3bed', label: '3 Bedrooms', short: '3 Bed' },
  { key: '4bed', label: '4 Bedrooms', short: '4 Bed' },
  { key: '5plus', label: '5+ Bedrooms', short: '5+ Bed' },
];

// ─── Residential Service Types ───────────────────────────────────────────────

export const RESIDENTIAL_SERVICES: {
  key: ResidentialService;
  label: string;
  notes: string;
  contactOnly?: boolean;
}[] = [
  { key: 'standard', label: 'Standard House Clean', notes: 'Regular maintenance clean' },
  { key: 'deep', label: 'Deep / Spring Clean', notes: 'Thorough top-to-bottom clean' },
  { key: 'bond', label: 'End of Lease / Bond Clean', notes: 'Includes Bond Back Guarantee' },
  { key: 'airbnb', label: 'Airbnb / Short Stay', notes: 'Fast turnaround, guest-ready' },
  { key: 'post-renovation', label: 'Post-Renovation', notes: 'Dust, debris & residue removal' },
  { key: 'carpet', label: 'Carpet Steam Clean', notes: 'Hot steam, stain & allergen removal' },
  { key: 'ndis', label: 'NDIS House Cleaning', notes: 'NDIS registered, no out-of-pocket' },
  { key: 'gutter', label: 'Gutter Cleaning', notes: 'Exterior — contact for quote', contactOnly: true },
  { key: 'rubbish', label: 'Rubbish Removal', notes: 'Contact for quote', contactOnly: true },
];

// ─── Frequency Options ───────────────────────────────────────────────────────

export const FREQUENCY_OPTIONS: {
  key: Frequency;
  label: string;
  discount: string;
  badge: string;
  badgeColor: string;
  callout: string;
}[] = [
  {
    key: 'weekly',
    label: 'Weekly',
    discount: 'Save 10%',
    badge: 'Best Value',
    badgeColor: 'bg-green-100 text-green-700',
    callout: '💚 Weekly bookings save you 10% — no contract required, cancel anytime.',
  },
  {
    key: 'fortnightly',
    label: 'Fortnightly',
    discount: 'Save 5%',
    badge: 'Popular',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    callout: '💛 Fortnightly bookings get a 5% discount automatically applied.',
  },
  {
    key: 'monthly',
    label: 'Monthly',
    discount: 'Standard rate',
    badge: '',
    badgeColor: '',
    callout: 'Regular bookings unlock better rates. Switch to weekly or fortnightly anytime.',
  },
  {
    key: 'once-off',
    label: 'Once-Off',
    discount: 'Standard rate',
    badge: '',
    badgeColor: '',
    callout: 'Regular bookings unlock better rates. Switch to weekly or fortnightly anytime.',
  },
];

// ─── Residential Standard Prices (per session, AUD incl. GST) ────────────────

export const STANDARD_PRICES: Record<BedroomOption, Record<Frequency, number | null>> = {
  studio:  { 'once-off': 132, monthly: 132, fortnightly: 125, weekly: 119 },
  '2bed':  { 'once-off': 165, monthly: 165, fortnightly: 157, weekly: 149 },
  '3bed':  { 'once-off': 198, monthly: 198, fortnightly: 188, weekly: 178 },
  '4bed':  { 'once-off': 264, monthly: 264, fortnightly: 251, weekly: 238 },
  '5plus': { 'once-off': null, monthly: null, fortnightly: null, weekly: null },
};

export const STANDARD_DURATIONS: Record<BedroomOption, string> = {
  studio: '2 hrs',
  '2bed': '2.5 hrs',
  '3bed': '3 hrs',
  '4bed': '4 hrs',
  '5plus': '',
};

// ─── Deep / Spring Clean (From, AUD) ────────────────────────────────────────

export const DEEP_CLEAN_PRICES: Record<Exclude<BedroomOption, '5plus'>, number> = {
  studio: 321,
  '2bed': 297,
  '3bed': 363,
  '4bed': 462,
};

export const DEEP_CLEAN_DURATIONS: Record<Exclude<BedroomOption, '5plus'>, string> = {
  studio: '3.5 hrs',
  '2bed': '4.5 hrs',
  '3bed': '5.5 hrs',
  '4bed': '7 hrs',
};

// ─── End of Lease / Bond Clean (From, AUD) ──────────────────────────────────

export const BOND_CLEAN_PRICES: Record<Exclude<BedroomOption, '5plus'>, number> = {
  studio: 440,
  '2bed': 550,
  '3bed': 660,
  '4bed': 990,
};

// ─── Carpet Steam Clean (From, AUD) ─────────────────────────────────────────

export const CARPET_PRICES: Record<Exclude<BedroomOption, '5plus'>, { standard: number; eol: number }> = {
  studio: { standard: 127, eol: 220 },
  '2bed': { standard: 138, eol: 248 },
  '3bed': { standard: 165, eol: 286 },
  '4bed': { standard: 220, eol: 336 },
};

// ─── Commercial Industry Types ──────────────────────────────────────────────

export const COMMERCIAL_INDUSTRIES: {
  key: string;
  label: string;
  emoji: string;
  complexity: IndustryComplexity;
}[] = [
  { key: 'office', label: 'Office / Corporate', emoji: '🏢', complexity: 'standard' },
  { key: 'hospitality', label: 'Hospitality (Hotel / Restaurant)', emoji: '🏨', complexity: 'medium' },
  { key: 'healthcare', label: 'Healthcare / Medical', emoji: '🏥', complexity: 'high' },
  { key: 'retail', label: 'Retail / Shopping Centre', emoji: '🛒', complexity: 'standard' },
  { key: 'education', label: 'School / Education', emoji: '🏫', complexity: 'medium' },
  { key: 'construction', label: 'Construction / Builders Clean', emoji: '🏗️', complexity: 'high' },
  { key: 'government', label: 'Government Building', emoji: '🏛️', complexity: 'medium' },
  { key: 'industrial', label: 'Industrial / Warehouse', emoji: '🏭', complexity: 'high' },
  { key: 'gym', label: 'Gym / Fitness Centre', emoji: '🏋️', complexity: 'standard' },
  { key: 'other', label: 'Other / Not Listed', emoji: '❓', complexity: 'standard' },
];

export const INDUSTRY_MULTIPLIERS: Record<IndustryComplexity, number> = {
  standard: 1.0,
  medium: 1.15,
  high: 1.30,
};

// ─── Commercial Frequency Options ───────────────────────────────────────────

export const COMMERCIAL_FREQUENCIES: {
  key: CommercialFrequency;
  label: string;
  benefit: string;
  badge: string;
  badgeColor: string;
  contactOnly?: boolean;
  callout: string;
}[] = [
  {
    key: 'daily',
    label: 'Daily (5 days/week)',
    benefit: 'Highest consistency, competitive per-clean rate',
    badge: 'Most Popular',
    badgeColor: 'bg-green-100 text-green-700',
    callout: '💚 Regular contracts unlock our best per-session rates.',
  },
  {
    key: '3x-week',
    label: '3x per week',
    benefit: 'Balanced schedule',
    badge: '',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    callout: 'Great balance of clean frequency and cost efficiency.',
  },
  {
    key: 'weekly',
    label: 'Weekly',
    benefit: 'Standard commercial schedule',
    badge: '',
    badgeColor: '',
    callout: 'Good choice. Weekly contracts qualify for ongoing pricing.',
  },
  {
    key: 'fortnightly',
    label: 'Fortnightly',
    benefit: 'Less frequent',
    badge: '',
    badgeColor: '',
    callout: 'Fortnightly is ideal for lower-traffic environments.',
  },
  {
    key: 'one-off',
    label: 'One-Off / After Event',
    benefit: 'Single clean, custom quote',
    badge: 'Contact Required',
    badgeColor: 'bg-red-100 text-red-700',
    contactOnly: true,
    callout: '',
  },
];

// ─── Commercial Base Rates (From, + GST) ────────────────────────────────────

export const COMMERCIAL_BASE_RATES: Record<SpaceSizeBracket, { weekly: number | null; daily: number | null }> = {
  'up-to-150':  { weekly: 182, daily: 145 },
  '150-300':    { weekly: 250, daily: 195 },
  '300-500':    { weekly: 380, daily: 280 },
  '500-1000':   { weekly: 550, daily: 420 },
  '1000-plus':  { weekly: null, daily: null },
};

export const COMMERCIAL_MIN_CHARGE = 165;

export const SPACE_SIZE_BRACKETS: { key: SpaceSizeBracket; label: string; sqmRange: string }[] = [
  { key: 'up-to-150', label: 'Up to 150 sqm', sqmRange: '< 150' },
  { key: '150-300', label: '150–300 sqm', sqmRange: '150–300' },
  { key: '300-500', label: '300–500 sqm', sqmRange: '300–500' },
  { key: '500-1000', label: '500–1000 sqm', sqmRange: '500–1000' },
  { key: '1000-plus', label: '1000+ sqm', sqmRange: '1000+' },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getResidentialPrice(
  bedrooms: BedroomOption,
  service: ResidentialService,
  frequency: Frequency
): { price: number | null; label: string; isFrom: boolean; duration: string } {
  if (bedrooms === '5plus') {
    return { price: null, label: 'Contact us for a custom quote', isFrom: false, duration: '' };
  }

  const bed = bedrooms as Exclude<BedroomOption, '5plus'>;

  switch (service) {
    case 'standard': {
      const p = STANDARD_PRICES[bedrooms]?.[frequency] ?? null;
      return { price: p, label: p ? `$${p} per session` : 'Contact us', isFrom: false, duration: STANDARD_DURATIONS[bedrooms] };
    }
    case 'deep': {
      const p = DEEP_CLEAN_PRICES[bed];
      return { price: p, label: `From $${p}`, isFrom: true, duration: DEEP_CLEAN_DURATIONS[bed] };
    }
    case 'bond': {
      const p = BOND_CLEAN_PRICES[bed];
      return { price: p, label: `From $${p}`, isFrom: true, duration: '' };
    }
    case 'carpet': {
      const c = CARPET_PRICES[bed];
      return { price: c.standard, label: `From $${c.standard}`, isFrom: true, duration: '' };
    }
    case 'airbnb':
    case 'post-renovation':
    case 'ndis':
      // Use standard pricing for these services
      const sp = STANDARD_PRICES[bedrooms]?.[frequency] ?? null;
      return { price: sp, label: sp ? `$${sp} per session` : 'Contact us', isFrom: false, duration: STANDARD_DURATIONS[bedrooms] };
    default:
      return { price: null, label: 'Contact us for a quote', isFrom: false, duration: '' };
  }
}

export function getCommercialEstimate(
  sizeBracket: SpaceSizeBracket,
  frequency: CommercialFrequency,
  complexity: IndustryComplexity
): { low: number | null; high: number | null; isCustom: boolean } {
  if (sizeBracket === '1000-plus') {
    return { low: null, high: null, isCustom: true };
  }

  const base = COMMERCIAL_BASE_RATES[sizeBracket];
  const multiplier = INDUSTRY_MULTIPLIERS[complexity];

  // Pick rate column based on frequency
  let baseRate: number | null;
  if (frequency === 'daily') {
    baseRate = base.daily;
  } else {
    baseRate = base.weekly;
  }

  if (!baseRate) return { low: null, high: null, isCustom: true };

  const low = Math.round(baseRate * multiplier);
  const high = Math.round(baseRate * multiplier * 1.15); // +15% upper range

  return { low, high, isCustom: false };
}

export function getSqmBracket(sqm: number): SpaceSizeBracket {
  if (sqm <= 150) return 'up-to-150';
  if (sqm <= 300) return '150-300';
  if (sqm <= 500) return '300-500';
  if (sqm <= 1000) return '500-1000';
  return '1000-plus';
}

// ─── FAQ Data ───────────────────────────────────────────────────────────────

export const RESIDENTIAL_FAQS = [
  {
    question: 'Are these prices final?',
    answer: 'These are market-rate estimates. Your final price may vary slightly based on property condition and location. We\'ll confirm before we start.',
  },
  {
    question: 'Is there a lock-in contract?',
    answer: 'No. Weekly and fortnightly bookings earn discounts automatically — no contract required. Cancel anytime.',
  },
  {
    question: 'What\'s included in a standard house clean?',
    answer: 'Dusting, vacuuming, mopping, kitchen and bathroom cleaning, surface sanitisation, and general tidying.',
  },
  {
    question: 'What\'s the difference between a standard clean and a deep clean?',
    answer: 'A standard clean covers regular maintenance. A deep clean is a thorough top-to-bottom service — ideal if the property hasn\'t been professionally cleaned recently.',
  },
  {
    question: 'Do you guarantee bond return with end-of-lease cleaning?',
    answer: 'Yes. We follow real estate-approved checklists and offer a Bond Back Guarantee — if anything\'s missed, we return to fix it at no charge.',
  },
  {
    question: 'Do you bring your own equipment?',
    answer: 'Yes. Our team arrives fully equipped with all supplies. You don\'t need to provide anything.',
  },
  {
    question: 'Can I book same-day for Airbnb turnovers?',
    answer: 'Yes — we specialise in fast, reliable Airbnb turnovers. Contact us directly for urgent bookings.',
  },
];

export const COMMERCIAL_FAQS = [
  {
    question: 'Are these commercial prices locked in?',
    answer: 'No. The calculator gives you a realistic starting range. All commercial pricing is confirmed after a free site assessment.',
  },
  {
    question: 'Is there a minimum charge?',
    answer: 'Yes — our minimum charge is $165 + GST per session.',
  },
  {
    question: 'Do you require a contract for commercial cleaning?',
    answer: 'Contracts are optional but unlock better per-session rates. We offer flexible arrangements for businesses of all sizes.',
  },
  {
    question: 'Can you clean outside business hours?',
    answer: 'Absolutely. We offer flexible scheduling including early morning, evening, and weekend cleans to minimise disruption.',
  },
  {
    question: 'Do you service medical centres and high-compliance environments?',
    answer: 'Yes. Healthcare and industrial cleaning is available with appropriate protocols, products, and trained staff.',
  },
  {
    question: 'How long does it take to get a formal commercial quote?',
    answer: 'After a site visit (usually 30 minutes), quotes are typically ready within 1–3 business days.',
  },
  {
    question: 'Can you handle multiple sites under one contract?',
    answer: 'Yes. Multi-site contracts are available and often attract better per-site pricing.',
  },
];
