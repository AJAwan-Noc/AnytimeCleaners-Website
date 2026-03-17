import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Zap, Award, Star, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

// Counter Hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
}

const StatCounter = ({ value, suffix, label, delay = 0, isDecimal = false }: { value: number, suffix: string, label: string, delay?: number, isDecimal?: boolean }) => {
  const count = useCounter(isDecimal ? value * 10 : value, 2000);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="text-4xl md:text-5xl font-bold font-heading text-primary-green mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export default function AboutUs() {
  const values = [
    {
      title: "100% Happiness Guarantee",
      description: "We stand by our work. If you're not satisfied, we'll make it right.",
      icon: <Star size={24} className="text-accent-yellow" />
    },
    {
      title: "Tech-Driven Efficiency",
      description: "We use modern reporting and quality assurance systems to track our performance.",
      icon: <Zap size={24} className="text-secondary-blue-light" />
    },
    {
      title: "Eco-Friendly Operations",
      description: "Proudly pioneering the 'Green-Clean' revolution to protect our environment.",
      icon: <Leaf size={24} className="text-primary-green" />
    },
    {
      title: "Triple ISO Certified",
      description: "Our standards are independently verified across Quality, Environment, and Health & Safety.",
      icon: <Award size={24} className="text-purple-500" />
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-6xl mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-12"
        >
          <span className="text-primary-green font-bold tracking-wider uppercase text-sm">About Anytime Cleaners</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-bg-dark mt-4 mb-6">
            We Clean It, <br className="hidden md:block"/> We Mean It
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are pioneering the 'Green-Clean' revolution across Australia. Our aim is to replace toxic industry norms with carbon-neutral innovation and tech-driven efficiency.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCounter value={25} suffix="+" label="Years of Experience" delay={0.1} />
          <StatCounter value={496} suffix="+" label="Customer Reviews" delay={0.2} />
          <StatCounter value={4.8} suffix=" ★" label="Average Rating" isDecimal={true} delay={0.3} />
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in Melbourne, Victoria, Anytime Cleaners started with a simple belief: that cleaning services shouldn't just be about surface appearances, but about creating healthier environments.
                </p>
                <p>
                  Over the past two decades, we've grown from a small local team into a trusted partner for major Australian brands, spanning commercial enterprise spaces to residential homes. 
                </p>
                <p>
                  What sets us apart is our Zero-Assumption Protocol and operational discipline. We don't just supervise; we take control of the quality outcome. Every team member is trained not just to clean, but to mitigate risks, ensuring compliance with strict Australian health standards.
                </p>
                <div className="pt-4 flex items-center gap-4 font-semibold text-primary-green-dark">
                  <ShieldCheck size={24} />
                  <span>Fully Insured Service Against Damages</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* placeholder if image misses, but team-portrait.jpg should be there */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
              <img 
                src="/images/team-portrait.jpg" 
                alt="Anytime Cleaners Professional Team" 
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark/90 to-transparent p-8">
                <p className="text-white font-heading font-bold text-xl flex items-center">
                  <Users className="mr-3" /> Trusted Professionals
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-4 max-w-6xl py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-dark mb-4">Our Mission & Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To deliver consistent, world-class cleaning through operational discipline and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-bg-dark mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
