import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MonitorSmartphone, Sparkles, Coffee, Check } from 'lucide-react';

const STEPS = [
  {
    icon: MonitorSmartphone,
    title: '1. Book Online',
    description: 'Choose your preferred date and time through our fast, secure, and easy-to-use online booking platform.',
  },
  {
    icon: Sparkles,
    title: '2. We Clean',
    description: 'A fully vetted, experienced, and trusted cleaner arrives on time equipped to make your space shine.',
  },
  {
    icon: Coffee,
    title: '3. You Relax',
    description: 'Enjoy your sparkling clean home or office and spend your free time doing what you actually love.',
  }
];

const PROPERTIES = [
  'Houses', 'Apartments', 'Townhouses', 'Estates', 'Renovated buildings', 'Offices & Commercial'
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth line drawing
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">Simple Process</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-text mb-6">
              How It Works
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto mb-24">
          
          {/* Background Line */}
          <div className="absolute top-[3.5rem] left-0 w-full h-1 bg-gray-100 hidden md:block rounded-full overflow-hidden">
            {/* Animated Draw Line */}
            <motion.div 
              className="h-full bg-primary-green origin-left"
              style={{ scaleX }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-28 h-28 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10 group transition-transform duration-300 hover:scale-110 hover:border-primary-green/20">
                  <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-green" />
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-brand-text mb-4">{step.title}</h3>
                <p className="text-brand-text-light text-base leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h4 className="font-heading font-bold text-xl text-brand-text">We service all property types:</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {PROPERTIES.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100"
              >
                <Check className="w-4 h-4 text-primary-green" />
                <span className="font-semibold text-brand-text-light text-sm">{prop}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
