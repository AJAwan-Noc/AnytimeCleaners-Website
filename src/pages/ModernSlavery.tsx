import { motion } from 'framer-motion';
import { ShieldAlert, Users, Scale, AlertCircle } from 'lucide-react';

export default function ModernSlavery() {
  const commitments = [
    {
      title: "Ethical Procurement",
      description: "We rigorously assess all suppliers and subcontractors to ensure zero tolerance for forced labor or exploitation in our supply chain.",
      icon: <Scale className="w-8 h-8 text-secondary-blue" />
    },
    {
      title: "Fair Employment",
      description: "Our staff are directly employed, receiving fair wages and benefits under Australian law. We do not use exploitative contracting models.",
      icon: <Users className="w-8 h-8 text-primary-green" />
    },
    {
      title: "Whistleblower Protection",
      description: "We provide secure, confidential channels for employees or stakeholders to report any unethical practices without fear of retaliation.",
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center p-4 bg-orange-50 rounded-full mb-6 text-orange-500 border border-orange-100">
            <ShieldAlert size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4">
            Modern Slavery Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Anytime Cleaners is fundamentally opposed to slavery, human trafficking, and all forms of worker exploitation.
          </p>
        </motion.div>

        {/* Policy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-12"
        >
          <h2 className="text-2xl font-bold font-heading text-bg-dark mb-6">Our Policy Statement</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The cleaning industry has historically carried risks of modern slavery and worker exploitation. At Anytime Cleaners, we stand firmly against these practices. We are committed to acting ethically and with integrity in all our business dealings and relationships.
            </p>
            <p>
              We implement and enforce effective systems and controls to ensure modern slavery is not taking place anywhere in our own business or in any of our supply chains, consistent with our obligations under the Modern Slavery Act 2018 (Cth).
            </p>
            <p>
              Our Zero-Assumption Protocol extends beyond our cleaning standards—it applies to our ethical standards as well. We do not assume our supply chain is free of exploitation; we actively verify it.
            </p>
          </div>
        </motion.div>

        {/* Core Commitments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-bg-dark mb-8 text-center border-b border-gray-200 pb-4">
            Our Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {commitment.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-bg-dark mb-2">{commitment.title}</h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
