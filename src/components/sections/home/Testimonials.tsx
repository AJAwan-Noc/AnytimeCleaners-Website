import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// LEAVE BLANK structure for client to add testimonials later
// Using placeholders to demonstrate the structure
const TESTIMONIALS = [
  { id: 1, content: "Testimonial content goes here...", name: "Customer Name", rating: 5 },
  { id: 2, content: "Another review goes here...", name: "Customer Name", rating: 5 },
  { id: 3, content: "More feedback goes here...", name: "Customer Name", rating: 5 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (_e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    } else if (swipe > 50) {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-16 px-4">
            Our Cleaners Are Trusted By Thousands of Customers
          </h2>
        </motion.div>

        <div className="relative h-[300px] w-full max-w-2xl mx-auto flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute w-full cursor-grab active:cursor-grabbing px-4"
            >
              <Quote className="w-16 h-16 text-primary-green/20 mx-auto mx-auto mb-6" />
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-brand-text-light font-medium italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].content}"
              </p>

              <div className="font-heading font-bold text-lg text-brand-text">
                - {TESTIMONIALS[currentIndex].name}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-text hover:text-primary-green transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-text hover:text-primary-green transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
