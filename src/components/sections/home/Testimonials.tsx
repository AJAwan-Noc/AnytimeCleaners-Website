import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// LEAVE BLANK structure for client to add testimonials later
// Using placeholders to demonstrate the structure
const TESTIMONIALS = [
  { 
    id: 1, 
    rating: 5, 
    name: "Sarah M.", 
    category: "Residential | House Cleaning",
    location: "Caroline Springs, VIC",
    content: "Honestly didn't expect to be this impressed. I've tried a few cleaning services before and they always miss stuff — behind the toilet, the top of the fridge, you know the spots. These guys got everything. My house smelled incredible when I came home. Already booked them for next month." 
  },
  { 
    id: 2, 
    rating: 5, 
    name: "David Nguyen", 
    category: "Commercial | Office Cleaning",
    location: "Melbourne CBD, VIC",
    content: "We run a small accounting firm and cleanliness is important to us — clients notice. Anytime Cleaners have been doing our office three times a week for about four months now and not once have I had to follow up or chase anything. They just show up and do the job properly. Exactly what a business needs." 
  },
  { 
    id: 3, 
    rating: 4, 
    name: "Priya K.", 
    category: "Residential | End of Lease Cleaning",
    location: "Footscray, VIC",
    content: "Got my full bond back which is really all I needed to know. The team worked for hours — oven, carpets, bathroom grout, all of it. My property manager actually commented on how clean it was which never happens. Would've given 5 stars but communication at the start was a tiny bit slow. Service itself was excellent though." 
  },
  { 
    id: 4, 
    rating: 5, 
    name: "Marcus T.", 
    category: "Commercial | Hospitality Cleaning",
    location: "South Yarra, VIC",
    content: "I manage a boutique hotel and our standards are very high. We switched to Anytime Cleaners six months ago after our previous provider kept sending different staff with no consistency. These guys have the same team every week, they know the property, they know our checklist. Guests have noticed the difference. Highly recommend for any hospitality business." 
  },
  { 
    id: 5, 
    rating: 5, 
    name: "Jess W.", 
    category: "Residential | Airbnb Cleaning",
    location: "St Kilda, VIC",
    content: "I've got two Airbnb properties and turnovers used to stress me out so much. Now I just get the notification a guest has checked out and I forward it to Anytime Cleaners. They sort the linen, restock, clean everything and send me photos when they're done. Both listings are sitting at 4.9 stars and I genuinely think the cleanliness is a big part of that." 
  },
  { 
    id: 6, 
    rating: 5, 
    name: "Brian O'Sullivan", 
    category: "Commercial | Medical Centre Cleaning",
    location: "Taylors Lakes, VIC",
    content: "We're a GP clinic so infection control is non-negotiable for us. Anytime Cleaners understood that from day one — proper protocols, the right products, nothing improvised. The team is professional, discreet around patients, and always done before we open. We've been with them almost a year and have zero complaints." 
  },
  { 
    id: 7, 
    rating: 4, 
    name: "Amanda R.", 
    category: "Residential | Deep Cleaning",
    location: "Sunshine, VIC",
    content: "Called them after a renovation left dust absolutely everywhere. I was skeptical it could all be sorted in one visit but they brought a full team and just powered through it. There's a corner in the laundry they missed but they came back the next morning and fixed it no questions asked. That kind of accountability is rare." 
  },
  { 
    id: 8, 
    rating: 5, 
    name: "Tony Ferrara", 
    category: "Commercial | Warehouse / Industrial",
    location: "Laverton, VIC",
    content: "Not the easiest environment to clean — it's a working warehouse, forklifts moving around, dust constantly coming back. But the crew from Anytime Cleaners works around us without getting in the way. Safety gear, proper equipment, no shortcuts. Management noticed the improvement immediately. Good value for the level of service." 
  },
  { 
    id: 9, 
    rating: 5, 
    name: "Chloe B.", 
    category: "Residential | NDIS House Cleaning",
    location: "Keilor, VIC",
    content: "I organise cleaning for my brother who is on the NDIS and finding someone who actually understands the support needs and doesn't just treat it like a regular clean has been hard. Anytime Cleaners were patient, respectful, and my brother was comfortable with them from the very first visit. That means more than I can say." 
  },
  { 
    id: 10, 
    rating: 5, 
    name: "Raymond Loh", 
    category: "Commercial | Retail / Post-Construction",
    location: "Werribee, VIC",
    content: "Used them for a post-construction clean before we opened our new store. The builders left the place in a state — dust on every surface, paint flecks on the floor, the works. Anytime Cleaners had it looking like a showroom in one session. We opened on schedule and the fit-out looked the way it was supposed to. Lifesavers." 
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 7 seconds (given longer content)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
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
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-12 px-4 italic leading-tight">
            "Our Cleaners Are Trusted By Thousands of Customers"
          </h2>
        </motion.div>

        <div className="relative min-h-[450px] md:min-h-[400px] w-full max-w-3xl mx-auto flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
              className="absolute w-full cursor-grab active:cursor-grabbing px-4 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-green p-3 rounded-full shadow-lg">
                 <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < TESTIMONIALS[currentIndex].rating ? 'fill-accent-yellow text-accent-yellow' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              <p className="text-lg md:text-xl text-brand-text-light font-medium italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].content}"
              </p>

              <div className="space-y-1">
                <div className="font-heading font-bold text-xl text-brand-text">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-primary-green font-bold text-sm uppercase tracking-wider">
                  {TESTIMONIALS[currentIndex].category}
                </div>
                <div className="text-brand-text-muted text-sm font-medium">
                  {TESTIMONIALS[currentIndex].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-text hover:text-primary-green transition-colors z-10 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-text hover:text-primary-green transition-colors z-10 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="p-2 -m-2 mx-1"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
