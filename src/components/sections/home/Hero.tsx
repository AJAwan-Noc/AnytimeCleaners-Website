import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Star, ShieldCheck, Clock, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Simple decorative particles component using standard HTML/CSS animations
function Particles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 6 + 2;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${i % 3 === 0 ? 'bg-primary-green' : i % 3 === 1 ? 'bg-secondary-blue' : 'bg-white'}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 100],
              x: Math.sin(i) * 30,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}

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
  const opacity = useTransform(scrollY, [0, 600], [0.6, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center lg:justify-start overflow-hidden pt-28 pb-12 lg:pt-24 lg:pb-16"
      style={{ position: 'relative' }}
    >
      {/* Background Image without excessive scaling to match screen size precisely */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/HomePage/HomepageHero.jpg")',
            /* Fallback background in case image isn't available yet */
            backgroundColor: '#0E2336'
          }}
        />
      </div>
      
      {/* Dark Overlay Gradient for readability */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-bg-dark/95 via-bg-dark/80 to-transparent lg:w-[80%] will-change-opacity"
        style={{ opacity }}
      />
      <div className="absolute inset-0 z-10 bg-bg-dark/40 lg:hidden" /> {/* Extra darkening for mobile */}

      <Particles />

      <div className="container relative z-20 mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full">
          
          {/* ── Left Side: Text Content ────────────────────────── */}
          <motion.div 
            className="lg:col-span-6 text-center lg:text-left will-change-contents"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                  <span className="text-primary-green relative">
                  Commercial
                </span><br className="hidden md:block"/> <span className="text-secondary-blue">Cleaning Services</span> in Australia!
              </h1>
            </motion.div>

            {/* Subheading / Description */}
            <motion.div variants={fadeUpVariant}>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience the pinnacle of cleanliness with our Green-Clean revolution. We guarantee satisfaction for commercial and residential spaces.
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
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
                  className="flex items-center bg-white/5 backdrop-blur-md rounded-lg py-1.5 px-3 border border-white/10"
                >
                  <badge.icon size={16} className="text-primary-green mr-2" />
                  <span className="text-xs font-semibold text-white">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
              variants={fadeUpVariant}
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-6 py-6 font-bold text-base shadow-[0_0_20px_rgba(161,228,54,0.3)]">
                <Link to="/contact">Book Now <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white hover:text-bg-dark rounded-full px-6 py-6 font-bold text-base backdrop-blur-sm">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:border-white rounded-full px-6 py-6 font-bold text-base">
                <Link to="/contact">Free Cleaning Trial</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right Side: Booking Form ──────────────────────── */}
          <motion.div 
            className="lg:col-span-6 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-bg-dark mb-6 flex items-center gap-2">
                Book Now
                <span className="w-8 h-1 bg-primary-green rounded-full"></span>
              </h2>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-bg-dark/60 uppercase ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-bg-dark/60 uppercase ml-1">Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-bg-dark/60 uppercase ml-1">Time</label>
                    <input 
                      type="time" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-bg-dark/60 uppercase ml-1">Facility Size</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-7 focus:ring-primary-green/50 focus:border-primary-green shadow-sm text-bg-dark font-medium h-[64px]">
                        <SelectValue placeholder="Facility Size" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-100 shadow-xl rounded-xl z-[90]">
                        <SelectItem value="under-1000">Under 1000 sq ft</SelectItem>
                        <SelectItem value="1000-5000">1000 - 5000 sq ft</SelectItem>
                        <SelectItem value="5000-10000">5000 - 10000 sq ft</SelectItem>
                        <SelectItem value="over-10000">10000+ sq ft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-bg-dark/60 uppercase ml-1">Service Requirement</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-7 focus:ring-primary-green/50 focus:border-primary-green shadow-sm text-bg-dark font-medium h-[64px]">
                        <SelectValue placeholder="Service Requirement" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-100 shadow-xl rounded-xl z-[90]">
                        <SelectItem value="daily">Daily Cleaning</SelectItem>
                        <SelectItem value="weekly">Weekly Cleaning</SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                        <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                        <SelectItem value="restroom">Restroom Sanitization</SelectItem>
                        <SelectItem value="window">Window Cleaning</SelectItem>
                        <SelectItem value="custom">Custom Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-green hover:bg-primary-green-dark text-white py-6 rounded-lg font-bold text-lg shadow-lg transition-all hover:scale-[1.02] active:scale-95 mt-2"
                >
                  Apply For Free Cleaning Trial
                </Button>
                
                <p className="text-[10px] text-center text-bg-dark/40 font-medium">
                  * By clicking the button, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative gradient at the bottom blending into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
