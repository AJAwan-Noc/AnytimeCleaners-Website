import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star } from 'lucide-react';

import { Counter } from '@/components/ui/animated';

const INDICATORS = [
  { icon: Award, text: 'Cleaners in your Area', value: 150, prefix: '+', suffix: '' },
  { icon: ShieldCheck, text: 'Happiness Guarantee', value: 100, prefix: '', suffix: '%' },
  { icon: Star, text: '5-Star Rated Service', value: 500, prefix: '+', suffix: '' },
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
              <div className="bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 relative">
                <item.icon className="w-8 h-8 text-primary-green-light" />
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-primary-green-light">
                  {item.prefix && <span className="text-xl">{item.prefix}</span>}
                  <Counter value={item.value} />
                  {item.suffix && <span className="text-xl">{item.suffix}</span>}
                </span>
                <span className="font-heading font-medium text-sm tracking-wide text-white/90">{item.text}</span>
              </div>
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
