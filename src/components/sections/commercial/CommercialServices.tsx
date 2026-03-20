import { motion } from 'framer-motion';
import { 
  Building2, Factory, ShoppingBag, Stethoscope, 
  GraduationCap, Utensils, Zap, Hotel, Plane,
  Dumbbell, Library, Briefcase, Microscope, Camera,
  Computer, Store, Flame, Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SERVICES = [
  { 
    icon: Building2, 
    title: 'Corporate Offices', 
    desc: 'Detailed cleaning ensuring a spotless, productive, and germ-free work environment for your team and clients.',
    image: '/images/Commercial/Corporate Offices.png'
  },
  { 
    icon: Factory, 
    title: 'Industrial & Manufacturing', 
    desc: 'Heavy-duty cleaning adhering strictly to OSHA and Australian safety standards for warehouses and factories.',
    image: '/images/Commercial/Industrial & Manufacturing.png'
  },
  { 
    icon: ShoppingBag, 
    title: 'Retail & Shopping Centers', 
    desc: 'High foot-traffic sanitation focused on shining floors, clear glass, and pristine customer restrooms.',
    image: '/images/Commercial/Retail & Shopping centers.png'
  },
  { 
    icon: Stethoscope, 
    title: 'Healthcare & Medical', 
    desc: 'Hospital-grade disinfection using advanced electrostatic sprayers to eliminate pathogens and protect patients.',
    image: '/images/Commercial/Healthcare & Medical.png'
  },
  { 
    icon: GraduationCap, 
    title: 'Educational Facilities', 
    desc: 'Toxic-free, deep-cleaning services for schools, universities, and childcare centers to keep students safe.',
    image: '/images/Commercial/Educational Facilities.png'
  },
  { 
    icon: Utensils, 
    title: 'Hospitality & Venues', 
    desc: 'Comprehensive back-of-house and front-of-house cleaning for restaurants, pubs, and event spaces.',
    image: '/images/Commercial/Hospitality & Venues.png'
  },
  { 
    icon: Briefcase, 
    title: 'Financial Institutions', 
    desc: 'Discreet, secure, and meticulous cleaning services tailored for banks, credit unions, and accounting firms.',
    image: '/images/Commercial/Finantial Institutions.png'
  },
  { 
    icon: Hotel, 
    title: 'Hotels & Accommodation', 
    desc: 'Five-star housekeeping support and common area maintenance to ensure exceptional guest experiences.',
    image: '/images/Commercial/Hotels & Accomodation.png'
  },
  { 
    icon: Plane, 
    title: 'Aviation & Transport', 
    desc: 'Specialized cleaning for airport lounges, terminals, and transport hubs requiring rapid turnaround times.',
    image: '/images/Commercial/Aviation & Transport.png'
  },
  { 
    icon: Dumbbell, 
    title: 'Gyms & Fitness Centers', 
    desc: 'Rigorous sanitization of equipment, mats, and locker rooms to prevent the spread of bacteria and sweat odors.',
    image: '/images/Commercial/Gyms & Fitness Centers.png'
  },
  { 
    icon: Library, 
    title: 'Government Facilities', 
    desc: 'Compliant, reliable, and background-checked cleaning personnel for secure civic and public service buildings.',
    image: '/images/Commercial/Government Facilities.png'
  },
  { 
    icon: Microscope, 
    title: 'Laboratories & Clean Rooms', 
    desc: 'Precision cleaning requiring specific protocols, cross-contamination prevention, and specialized chemical handling.',
    image: '/images/Commercial/Laboratories & Clean Rooms.png'
  },
  { 
    icon: Camera, 
    title: 'Media & Studios', 
    desc: 'Dust-free environment maintenance critical for photography studios, broadcast rooms, and server infrastructure.',
    image: '/images/Commercial/Media & Studios.png'
  },
  { 
    icon: Computer, 
    title: 'Tech Startups & Co-working', 
    desc: 'Flexible cleaning schedules for 24/7 modern, open-plan collaborative workspaces and tech hubs.',
    image: '/images/Commercial/Tech Startups & Co-working.png'
  },
  { 
    icon: Store, 
    title: 'Automotive Dealerships', 
    desc: 'Showroom detailing including high-gloss floor polishing and streak-free window washing to highlight vehicles.',
    image: '/images/Commercial/Automotive Dealerships.png'
  },
  { 
    icon: Flame, 
    title: 'Post-Construction Services', 
    desc: 'Intensive dust, debris, and adhesive removal after commercial builds or major renovations.',
    image: '/images/Commercial/Post-Construction Services.png'
  },
  { 
    icon: Zap, 
    title: 'High-Touch Disinfection', 
    desc: 'Targeted daily fogging and wiping of elevator buttons, door handles, and communal touchpoints.',
    image: '/images/Commercial/High-Touch Disinfection.png'
  },
  { 
    icon: Droplets, 
    title: 'Specialized Floor Care', 
    desc: 'Strip and seal, carpet steam extraction, and tile grout rejuvenation to extend the life of your flooring assets.',
    image: '/images/Commercial/Specialized Floor Care.png'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

export default function CommercialServices() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block underline decoration-primary-green decoration-2 underline-offset-8">Our Expertise</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
              Tailored Commercial Cleaning Services
            </h2>
            <p className="text-brand-text-light text-lg">
              Every industry has unique hygiene requirements and regulatory standards. We provide specialized, scalable cleaning solutions adapted to the specific dimensions, materials, and schedules of your commercial property.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary-green/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={`${service.title} cleaning service`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute -bottom-6 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-green" />
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 pt-10 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-2xl text-brand-text mb-4 group-hover:text-primary-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text-light text-base leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                    <Link 
                      to="/contact" 
                      className="text-sm font-bold text-secondary-blue hover:text-primary-green transition-colors flex items-center gap-1 group/btn"
                    >
                      Enquire for this Sector
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
              </div>
              
              {/* Bottom animated border */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-primary-green w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="bg-bg-dark hover:bg-bg-navy text-white rounded-full px-6 md:px-12 py-4 md:py-8 font-bold text-lg md:text-xl shadow-2xl transition-all hover:-translate-y-1 h-auto whitespace-normal text-center leading-tight w-full sm:w-auto">
            <Link to="/contact">Discuss Your Specific Industry Needs</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
