import ResidentialHero from '@/components/sections/residential/ResidentialHero';
import ResidentialBookingForm from '@/components/sections/residential/ResidentialBookingForm';
import ResidentialServices from '@/components/sections/residential/ResidentialServices';
import WhatMakesUsDifferent from '@/components/sections/residential/WhatMakesUsDifferent';
import Testimonials from '@/components/sections/home/Testimonials';
import CTABanner from '@/components/sections/home/CTABanner';

export default function ResidentialCleaning() {
  return (
    <main className="w-full flex flex-col pt-0 pb-0">
      <ResidentialHero />
      <ResidentialBookingForm />
      <ResidentialServices />
      <WhatMakesUsDifferent />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
