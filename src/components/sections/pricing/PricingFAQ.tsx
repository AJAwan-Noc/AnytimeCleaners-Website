import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/ui/animated';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RESIDENTIAL_FAQS, COMMERCIAL_FAQS } from '@/lib/pricingData';

type Mode = 'residential' | 'commercial';

interface PricingFAQProps {
  activeMode: Mode;
}

export default function PricingFAQ({ activeMode }: PricingFAQProps) {
  const faqs = activeMode === 'residential' ? RESIDENTIAL_FAQS : COMMERCIAL_FAQS;

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-blue/10 text-secondary-blue font-bold text-sm tracking-widest uppercase mb-4">
            {activeMode === 'residential' ? 'Residential' : 'Commercial'} Questions
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-text-light text-lg">
            Find quick answers about our {activeMode} pricing and services.
          </p>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`${activeMode}-${index}`}
                  value={`item-${index}`}
                  className="border-b border-gray-100 last:border-0"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-lg text-brand-text hover:text-primary-green transition-colors py-6 data-[state=open]:text-primary-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-light text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
