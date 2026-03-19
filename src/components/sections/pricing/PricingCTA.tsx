import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-bg-dark via-primary-green to-secondary-blue"
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Overlay dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-accent-yellow animate-pulse" />
          </div>

          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Ready for a Spotless Space?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today — residential or commercial, we've got you covered.
          </p>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary-green hover:text-primary-green-dark rounded-full px-10 py-8 font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-white transition-all"
            >
              <Link to="/contact">Get My Free Quote →</Link>
            </Button>
          </motion.div>

          <p className="text-white/70 text-base mt-8">
            Or call us:{' '}
            <a
              href="tel:0383857705"
              className="text-white font-bold hover:underline"
            >
              03 8385 7705
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
