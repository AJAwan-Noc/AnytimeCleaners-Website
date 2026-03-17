import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBURBS } from '@/lib/suburbData';

export default function AreasWeClean() {
  // Sort suburbs alphabetically
  const sortedSuburbs = [...SUBURBS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="w-full flex flex-col min-h-screen pt-32 lg:pt-40 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">Our Coverage</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-brand-text mb-6">
              Areas We Clean
            </h1>
            <p className="text-brand-text-light text-lg max-w-2xl mx-auto">
              Anytime Cleaners proudly provides top-tier commercial and residential cleaning services across Greater Melbourne. Find your suburb below.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {sortedSuburbs.map((suburb) => (
            <motion.div 
              key={suburb.slug}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 }
              }}
            >
              <Link 
                to={`/commercial-cleaning/${suburb.slug}`}
                className="group flex flex-col justify-between h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-green/30 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-primary-green group-hover:text-white" />
                    </div>
                    <h2 className="font-heading font-bold text-xl text-brand-text group-hover:text-primary-green transition-colors">
                      {suburb.name}
                    </h2>
                  </div>
                  <p className="text-brand-text-light text-sm line-clamp-3 mb-6">
                    {suburb.intro}
                  </p>
                </div>
                
                <div className="flex items-center text-primary-green font-semibold text-sm mt-auto">
                  View Service Area
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contact fallback */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-bg-dark rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-blue opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="font-heading font-extrabold text-3xl text-white mb-4">Don't see your suburb?</h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We cover almost all areas of Greater Melbourne. Contact our friendly team to confirm if we service your specific location.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-8 py-4 font-bold transition-all hover:-translate-y-1 shadow-lg shadow-primary-green/30"
            >
              Contact Us Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
