import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup';

const faqCategories = [
  "General Questions",
  "Commercial Cleaning",
  "Residential Cleaning",
  "Booking & Payment",
  "Service Areas"
];

const faqs = [
  // General Questions
  {
    category: "General Questions",
    question: "Do I need to provide cleaning supplies or equipment?",
    answer: "No, our professional cleaning teams come fully equipped with all necessary supplies, including top-tier eco-friendly chemicals and equipment. However, if you have specialized products you'd prefer us to use, we are happy to accommodate."
  },
  {
    category: "General Questions",
    question: "Are your cleaners insured and background-checked?",
    answer: "Absolutely. All Anytime Cleaners staff undergo rigorous background checks and continuous training. We operate with a fully insured service against damages for your complete peace of mind."
  },
  {
    category: "General Questions",
    question: "What is your 'Green-Clean' protocol?",
    answer: "Our Green-Clean protocol means we prioritize non-toxic, eco-friendly, and biodegradable cleaning products that are safer for your environment and aquatic ecosystems, combined with waste-reduction practices."
  },
  
  // Commercial Cleaning
  {
    category: "Commercial Cleaning",
    question: "Do you offer after-hours commercial cleaning?",
    answer: "Yes, we operate 24/7 for our commercial clients. We can schedule our cleaning teams to come in after your business hours or during weekends to minimize any disruption to your operations."
  },
  {
    category: "Commercial Cleaning",
    question: "How do you ensure quality and consistency in large facilities?",
    answer: "We use a 'Zero-Assumption Protocol'. Our dedicated on-site Supervisors implement strict reset and compliance checklists. They manage the entire process, ensuring every clean meets our meticulous standards rather than just conducting random spot-checks."
  },
  {
    category: "Commercial Cleaning",
    question: "Can we customize our commercial cleaning schedule?",
    answer: "Yes! We tailor our services to your specific needs, whether that means daily, weekly, or monthly cleaning, covering everything from standard office resets to specialized industrial deep cleans."
  },
  
  // Residential Cleaning
  {
    category: "Residential Cleaning",
    question: "Do I have to be home while you clean?",
    answer: "It’s completely up to you. Many of our clients prefer to leave a key or access code so they can return to a spotless home, but you are welcome to stay if you prefer."
  },
  {
    category: "Residential Cleaning",
    question: "What does an 'End of Lease Clean' include?",
    answer: "Our End of Lease Clean is comprehensive and designed to help you secure your bond back. It includes deep cleaning of kitchens, bathrooms, all living areas, inside cupboards, standard wall spot cleaning, and hard floor maintenance."
  },
  
  // Booking & Payment
  {
    category: "Booking & Payment",
    question: "How do I pay for my cleaning service?",
    answer: "We accept all major credit cards and offer secure online payments. For commercial clients, we also offer invoicing options with net payment terms upon approval."
  },
  {
    category: "Booking & Payment",
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, we provide flexible booking options. We kindly ask for at least 24 hours' notice for any cancellations or rescheduling to avoid a cancellation fee."
  },
  {
    category: "Booking & Payment",
    question: "Is there a contract required for regular services?",
    answer: "For residential clients, there are no lock-in contracts. For commercial clients, we structured agreements that outline the scope of work and SLAs to ensure consistent, reliable service."
  },
  
  // Service Areas
  {
    category: "Service Areas",
    question: "Which areas in Melbourne do you service?",
    answer: "We service the entire Melbourne Metropolitan area, including the CBD, Inner suburbs, South East, Upper North, Western Suburbs, and Bayside regions."
  },
  {
    category: "Service Areas",
    question: "Do you travel beyond standard Melbourne suburbs?",
    answer: "While our core operations are in Melbourne and surrounding areas, we can accommodate larger commercial or industrial cleaning projects in outer regional Victorian areas upon special request."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about Anytime Cleaners' services, pricing, booking, and specialized commercial cleaning solutions in Melbourne."
        canonical="https://anytimecleaners.com.au/faq"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'FAQ', item: '/faq' }
        ]}
      />
      <FAQSchema questions={faqs} />
      
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center p-4 bg-purple-50 rounded-full mb-6 text-purple-600 border border-purple-100">
            <MessageCircleQuestion size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, booking process, and our commitment to quality.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-28">
              <h3 className="text-lg font-bold font-heading text-bg-dark mb-4 px-4 pt-2">Categories</h3>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(null); // Reset open item on category change
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                      activeCategory === category 
                        ? "bg-primary-green text-white shadow-md" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-primary-green"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
              key={activeCategory} // Ensure animation re-triggers on category change
            >
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "border-primary-green shadow-md" : "border-gray-100 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-lg text-bg-dark pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary-green" : "text-gray-400"}`}>
                      <ChevronDown size={24} />
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-50 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
