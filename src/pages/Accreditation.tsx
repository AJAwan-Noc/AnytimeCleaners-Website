import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System. Ensuring consistent, high-quality services to meet customer and regulatory requirements.",
    icon: <Award className="w-8 h-8 text-secondary-blue" />
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management System. Our commitment to minimizing our environmental footprint.",
    icon: <Award className="w-8 h-8 text-primary-green" />
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety. Protecting our employees, clients, and partners at every workplace.",
    icon: <Award className="w-8 h-8 text-purple-600" />
  }
];

const memberships = [
  "National Cleaning Providers Association",
  "Green Building Council Member",
  "Victorian Chamber of Commerce and Industry",
  "Facilities Management Council Australia"
];

export default function Accreditation() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center p-4 bg-yellow-50 rounded-full mb-6 text-accent-yellow border border-yellow-100">
            <ShieldCheck size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4">
            Our Accreditations & Memberships
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to hold triple ISO certification and active memberships in leading industry bodies, guaranteeing world-class service standards.
          </p>
        </motion.div>

        {/* ISO Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-bg-dark mb-8 text-center border-b border-gray-200 pb-4">
            Triple ISO Certified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-bg-dark mb-4">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Memberships & Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold font-heading text-bg-dark mb-6 flex items-center">
              Industry Memberships
            </h3>
            <ul className="space-y-4">
              {memberships.map((membership, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{membership}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 bg-gradient-to-br from-bg-dark to-bg-navy text-white text-center flex flex-col justify-center items-center"
          >
            <Award size={64} className="text-accent-yellow mb-4" />
            <h3 className="text-2xl font-bold font-heading mb-2 text-accent-yellow">Award-Winning Service</h3>
            <p className="text-gray-200">
              Recognized consistently for our Zero-Assumption Protocol and Green-Clean initiatives across Australia.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
