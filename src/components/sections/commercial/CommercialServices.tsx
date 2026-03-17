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
  { icon: Building2, title: 'Corporate Offices', desc: 'Detailed cleaning ensuring a spotless, productive, and germ-free work environment for your team and clients.' },
  { icon: Factory, title: 'Industrial & Manufacturing', desc: 'Heavy-duty cleaning adhering strictly to OSHA and Australian safety standards for warehouses and factories.' },
  { icon: ShoppingBag, title: 'Retail & Shopping Centers', desc: 'High foot-traffic sanitation focused on shining floors, clear glass, and pristine customer restrooms.' },
  { icon: Stethoscope, title: 'Healthcare & Medical', desc: 'Hospital-grade disinfection using advanced electrostatic sprayers to eliminate pathogens and protect patients.' },
  { icon: GraduationCap, title: 'Educational Facilities', desc: 'Toxic-free, deep-cleaning services for schools, universities, and childcare centers to keep students safe.' },
  { icon: Utensils, title: 'Hospitality & Venues', desc: 'Comprehensive back-of-house and front-of-house cleaning for restaurants, pubs, and event spaces.' },
  { icon: Briefcase, title: 'Financial Institutions', desc: 'Discreet, secure, and meticulous cleaning services tailored for banks, credit unions, and accounting firms.' },
  { icon: Hotel, title: 'Hotels & Accommodation', desc: 'Five-star housekeeping support and common area maintenance to ensure exceptional guest experiences.' },
  { icon: Plane, title: 'Aviation & Transport', desc: 'Specialized cleaning for airport lounges, terminals, and transport hubs requiring rapid turnaround times.' },
  { icon: Dumbbell, title: 'Gyms & Fitness Centers', desc: 'Rigorous sanitization of equipment, mats, and locker rooms to prevent the spread of bacteria and sweat odors.' },
  { icon: Library, title: 'Government Facilities', desc: 'Compliant, reliable, and background-checked cleaning personnel for secure civic and public service buildings.' },
  { icon: Microscope, title: 'Laboratories & Clean Rooms', desc: 'Precision cleaning requiring specific protocols, cross-contamination prevention, and specialized chemical handling.' },
  { icon: Camera, title: 'Media & Studios', desc: 'Dust-free environment maintenance critical for photography studios, broadcast rooms, and server infrastructure.' },
  { icon: Computer, title: 'Tech Startups & Co-working', desc: 'Flexible cleaning schedules for 24/7 modern, open-plan collaborative workspaces and tech hubs.' },
  { icon: Store, title: 'Automotive Dealerships', desc: 'Showroom detailing including high-gloss floor polishing and streak-free window washing to highlight vehicles.' },
  { icon: Flame, title: 'Post-Construction Services', desc: 'Intensive dust, debris, and adhesive removal after commercial builds or major renovations.' },
  { icon: Zap, title: 'High-Touch Disinfection', desc: 'Targeted daily fogging and wiping of elevator buttons, door handles, and communal touchpoints.' },
  { icon: Droplets, title: 'Specialized Floor Care', desc: 'Strip and seal, carpet steam extraction, and tile grout rejuvenation to extend the life of your flooring assets.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
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
            <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
              Tailored Commercial Cleaning Services
            </h2>
            <p className="text-brand-text-light text-lg">
              Every industry has unique hygiene requirements and regulatory standards. We provide specialized, scalable cleaning solutions adapted to the specific dimensions, materials, and schedules of your commercial property.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-green/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-primary-green/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-text mb-3 group-hover:text-primary-green transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-text-light text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              
              {/* Decorative accent pulse */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-green/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-primary-green/20 transition-colors duration-500" />
              
              {/* Bottom animated border */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary-green w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white rounded-full px-10 py-6 font-bold text-lg transition-colors">
            <Link to="/contact">Discuss Your Specific Industry Needs</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
