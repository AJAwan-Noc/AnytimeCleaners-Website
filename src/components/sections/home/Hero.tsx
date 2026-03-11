import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Star, ShieldCheck, Clock, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const bounceVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 150, 
      damping: 12,
      bounce: 0.5
    }
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [0.6, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center lg:justify-start overflow-hidden pt-20"
    >
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/hero-commercial-cleaning.jpg")',
            /* Fallback background in case image isn't available yet */
            backgroundColor: '#0D47A1'
          }}
        />
      </motion.div>
      
      {/* Dark Overlay Gradient for readability */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-bg-dark/95 via-bg-dark/80 to-transparent lg:w-[80%]"
        style={{ opacity }}
      />
      
      <div className="absolute inset-0 z-10 bg-black/40 lg:hidden" /> {/* Extra darkening for mobile */}

      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-3xl text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Rating */}
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 items-center">
              <span className="text-white font-bold text-sm mr-2">4.8</span>
              <div className="flex items-center text-accent-yellow">
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
              </div>
              <span className="text-white/80 text-xs ml-3 font-medium">based on 496 reviews</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUpVariant}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                <span className="text-primary-green relative">
                Commercial
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-green opacity-70 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span><br className="hidden md:block"/> Cleaning Services in Australia!
            </h1>
          </motion.div>

          {/* Subheading / Description (Optional but good for design) */}
          <motion.div variants={fadeUpVariant}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience the pinnacle of cleanliness with our Green-Clean revolution. We guarantee satisfaction for commercial and residential spaces.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            variants={staggerContainer}
          >
            {[
              { text: "Trusted Professionals", icon: ShieldCheck },
              { text: "Saves You Time", icon: Clock },
              { text: "Secure Payments", icon: CreditCard },
            ].map((badge, idx) => (
              <motion.div 
                key={idx} 
                variants={bounceVariant}
                className="flex items-center bg-white/10 backdrop-blur-md rounded-lg py-2 px-3 border border-white/10"
              >
                <badge.icon size={18} className="text-primary-green mr-2" />
                <span className="text-sm font-semibold text-white">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={fadeUpVariant}
          >
            {/* Pulsing idle button effect added via animation */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-8 py-7 font-bold text-lg shadow-[0_0_30px_rgba(124,179,66,0.4)]">
                <Link to="/contact">
                  Book Now <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white border-white text-primary-green hover:bg-gray-100 rounded-full px-8 py-7 font-bold text-lg transition-all duration-300 hover:scale-105">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:text-primary-green hover:bg-white rounded-full px-8 py-7 font-bold text-lg transition-all duration-300 hover:scale-105">
              <Link to="/contact">Free Cleaning Trial</Link>
            </Button>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative gradient at the bottom blending into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
