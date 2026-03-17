import CommercialHero from '@/components/sections/commercial/CommercialHero';
import CommercialAbout from '@/components/sections/commercial/CommercialAbout';
import CommercialServices from '@/components/sections/commercial/CommercialServices';
import CommercialBenefits from '@/components/sections/commercial/CommercialBenefits';
import CommercialQuoteForm from '@/components/sections/commercial/CommercialQuoteForm';

export default function CommercialCleaning() {
  return (
    <div className="w-full flex flex-col min-h-screen pt-20 lg:pt-0 -mt-20 lg:-mt-[116px]">
      <CommercialHero />
      <CommercialAbout />
      <CommercialServices />
      <CommercialBenefits />
      <CommercialQuoteForm />
    </div>
  );
}
