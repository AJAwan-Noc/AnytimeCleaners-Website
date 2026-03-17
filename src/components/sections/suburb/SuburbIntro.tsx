import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

interface SuburbIntroProps {
  suburbName: string;
  intro: string;
}

export default function SuburbIntro({ suburbName, intro }: SuburbIntroProps) {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <Building2 className="w-4 h-4" />
            About Our {suburbName} Service
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-text mb-6 leading-tight">
            Commercial Cleaning Experts in{' '}
            <span className="text-primary-green">{suburbName}</span>
          </h2>
          <p className="text-brand-text-light text-lg leading-relaxed">
            {intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
