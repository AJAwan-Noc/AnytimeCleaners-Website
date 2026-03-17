import SEO from '@/components/seo/SEO';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import CommercialHero from '@/components/sections/commercial/CommercialHero';
import CommercialAbout from '@/components/sections/commercial/CommercialAbout';
import CommercialServices from '@/components/sections/commercial/CommercialServices';
import CommercialBenefits from '@/components/sections/commercial/CommercialBenefits';
import CommercialQuoteForm from '@/components/sections/commercial/CommercialQuoteForm';

export default function CommercialCleaning() {
  return (
    <div className="w-full flex flex-col min-h-screen pt-20 lg:pt-0 -mt-20 lg:-mt-[116px]">
      <SEO 
        title="Commercial Cleaning Melbourne - Professional Office & Industrial Cleaning"
        description="Anytime Cleaners offers top-tier commercial cleaning services in Melbourne. From corporate offices to industrial plants, we provide customized cleaning solutions."
        keywords="commercial cleaning melbourne, office cleaning melbourne, industrial cleaning melbourne, corporate cleaning services"
        canonical="https://anytimecleaners.com.au/commercial-cleaning"
      />
      <ServiceSchema 
        name="Commercial Cleaning" 
        description="Professional commercial and office cleaning services tailored to your business needs in Melbourne." 
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Commercial Cleaning', item: '/commercial-cleaning' }
        ]}
      />
      <CommercialHero />
      <CommercialAbout />
      <CommercialServices />
      <CommercialBenefits />
      <CommercialQuoteForm />
    </div>
  );
}
