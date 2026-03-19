import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "Trusted Professionals" },
  { icon: Clock, text: "Saves You Time" },
  { icon: CreditCard, text: "Secure Payments" },
];

export default function ResidentialHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        <img 
          src="/images/Residential/ResidentialHero.png" 
          alt="Spotless residential home cleaning in Melbourne" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl mt-20">
        
        {/* Animated Headline */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-blue/20 text-blue-300 font-bold text-sm tracking-widest uppercase mb-6 border border-secondary-blue/30">
            No Worries, Mate — We'll Make It Shine!
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            We Do It <span className="text-secondary-blue">All</span> for you
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            Book online or call <a href="tel:0383857705" className="text-primary-green hover:underline">03 8385 7705</a>
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white font-medium text-sm md:text-base">
                <badge.icon size={20} className="text-secondary-blue" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <a 
              href="#booking-form" 
              className="inline-flex items-center justify-center bg-secondary-blue hover:bg-secondary-blue/90 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-secondary-blue/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Book Your Cleaning Now
            </a>
            <p className="text-white/60 text-xs">*T & C Apply</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
