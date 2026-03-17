import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Key, Sparkles, Home, Box, Wind, 
  Hammer, Grid, AppWindow, Sofa
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SERVICES = [
  { 
    icon: Key, 
    title: 'End of Lease Cleaning', 
    desc: 'Guarantee your bond back with our comprehensive, landlord-approved deep clean.',
    img: '/service-end-of-lease.jpg',
    fallback: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Sparkles, 
    title: 'Deep Cleaning', 
    desc: 'Intensive top-to-bottom scrub down for homes needing a fresh, sanitary reset.',
    img: '/service-deep-cleaning.jpg',
    fallback: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Home, 
    title: 'Regular House Cleaning', 
    desc: 'Weekly or fortnightly maintenance to keep your living spaces consistently pristine.',
    img: '/service-house-cleaning.jpg',
    fallback: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Box, 
    title: 'Move-In / Move-Out', 
    desc: 'Detailed sanitization of empty homes to ensure a fresh start for you or the next tenant.',
    img: '/service-move-in.jpg',
    fallback: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Wind, 
    title: 'Spring Cleaning', 
    desc: 'Annual thorough clean tackling neglected areas, inside cabinets, and forgotten corners.',
    img: '/service-spring-cleaning.jpg',
    fallback: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Hammer, 
    title: 'Post-Renovation Clean', 
    desc: 'Removal of fine construction dust, paint splatters, and debris after home upgrades.',
    img: '/service-post-reno.jpg',
    fallback: 'https://images.unsplash.com/photo-1504307651254-35680f35e5d3?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Grid, 
    title: 'Carpet Steam Cleaning', 
    desc: 'Hot water extraction to remove stubborn stains, allergens, and pet odors from carpets.',
    img: '/service-carpet-cleaning.jpg',
    fallback: 'https://images.unsplash.com/photo-1558384462-1bf718e26895?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: AppWindow, 
    title: 'Window Cleaning', 
    desc: 'Streak-free interior and exterior glass washing for crystal clear views and maximum light.',
    img: '/service-window-cleaning.jpg',
    fallback: 'https://images.unsplash.com/photo-1508247271458-1f48ab269785?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Sofa, 
    title: 'Upholstery Cleaning', 
    desc: 'Gentle yet effective stain and grit removal for sofas, armchairs, and dining seats.',
    img: '/service-upholstery.jpg',
    fallback: 'https://images.unsplash.com/photo-1629724803704-5e5886675ca2?q=80&w=600&auto=format&fit=crop'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ResidentialServices() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
              Tailored Cleaning Solutions for Every Home
            </h2>
            <p className="text-brand-text-light text-lg">
              From routine weekly upkeep to intensive deep cleans, our fully-insured and police-checked professionals deliver spotless results guaranteed to exceed your expectations.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = service.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-secondary-blue" />
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-xl text-brand-text mb-3 group-hover:text-secondary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text-light text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                <a 
                  href="#booking-form" 
                  className="text-secondary-blue font-bold text-sm tracking-wide uppercase flex items-center group-hover:text-primary-green transition-colors"
                >
                  Book Service
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild variant="default" size="lg" className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-10 py-6 font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <a href="#booking-form">View Full Pricing & Book</a>
          </Button>
        </div>

      </div>
    </section>
  );
}
