import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { BreadcrumbSchema, BlogPostingSchema } from '@/components/seo/SchemaMarkup';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: "case-study-warehouse",
    title: "How We Stabilised a Packaging Warehouse in 30 Days",
    author: "Abdul H",
    date: "February 17, 2026",
    category: "Case Study",
    image: "/images/service-industrial-cleaning.jpg",
    content: (
      <div className="space-y-6 text-gray-700">
        <p className="font-semibold text-lg">
          Six months ago, we walked into a packaging warehouse that was, frankly, in crisis.
        </p>
        <p>
          It wasn't just that the floors were dirty (though they were). The real problem was the chaos. The Facility Manager looked exhausted. He wasn't managing his production line; he was managing a crisis of missing cleaners, skipped shifts, and excuse after excuse from his cleaning provider.
        </p>
        <p>
          You know the story. You hire a cleaning company based on the lowest quote. For the first two weeks, everything is great. Then, the regular cleaner vanishes. A stranger shows up—late—asking for the code to the door. Two weeks later, that person quits. Suddenly, you're explaining where the bin liners are kept for the fifth time this month.
        </p>
        <p>
          This packaging company was plagued by this "revolving door" of staff. Production was disrupted because safety lanes weren't scrubbed. Morale was low. And the managers? They were stressed out of their minds.
        </p>
        <p className="italic">
          They asked us a simple question: "Can you actually fix this, or are you just going to sell us another fake-promise?"
        </p>
        <p className="font-semibold">Here is exactly how we turned them around.</p>
        
        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The Diagnosis: It Wasn't Just "Bad Cleaning"</h3>
        <p>When we audited the site, we saw the symptoms immediately.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Safety Hazards:</strong> Dust buildup on high-level racking (a major fire risk in packaging)</li>
        </ul>

        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The Result: 6 Months Later</h3>
        <p>Fast forward to today.</p>
        <p>
          We just completed our six-month review with that same packaging company. The warehouse floor is gleaming. The amenities are hospital-grade clean. But the biggest change isn't visible on the floor—it's in the office.
        </p>
        <p>
          The Facility Manager isn't stressed about cleaning anymore. In fact, he told us he hasn't thought about the cleaning roster in months.
        </p>
        
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>The "Revolving Door" is closed:</strong> The same familiar faces are still on-site. They know the staff by name. They know the security protocols by heart.</li>
          <li><strong>Production is up:</strong> No downtime due to slip hazards or clutter.</li>
          <li><strong>The Feedback:</strong> They left us a 5-Star Review, specifically mentioning "peace of mind."</li>
        </ul>

        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The Takeaway for Facility Managers</h3>
        <p>
          If you are managing a warehouse, medical center, or office, and you are constantly chasing your cleaning company, you are overpaying – no matter how cheap their hourly rate is.
        </p>
        <p>
          The cost of disruption, management stress, and security risks is far higher than the price of a professional.
        </p>
        <p>
          At Anytime Cleaners, we don't just sell "cleaning." We sell consistency. We sell the ability for you to focus on your job, while we handle ours.
        </p>
        <p className="font-bold text-primary-green-dark">
          Is your current cleaning team adding to your stress or removing it?
        </p>
        <p>
          If you're ready to stop the revolving door and start seeing the same trusted faces every week, let's talk.
        </p>
      </div>
    )
  },
  {
    id: "hotel-cleaning-services",
    title: "How a Sydney Hotel Manager Stopped Wasting Time on Cleaning and Boosted Guest Reviews",
    author: "Abdul H",
    date: "March 3, 2026",
    category: "Hospitality Cleaning",
    image: "/images/service-hotel-cleaning.jpg",
    content: (
      <div className="space-y-6 text-gray-700">
        <p className="font-semibold text-lg">
          It's 7 am. The General Manager walks into Room 14. The sheets haven't been changed. Again.
        </p>
        <p>
          How many times have you had to deal with cleaners who just aren't doing the job right? If your hotel's cleaning crew isn't held to the highest standards, you could be setting yourself up for trouble. This blog breaks down how poor cleaning can harm your business and what you need from a professional service specializing in Hotel Cleaning Services Australia.
        </p>
        <p>
          Hotel cleaning services in Australia must meet strict hygiene standards to ensure guest satisfaction and avoid penalties. A high-quality cleaning company should offer consistent results, a clear compliance checklist, and attention to high-touch surfaces. Anytime Cleaners delivers premium services with on-site supervisors, ensuring hotels maintain health standards, pass inspections, and get glowing guest reviews.
        </p>

        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The Silent Threat to Your Bottom Line: Inconsistent Cleaning</h3>
        
        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The Anytime Cleaners Difference: Operational Discipline, Not Just Supervision</h3>
        <p>
          So, what makes Anytime Cleaners stand out in the competitive Australian market for Hotel Cleaning Services Australia? It's our commitment to delivering world-class cleaning through a Zero-Assumption Protocol.
        </p>
        <p>
          The shift in strategy is simple: we move from simple supervision to operational control.
        </p>

        <h4 className="text-xl font-bold text-bg-navy mt-6 mb-3">1. The On-Site Supervisor as the Operational Integrator</h4>
        <p>
          Unlike most cleaning companies, we deploy a dedicated on-site Supervisor who acts as the operational integrator. They don't just check the final clean; they manage the entire process from the start.
        </p>

        <ul className="space-y-4">
          <li>
            <strong>Implements the Reset Protocol:</strong>
            <p>The Supervisor personally performs the "strip-down" before the cleaning team enters. This means removing all linens—sheets, pillowcases, and duvet covers—regardless of whether the bed looks slept in. This guarantees the starting point for every room is a verified, fully-reset state, eliminating the biggest risk of guest complaints.</p>
          </li>
          <li>
            <strong>Verifies Compliance Checkpoints:</strong>
            <p>They use a detailed checklist incorporating Australian hotel, hospitality, and specific Council Inspection criteria, ensuring the hotel is always audit-ready.</p>
          </li>
          <li>
            <strong>Instructs Based on System, Not Sight:</strong>
            <p>Instructions to the cleaning team are based on documented, color-coded SOPs and the compliance checklist, ensuring every action taken is required by the system, not based on a quick, visual assessment.</p>
          </li>
          <li>
            <strong>Risk-Based Cleaning:</strong>
            <p>A focus on contamination control in high-risk areas (bathrooms, kitchens, dining areas) before moving to low-risk areas.</p>
          </li>
          <li>
            <strong>Transparent Pricing and Communication:</strong>
            <p>Clear, upfront costs without hidden charges and a single point of contact for all service issues.</p>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-bg-dark mt-8 mb-4">The True Cost of a Cheap Cleaning Service</h3>
        <p>Choosing the cheapest Hotel Cleaning Services Australia can lead to significant hidden costs:</p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hidden Cost Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome of Poor Cleaning</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Reputation Damage</td>
                <td className="px-6 py-4 text-gray-700">Drop in online review scores (TripAdvisor, Google), leading to reduced occupancy</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Operational Time Waste</td>
                <td className="px-6 py-4 text-gray-700">GM and management spending time on re-cleaning or guest issue resolution</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Regulatory Risk</td>
                <td className="px-6 py-4 text-gray-700">Fines, business disruption, or closure due to failed health/council inspections</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Staff Morale</td>
                <td className="px-6 py-4 text-gray-700">Housekeeping and front-of-house staff fielding guest complaints</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-bold text-primary-green-dark italic">
          Stop auditing your cleaning company and start managing your hotel.
        </p>
        <p>Ready to switch to a reliable, compliance-focused partner?</p>
        <p>
          Take the first step toward guaranteed 5-star cleanliness. Contact Anytime Cleaners for a free, no-obligation Compliance Readiness Review today.
        </p>
      </div>
    )
  }
];

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Function to get distinct colors for categories
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Case Study":
        return "bg-blue-100 text-secondary-blue-dark border-blue-200";
      case "Hospitality Cleaning":
        return "bg-green-100 text-primary-green-dark border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <SEO 
        title={selectedPost ? selectedPost.title : "Cleaning Tips & Insights - Our Blog"}
        description={selectedPost ? `Read our expert insights: ${selectedPost.title}` : "Expert advice for commercial and residential cleaning from Anytime Cleaners."}
        canonical={selectedPost ? `https://anytimecleaners.com.au/blog/${selectedPost.id}` : "https://anytimecleaners.com.au/blog"}
      />
      <BreadcrumbSchema 
        items={selectedPost ? [
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: selectedPost.title, item: `/blog/${selectedPost.id}` }
        ] : [
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' }
        ]}
      />
      {selectedPost && (
        <BlogPostingSchema 
          title={selectedPost.title}
          author={selectedPost.author}
          datePublished={selectedPost.date}
          image={selectedPost.image}
          description={selectedPost.title} // Simplified for demo
        />
      )}
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header Section */}
              <div className="text-center mb-16 mt-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4"
                >
                  Cleaning Tips & Insights
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                  Expert advice for commercial and residential cleaning
                </motion.p>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col cursor-pointer group"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <motion.img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold font-heading text-bg-dark mb-3 line-clamp-3 group-hover:text-primary-green transition-colors">
                        {post.title}
                      </h2>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center text-primary-green font-semibold text-sm">
                        Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mt-8"
            >
              {/* Back button */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center text-gray-500 hover:text-primary-green transition-colors font-medium group"
                >
                  <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Articles
                </button>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(selectedPost.category)}`}>
                  {selectedPost.category}
                </span>
              </div>
              
              {/* Hero Image */}
              <div className="w-full h-[400px] relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center text-gray-200 space-x-6 text-sm md:text-base">
                    <div className="flex items-center">
                      <User size={18} className="mr-2" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      {selectedPost.date}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12 lg:px-16" style={{ fontFamily: 'var(--font-body)' }}>
                {selectedPost.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}
