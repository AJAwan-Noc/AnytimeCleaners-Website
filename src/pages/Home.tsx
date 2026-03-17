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
    <div className="flex flex-col w-full -mt-32 lg:-mt-[120px]"> {/* Pull page up under fixed header */}
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
