import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FEATURES = [
  'Professional Team',
  'Customized Solutions',
  'Reliable & Trustworthy',
  'Quality Guarantee'
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image with Parallax */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              style={{ y }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square w-full"
            >
              <img 
                src="/team-portrait.jpg" 
                alt="Professional Cleaning Team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-primary-green/10 mix-blend-overlay" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-green/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-primary-green w-8 h-8" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-3xl text-brand-text">100%</div>
                  <div className="text-brand-text-light text-sm font-semibold uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">The Anytime Difference</span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-text mb-6">
                Why 'Anytime Cleaners' Services
              </h2>
              <p className="text-brand-text-light text-lg mb-8 leading-relaxed">
                We go above and beyond standard cleaning. Our dedicated teams use eco-friendly products and advanced techniques to ensure every corner of your property shines, giving you back your most valuable asset: time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {FEATURES.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary-green" />
                    </div>
                    <span className="font-semibold text-brand-text text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Button asChild size="lg" className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-8 py-7 font-bold text-lg shadow-lg hover:-translate-y-1 transition-transform w-full sm:w-auto">
                  <Link to="/contact">Get An Instant Price <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-blue/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-secondary-blue" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold text-brand-text-muted tracking-wide">Call 24/7</span>
                    <a href="tel:0383857705" className="font-bold text-lg text-brand-text hover:text-primary-green transition-colors">
                      03 8385 7705
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
