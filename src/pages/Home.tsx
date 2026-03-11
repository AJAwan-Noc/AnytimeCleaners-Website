import Hero from '@/components/sections/home/Hero';
import ClientLogos from '@/components/sections/home/ClientLogos';
import ServicesGrid from '@/components/sections/home/ServicesGrid';

export default function Home() {
  return (
    <div className="flex flex-col w-full -mt-32 lg:-mt-[120px]"> {/* Pull page up under fixed header */}
      <Hero />
      <ClientLogos />
      <ServicesGrid />
    </div>
  );
}
