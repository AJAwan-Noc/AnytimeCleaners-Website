import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Leaf, ShieldAlert, MessageCircleQuestion, ArrowRight } from 'lucide-react';

const infoLinks = [
  {
    title: "About Us",
    description: "Learn about our company story, mission, and the team driving our success.",
    icon: <Users size={32} />,
    path: "/about-us",
    color: "bg-blue-50 text-secondary-blue border-blue-100"
  },
  {
    title: "Accreditation",
    description: "View our ISO certifications, industry memberships, and awards.",
    icon: <Award size={32} />,
    path: "/accreditation",
    color: "bg-yellow-50 text-accent-yellow border-yellow-100"
  },
  {
    title: "Environmentally Responsible",
    description: "Discover our green cleaning practices and carbon-neutral commitment.",
    icon: <Leaf size={32} />,
    path: "/environmentally-responsible",
    color: "bg-green-50 text-primary-green border-green-100"
  },
  {
    title: "Modern Slavery Policy",
    description: "Read our policy statement and commitment to ethical business practices.",
    icon: <ShieldAlert size={32} />,
    path: "/modern-slavery",
    color: "bg-orange-50 text-orange-500 border-orange-100"
  },
  {
    title: "FAQ's",
    description: "Find answers to comprehensive questions about our services and booking.",
    icon: <MessageCircleQuestion size={32} />,
    path: "/faq",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  }
];

export default function MoreInfo() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4"
          >
            More Information
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover who we are, our commitment to excellence, and policies that govern our operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {infoLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link 
                to={link.path}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 border ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h2 className="text-xl font-bold font-heading text-bg-dark mb-3 group-hover:text-primary-green transition-colors">
                  {link.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {link.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-primary-green group-hover:text-primary-green-dark">
                  Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
