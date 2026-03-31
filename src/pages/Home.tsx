import SEO from '@/components/seo/SEO';
import { LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import Hero from '@/components/sections/home/Hero';
import ClientLogos from '@/components/sections/home/ClientLogos';
import ServicesGrid from '@/components/sections/home/ServicesGrid';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import HowItWorks from '@/components/sections/home/HowItWorks';
import TrustBanner from '@/components/sections/home/TrustBanner';
import Testimonials from '@/components/sections/home/Testimonials';
import CTABanner from '@/components/sections/home/CTABanner';

export default function Home() {
  return (
    <div className="flex flex-col w-full -mt-24 lg:-mt-[100px]"> {/* Pull page up under fixed header */}
      <SEO 
        title="Anytime Cleaners - Professional Commercial & Residential Cleaning Melbourne"
        description="Anytime Cleaners provides expert commercial and residential cleaning services across Melbourne. 100% satisfaction guaranteed, green-clean certified, and 5-star rated."
      />
      <LocalBusinessSchema />
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <TrustBanner />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
