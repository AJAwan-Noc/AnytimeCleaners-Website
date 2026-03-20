import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuburbHeroProps {
  suburbName: string;
  backgroundImage?: string;
}

const TRUST_BADGES = [
  'Triple ISO Certified',
  'Eco-Friendly Green Clean',
  '25+ Years Experience',
  '100% Happiness Guarantee',
];

export default function SuburbHero({ suburbName, backgroundImage }: SuburbHeroProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-bg-dark" style={{ position: 'relative' }}>
      {/* Background Image */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={`Commercial cleaning in ${suburbName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bg-dark/60 backdrop-blur-[2px]" />
        </div>
      ) : (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark/80 to-primary-green/20 z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-1" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-secondary-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-primary-green-light" />
            Commercial Cleaning · {suburbName} · Melbourne, VIC
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Professional Commercial Cleaning Services in{' '}
            <span className="text-primary-green-light">{suburbName}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Trusted by businesses across {suburbName} for over 25 years. Eco-friendly,
            fully insured, and available 7 days a week — we clean it, we mean it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={scrollToForm}
              className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl shadow-primary-green/30 transition-all hover:-translate-y-1 hover:shadow-primary-green/50 flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-bg-dark rounded-full px-10 py-6 text-lg font-bold transition-all"
            >
              <a href="tel:0383857705" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                03 8385 7705
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-1.5 text-white/70 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-primary-green-light shrink-0" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
