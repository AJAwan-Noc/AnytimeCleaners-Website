import { useParams, Navigate } from 'react-router-dom';
import { getSuburbBySlug } from '@/lib/suburbData';
import SEO from '@/components/seo/SEO';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import SuburbHero from '@/components/sections/suburb/SuburbHero';
import SuburbIntro from '@/components/sections/suburb/SuburbIntro';
import SuburbServiceArea from '@/components/sections/suburb/SuburbServiceArea';
import CommercialServices from '@/components/sections/commercial/CommercialServices';
import CommercialBenefits from '@/components/sections/commercial/CommercialBenefits';
import CommercialQuoteForm from '@/components/sections/commercial/CommercialQuoteForm';

export default function SuburbLandingPage() {
  const { suburb } = useParams<{ suburb: string }>();
  const suburbData = getSuburbBySlug(suburb ?? '');

  // Graceful 404 fallback for unknown slugs
  if (!suburbData) {
    return <Navigate to="/commercial-cleaning" replace />;
  }

  return (
    <div className="w-full flex flex-col min-h-screen pt-20 lg:pt-0 -mt-20 lg:-mt-[116px]">
      <SEO 
        title={`Commercial Cleaning ${suburbData.name} Melbourne`}
        description={`Professional commercial and office cleaning services in ${suburbData.name}, Melbourne. Get a free quote for expert cleaning tailored to your ${suburbData.name} business.`}
        keywords={`commercial cleaning ${suburbData.name.toLowerCase()}, office cleaning ${suburbData.name.toLowerCase()}, cleaning services ${suburbData.name.toLowerCase()}`}
        canonical={`https://anytimecleaners.com.au/commercial-cleaning/${suburbData.slug}`}
      />
      <ServiceSchema 
        name={`Commercial Cleaning in ${suburbData.name}`} 
        description={`Professional, top-tier commercial cleaning for businesses in ${suburbData.name}, Melbourne.`} 
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Commercial Cleaning', item: '/commercial-cleaning' },
          { name: suburbData.name, item: `/commercial-cleaning/${suburbData.slug}` }
        ]}
      />
      <SuburbHero suburbName={suburbData.name} />
      <SuburbIntro suburbName={suburbData.name} intro={suburbData.intro} />
      <CommercialServices />
      <CommercialBenefits />
      <SuburbServiceArea suburbName={suburbData.name} nearby={suburbData.nearby} />
      <CommercialQuoteForm />
    </div>
  );
}
