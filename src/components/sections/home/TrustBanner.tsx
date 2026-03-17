import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star } from 'lucide-react';

const INDICATORS = [
  { icon: Award, text: 'Trusted in your Area Cleaners' },
  { icon: ShieldCheck, text: '100% Happiness Guarantee' },
  { icon: Star, text: '5-Star Rated Service' },
];

export default function TrustBanner() {
  return (
    <section className="bg-bg-dark text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {INDICATORS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary-green-light" />
              </div>
              <span className="font-heading font-bold text-lg tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/50 text-xs italic">*Terms & Conditions Apply</p>
        </div>
      </div>
    </section>
  );
}
