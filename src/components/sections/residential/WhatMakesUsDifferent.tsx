import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, PhoneCall } from 'lucide-react';

const DIFFERENTIATORS = [
  "Professional and Highly Experienced Cleaning Team",
  "All Equipment and Chemicals Provided",
  "Insured Service Against Damages",
  "Industry Leading Service Satisfaction Guarantee",
  "We're Guaranteed To Show Up Or It's Free"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image Box */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[600px] border-8 border-white will-change-transform"
            >
              <img 
                src="/images/Residential/Regular House Cleaning.png" 
                alt="Happy Anytime Cleaners professional cleaning a residential home in Melbourne"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center justify-between"
              >
                <div>
                  <p className="text-secondary-blue font-bold text-lg mb-1">Satisfaction</p>
                  <p className="text-brand-text font-heading font-extrabold text-2xl">100% Guaranteed</p>
                </div>
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-primary-green">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Content & Checklist */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">Here's What You Get!</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-brand-text mb-6 leading-tight">
                What Makes Us Different?
              </h2>
              <p className="text-brand-text-light text-lg leading-relaxed">
                Anytime Cleaners delivers unmatched cleaning services designed to slot seamlessly into your busy lifestyle. We bring everything needed to transform your home.
              </p>
            </motion.div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5 mb-12"
            >
              {DIFFERENTIATORS.map((item, idx) => (
                <motion.li 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary-blue/20 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-blue/10 flex items-center justify-center text-secondary-blue flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-secondary-blue group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-brand-text text-lg leading-tight pt-1">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-secondary-blue rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-secondary-blue/20"
            >
              <div>
                <h4 className="font-heading font-bold text-2xl mb-2">Need help? Call us</h4>
                <p className="text-secondary-blue-100">Our friendly team is ready to assist you.</p>
              </div>
              
              <a 
                href="tel:0383857705" 
                className="group flex items-center gap-3 bg-white text-secondary-blue px-6 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors shrink-0"
              >
                <PhoneCall className="w-6 h-6 animate-pulse text-primary-green" />
                03 8385 7705
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
