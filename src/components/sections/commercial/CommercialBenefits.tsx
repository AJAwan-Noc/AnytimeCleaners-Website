import { motion } from 'framer-motion';
import { TrendingUp, RefreshCcw, Handshake, Leaf, Shield, ShieldAlert } from 'lucide-react';

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Improved Productivity',
    desc: 'Studies show that a clean, organized, and odor-free workspace significantly limits distractions and boosts employee output by up to 15%.'
  },
  {
    icon: RefreshCcw,
    title: 'Flexible & Scalable',
    desc: 'Whether you are a growing startup or a large corporate enterprise, our cleaning schedules and crew sizes adapt seamlessly to your changing needs.'
  },
  {
    icon: Handshake,
    title: 'Boosts Brand Perception',
    desc: 'First impressions matter. A pristine facility silently communicates professionalism, attention to detail, and trustworthiness to visiting clients.'
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Solutions',
    desc: 'Our Green-Clean initiative strictly uses biodegradable, non-toxic products, reducing your company’s carbon footprint and safeguarding indoor air quality.'
  },
  {
    icon: Shield,
    title: 'Prolonged Asset Life',
    desc: 'Regular, professional maintenance of carpets, hard floors, and specialized equipment prevents premature wear and tear, saving you significant replacement costs.'
  },
  {
    icon: ShieldAlert,
    title: 'Minimizes Accident Risks',
    desc: 'Consistent removal of clutter, spills, and hidden hazards keeps you compliant with OHS regulations and drastically reduces workplace injury liabilities.'
  }
];

export default function CommercialBenefits() {
  return (
    <section className="py-24 bg-bg-dark text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Heading */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="font-heading font-extrabold text-white text-4xl lg:text-5xl mb-6 leading-tight">
                Why Invest in <span className="text-primary-green-light">Professional</span> Commercial Cleaning?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Outsourcing your facility maintenance isn't just an operational expense—it's a strategic investment that yields tangible returns for your workforce, your clients, and your bottom line.
              </p>
              
              <div className="w-20 h-1 bg-primary-green-light rounded-full" />
            </motion.div>
          </div>

          {/* Right Column: Benefits Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {BENEFITS.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-primary-green-light group-hover:bg-primary-green-light group-hover:text-bg-dark transition-colors duration-300">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-primary-green-light transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
