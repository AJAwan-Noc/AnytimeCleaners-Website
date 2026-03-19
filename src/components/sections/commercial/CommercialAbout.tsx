import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const STORY_POINTS = [
  'Triple ISO Certified (Quality, Safety, Environment)',
  'Green-Clean revolution focusing on sustainability',
  'Tech-driven efficiency & responsive reporting',
  'We focus on your goals, delivering reliable results',
];

// Reusable Counter component
function AnimatedCounter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return (
    <motion.span 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {rounded}
    </motion.span>
  );
}

// Decimal Counter for ratings like 4.8
function AnimatedDecimal({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return (
    <motion.span 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {rounded}
    </motion.span>
  );
}

export default function CommercialAbout() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-text mb-6 leading-tight">
                A Trusted Triple ISO Certified Commercial Cleaning Company in Australia
              </h2>
              
              <div className="space-y-6 text-brand-text-light text-lg mb-8 leading-relaxed">
                <p>
                  At Anytime Cleaners, we believe that a clean workspace is the foundation of a prosperous business. We aren't just cleaners; we are your partners in maintaining a professional image, enhancing employee wellbeing, and protecting your physical assets.
                </p>
                <p>
                  Backed by 25+ years of industry experience and trusted by major Australian brands, our innovative 'Green-Clean' methodology ensures we leave a carbon-neutral footprint without compromising on hospital-grade sanitization. 
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {STORY_POINTS.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-1" />
                    <span className="font-medium text-brand-text text-sm leading-tight">{point}</span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Right: Image & Stats */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3] w-full border-4 border-white bg-[#f7f9f8] flex items-center justify-center p-4"
            >
              <img 
                src="/images/Commercial/Certifications.png" 
                alt="Anytime Cleaners Triple ISO Certified: Quality, Safety, and Environmental Management"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Overlapping Stats Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 lg:-bottom-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
            >
              <div className="grid grid-cols-3 gap-4 divide-x divide-gray-200">
                <div className="text-center px-2">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-green mb-1">
                    <AnimatedCounter from={0} to={25} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-text-muted uppercase tracking-wider">Years</div>
                </div>
                
                <div className="text-center px-2">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-secondary-blue mb-1">
                    <AnimatedCounter from={0} to={496} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-text-muted uppercase tracking-wider">Reviews</div>
                </div>
                
                <div className="text-center px-2">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-accent-yellow mb-1">
                    <AnimatedDecimal from={0} to={4.8} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-text-muted uppercase tracking-wider">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
