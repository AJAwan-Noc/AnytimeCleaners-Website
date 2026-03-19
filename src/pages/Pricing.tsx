import { useState } from 'react';
import SEO from '@/components/seo/SEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import PricingHero from '@/components/sections/pricing/PricingHero';
import ModeSwitcher from '@/components/sections/pricing/ModeSwitcher';
import ResidentialCalculator from '@/components/sections/pricing/ResidentialCalculator';
import CommercialCalculator from '@/components/sections/pricing/CommercialCalculator';
import PricingTables from '@/components/sections/pricing/PricingTables';
import HowPricingWorks from '@/components/sections/pricing/HowPricingWorks';
import WhatsIncluded from '@/components/sections/pricing/WhatsIncluded';
import PricingFAQ from '@/components/sections/pricing/PricingFAQ';
import PricingCTA from '@/components/sections/pricing/PricingCTA';
import StickyMobileCTA from '@/components/sections/pricing/StickyMobileCTA';

type Mode = 'residential' | 'commercial';

export default function Pricing() {
  const [activeMode, setActiveMode] = useState<Mode>('residential');

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Pricing - Instant Cleaning Price Estimates"
        description="Get instant price estimates for residential and commercial cleaning services from Anytime Cleaners Melbourne. No obligation, no sign-up required. Standard, deep, bond, and carpet cleaning rates."
        canonical="https://anytimecleaners.com.au/pricing"
        keywords="cleaning prices melbourne, house cleaning cost, commercial cleaning rates, bond cleaning price, carpet steam cleaning cost"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', item: '/' },
          { name: 'Pricing', item: '/pricing' },
        ]}
      />

      {/* Sentinel for sticky mobile CTA */}
      <div id="pricing-hero-sentinel" />

      <PricingHero />
      <ModeSwitcher activeMode={activeMode} setActiveMode={setActiveMode} />

      {activeMode === 'residential' ? (
        <ResidentialCalculator />
      ) : (
        <CommercialCalculator />
      )}

      <PricingTables activeMode={activeMode} />
      <HowPricingWorks />
      <WhatsIncluded />
      <PricingFAQ activeMode={activeMode} />
      <PricingCTA />
      <StickyMobileCTA />
    </div>
  );
}
