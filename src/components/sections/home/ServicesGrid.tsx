import { useRef, type MouseEvent, type PropsWithChildren } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { 
  Building2, Factory, ShoppingBag, Stethoscope, 
  GraduationCap, Utensils, Home, Key, 
  Wind, Maximize, Hammer, CalendarCheck,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// --- Tilt Card Wrapper ---
const TiltCard = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion to avoid jitter
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation (max 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full h-full ${className || ''}`}
    >
      <div 
        style={{ transform: "translateZ(40px)" }} // Pop contents slightly forward
        className="h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

// --- Services Data ---
const SERVICES = [
  {
    title: 'Corporate Offices',
    description: 'Maintain a pristine, professional environment for your employees and clients with our tailored office cleaning. High-touch areas sanitized daily.',
    icon: Building2,
    image: '/service-office.jpg',
    fallbackColor: 'bg-blue-100',
    link: '/commercial-cleaning#offices',
  },
  {
    title: 'Industrial & Manufacturing',
    description: 'Heavy-duty cleaning solutions that adhere to strict safety and compliance standards for factories and warehouses.',
    icon: Factory,
    image: '/service-industrial.jpg',
    fallbackColor: 'bg-orange-100',
    link: '/commercial-cleaning#industrial',
  },
  {
    title: 'Retail & Shopping Centers',
    description: 'Enhance customer experience with sparkling floors and spotless surfaces. We handle high foot-traffic zones with ease.',
    icon: ShoppingBag,
    image: '/service-retail.jpg',
    fallbackColor: 'bg-green-100',
    link: '/commercial-cleaning#retail',
  },
  {
    title: 'Healthcare & Medical',
    description: 'Hospital-grade sanitation strictly following clinical guidelines to ensure the safety of patients and medical staff.',
    icon: Stethoscope,
    image: '/service-medical.jpg',
    fallbackColor: 'bg-red-100',
    link: '/commercial-cleaning#healthcare',
  },
  {
    title: 'Educational Facilities',
    description: 'Safe, non-toxic, and thorough cleaning for schools, universities, and daycares to protect our future generations.',
    icon: GraduationCap,
    image: '/service-education.jpg',
    fallbackColor: 'bg-yellow-100',
    link: '/commercial-cleaning',
  },
  {
    title: 'Hospitality & Venues',
    description: 'Immaculate event spaces, pubs, and restaurants. We clean up the fun so you are ready for the next big day.',
    icon: Utensils,
    image: '/service-hospitality.jpg',
    fallbackColor: 'bg-purple-100',
    link: '/commercial-cleaning',
  },
  {
    title: 'House Cleaning',
    description: 'Regular and deep house cleaning tailored to your lifestyle. We treat your home with the utmost respect and care.',
    icon: Home,
    image: '/service-house.jpg',
    fallbackColor: 'bg-teal-100',
    link: '/residential-cleaning#house',
  },
  {
    title: 'End of Lease Cleaning',
    description: '100% Bond Back Guarantee! Comprehensive top-to-bottom cleaning that meets strict real estate standards.',
    icon: Key,
    image: '/service-lease.jpg',
    fallbackColor: 'bg-amber-100',
    link: '/residential-cleaning#end-of-lease',
  },
  {
    title: 'Carpet & Upholstery Steam',
    description: 'Deep extraction steam cleaning to remove stubborn stains, allergens, and odors from your carpets and furniture.',
    icon: Wind,
    image: '/service-carpet.jpg',
    fallbackColor: 'bg-cyan-100',
    link: '/residential-cleaning#carpet',
  },
  {
    title: 'Window Cleaning',
    description: 'Streak-free window washing for residential and low-rise commercial properties, bringing the sunshine back in.',
    icon: Maximize,
    image: '/service-window.jpg',
    fallbackColor: 'bg-sky-100',
    link: '/residential-cleaning',
  },
  {
    title: 'Post-Construction',
    description: 'Detailed removal of dust, debris, and residues after renovations or new builds. Ready for final handover.',
    icon: Hammer,
    image: '/service-construction.jpg',
    fallbackColor: 'bg-slate-200',
    link: '/commercial-cleaning#construction',
  },
  {
    title: 'Airbnb & Short-Term Rental',
    description: 'Quick turnover cleaning between guests to guarantee five-star reviews for your rental properties.',
    icon: CalendarCheck,
    image: '/service-airbnb.jpg',
    fallbackColor: 'bg-pink-100',
    link: '/residential-cleaning#airbnb',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-text mb-6">
              Our Cleaning Services
            </h2>
            <p className="text-brand-text-light text-lg">
              Experience top-tier cleanliness with Anytime Cleaners. We provide specialized solutions tailored to both commercial enterprises and residential homes, backed by our Green-Clean approach.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full perspective-1000">
              {/* Perspective container to allow 3D Tilt */}
              <div style={{ perspective: "1000px" }} className="h-full w-full">
                <TiltCard>
                  <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 transition-all duration-300 overflow-hidden relative hover-card-float will-change-transform">
                    
                    {/* Top Image area */}
                    <div className="relative z-10">
                      <div className="h-44 w-full relative overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            // Fallback if image not found during dev
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                      </div>
                      
                      {/* Floating Icon overlapping image and content */}
                      <div className="absolute -bottom-6 left-6 z-10 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300 icon-bounce">
                        <service.icon size={32} className="text-primary-green" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 pt-10 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-xl text-brand-text mb-3 group-hover:text-primary-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-brand-text-light text-sm line-clamp-2 leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Button 
                          asChild 
                          variant="link" 
                          className="p-0 h-auto text-primary-green font-semibold hover:text-primary-green-dark transition-colors inline-flexitems-center group/btn space-x-2"
                        >
                          <Link to={service.link}>
                            <span>Learn More</span>
                            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Animated bottom border */}
                    <div className="absolute bottom-0 left-0 h-1 bg-primary-green w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-bg-dark hover:bg-bg-navy text-white rounded-full px-10 py-6 font-bold text-lg shadow-xl hover-card-float">
            <Link to="/contact">Request a Custom Cleaning Plan</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
