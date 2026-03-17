import SEO from '@/components/seo/SEO';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import ResidentialHero from '@/components/sections/residential/ResidentialHero';
import ResidentialBookingForm from '@/components/sections/residential/ResidentialBookingForm';
import ResidentialServices from '@/components/sections/residential/ResidentialServices';
import WhatMakesUsDifferent from '@/components/sections/residential/WhatMakesUsDifferent';
import Testimonials from '@/components/sections/home/Testimonials';
import CTABanner from '@/components/sections/home/CTABanner';

export default function ResidentialCleaning() {
  return (
    <main className="w-full flex flex-col pt-0 pb-0">
      <SEO 
        title="Residential Cleaning Melbourne - Top-Rated House & Bond Cleaning"
        description="Experience a spotless home with Anytime Cleaners. We provide high-quality house cleaning, end of lease cleaning, and carpet steam cleaning across Melbourne."
        keywords="residential cleaning melbourne, house cleaning melbourne, end of lease cleaning melbourne, bond cleaning melbourne"
        canonical="https://anytimecleaners.com.au/residential-cleaning"
      />
      <ServiceSchema 
        name="Residential Cleaning" 
        description="Professional house and residential cleaning services in Melbourne, guaranteed to make your home shine." 
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Residential Cleaning', item: '/residential-cleaning' }
        ]}
      />
      <ResidentialHero />
      <ResidentialBookingForm />
      <ResidentialServices />
      <WhatMakesUsDifferent />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
