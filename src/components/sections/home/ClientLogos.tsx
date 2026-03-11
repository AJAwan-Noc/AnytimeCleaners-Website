import { Building, Building2, Factory, Hospital, Landmark, Plane, Store, Briefcase } from 'lucide-react';

const CLIENTS = [
  { icon: Building, name: 'TechCorp Solutions' },
  { icon: Building2, name: 'Metro Commerce' },
  { icon: Factory, name: 'Industrial Pro' },
  { icon: Hospital, name: 'City MedCare' },
  { icon: Landmark, name: 'First National' },
  { icon: Plane, name: 'AeroSpace Inc.' },
  { icon: Store, name: 'Retail Partners' },
  { icon: Briefcase, name: 'Law & Associates' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center font-heading font-bold text-2xl text-brand-text/60 uppercase tracking-widest">
          We Have Proudly Served
        </h2>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        {/* Left and Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-[200px] bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-[200px] bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Marquee Container (paused on hover) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] ease-linear">
          {/* We render exactly 2 identical lists side by side to ensure seamless looping. 
              Each list takes up its own natural width. The animation translates by -100% (the width of one list). */}
          {[...Array(2)].map((_, listIndex) => (
            <div key={listIndex} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
              {CLIENTS.map((client, idx) => (
                <div 
                  key={`${listIndex}-${idx}`}
                  className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group/logo"
                >
                  <client.icon size={36} className="text-primary-green transition-transform group-hover/logo:scale-110" />
                  <span className="font-heading font-semibold text-lg text-brand-text whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
