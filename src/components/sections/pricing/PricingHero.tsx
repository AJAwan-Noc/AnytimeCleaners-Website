import { motion } from 'framer-motion';
import { FadeUp } from '@/components/ui/animated';
import { Star } from 'lucide-react';

export default function PricingHero() {
  return (
    <section className="pt-20 pb-12 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <FadeUp>
          <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">
            Pricing
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
            Get an Instant Price Estimate
          </h1>
          <p className="text-brand-text-light text-lg max-w-2xl mx-auto mb-6">
            Tell us about your space and we'll show you a realistic estimate — no obligation, no sign-up.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent-yellow/10 px-5 py-2.5 rounded-full border border-accent-yellow/20"
          >
            <Star className="w-5 h-5 text-accent-yellow fill-accent-yellow" />
            <span className="font-semibold text-brand-text text-sm">4.8 rated</span>
            <span className="text-brand-text-muted text-sm">|</span>
            <span className="text-brand-text-muted text-sm">496 reviews</span>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
