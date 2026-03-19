import { motion } from 'framer-motion';
import { Leaf, Droplets, Recycle, TreePine } from 'lucide-react';

export default function EnvironmentallyResponsible() {
  const practices = [
    {
      title: "Green Cleaning Products",
      description: "We use non-toxic, biodegradable cleaning formulas that are tough on dirt but safe for your indoor environment and aquatic ecosystems.",
      icon: <Droplets className="w-8 h-8 text-secondary-blue-light" />
    },
    {
      title: "Waste Reduction",
      description: "Our micro-fiber technology minimizes paper waste, and we partner with clients to implement effective recycling and compost programs.",
      icon: <Recycle className="w-8 h-8 text-primary-green" />
    },
    {
      title: "Carbon-Neutral Commitment",
      description: "We are actively replacing toxic industry norms with carbon-neutral innovation, monitoring our fleet emissions and energy usage.",
      icon: <TreePine className="w-8 h-8 text-green-700" />
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-50 to-transparent -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl py-20 flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-primary-green-dark rounded-full text-sm font-semibold mb-6">
              <Leaf size={16} /> Green-Clean Revolution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-bg-dark mb-6 leading-tight">
              Cleaning for <br/> a Better Tomorrow
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are pioneering the 'Green-Clean' revolution across Australia. Our aim is to replace toxic industry norms with carbon-neutral innovation and tech-driven efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/Enviroment/EnvironmentHero.png" 
                alt="Eco-friendly non-toxic cleaning products used by Anytime Cleaners" 
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-bg-dark mb-4">Our Sustainable Practices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We hold ISO 14001:2015 certification for our Environmental Management System, integrating sustainability into every facet of our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                {practice.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-bg-dark mb-4">{practice.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
