import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuburbServiceAreaProps {
  suburbName: string;
  nearby: string[];
}

// Map suburb display names to slugs
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default function SuburbServiceArea({ suburbName, nearby }: SuburbServiceAreaProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5"
          >
            <div className="flex items-center gap-2 text-primary-green font-bold text-sm uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Service Area
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-text leading-tight mb-4">
              We Service {suburbName} &amp; Surrounding Suburbs
            </h2>
            <p className="text-brand-text-light leading-relaxed mb-6">
              Our commercial cleaning teams cover a wide area around {suburbName},
              ensuring fast response times and consistent staffing. Explore our services
              in surrounding suburbs below.
            </p>
            <Link
              to="/commercial-cleaning"
              className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-primary-green-dark transition-colors group"
            >
              View all service areas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Nearby suburb chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <p className="text-sm font-bold text-brand-text-light uppercase tracking-wider mb-5">
                Nearby Suburbs We Serve
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Current suburb chip (non-link) */}
                <span className="inline-flex items-center gap-1.5 bg-primary-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  {suburbName}
                </span>

                {/* Nearby suburb chips */}
                {nearby.map((suburb, i) => (
                  <motion.div
                    key={suburb}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={`/commercial-cleaning/${toSlug(suburb)}`}
                      className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-brand-text hover:border-primary-green hover:text-primary-green hover:bg-primary-green/5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                    >
                      <MapPin className="w-3.5 h-3.5 opacity-60" />
                      {suburb}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between text-sm text-brand-text-light">
                <span>📍 All areas within Greater Melbourne</span>
                <span className="font-semibold text-primary-green">30+ Suburbs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
