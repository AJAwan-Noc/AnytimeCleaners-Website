import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: "What is included in commercial cleaning?",
    answer: "Our commercial cleaning covers all essential areas including workspaces, restrooms, break rooms, and reception areas. We typically handle dusting, vacuuming, mopping, trash removal, and sanitization of high-touch surfaces. We can also customize the checklist based on your specific facility needs."
  },
  {
    question: "How much does commercial cleaning cost?",
    answer: "Pricing depends on the size of your facility, the frequency of cleaning, and the specific services required. We offer free, no-obligation site visits to provide you with an accurate, custom-tailored quote. Contact us today to arrange an assessment."
  },
  {
    question: "Why use a commercial cleaning company?",
    answer: "A professional cleaning company ensures a consistently clean, healthy environment for your staff and clients. It improves workplace productivity, reduces sick days by eliminating germs, extends the life of your assets (like carpets and hard floors), and ensures you make a great first impression."
  },
  {
    question: "What areas do you service?",
    answer: "Based in Caroline Springs, we proudly service the greater Melbourne metropolitan area. This includes the CBD, western suburbs, northern suburbs, and surrounding business districts. If you're unsure if we cover your area, just give us a call!"
  },
  {
    question: "How do I book a cleaning service?",
    answer: "Booking is simple. You can use our online quote request forms, call us directly at 03 8385 7705, or email info@anytimecleaners.com.au. We'll discuss your needs, provide a transparent quote, and schedule your clean at a time that minimizes disruption to your business."
  },
  {
    question: "Are your cleaners insured?",
    answer: "Absolutely. All our cleaners undergo strict police and background checks. Additionally, Anytime Cleaners is fully insured with comprehensive public liability coverage, giving you complete peace of mind while we work on your premises."
  }
];

export default function ContactFAQ() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-blue/10 text-secondary-blue font-bold text-sm tracking-widest uppercase mb-4">
              Common Questions
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-text-light text-lg">
              Find quick answers to common questions about our services, pricing, and operations.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
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

      </div>
    </section>
  );
}
