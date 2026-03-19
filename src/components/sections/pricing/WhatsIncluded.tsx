import { StaggerContainer, StaggerItem } from '@/components/ui/animated';
import { FadeUp } from '@/components/ui/animated';
import {
  Package, Leaf, Shield, ThumbsUp, CalendarClock, UserCheck
} from 'lucide-react';

const INCLUSIONS = [
  {
    icon: Package,
    title: 'All equipment and products provided',
    subtitle: 'Nothing needed from you',
  },
  {
    icon: Leaf,
    title: 'Eco-friendly, industry-grade cleaning products',
    subtitle: 'Safe for your space and the environment',
  },
  {
    icon: Shield,
    title: 'Fully insured',
    subtitle: 'Protected against damages',
  },
  {
    icon: ThumbsUp,
    title: '100% satisfaction guarantee',
    subtitle: 'We come back if anything\'s missed',
  },
  {
    icon: CalendarClock,
    title: 'Flexible scheduling',
    subtitle: 'Including evenings and weekends',
  },
  {
    icon: UserCheck,
    title: 'Guaranteed to show up',
    subtitle: 'Or your clean is free',
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-blue/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">
            What You Get
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
            Every Clean Includes
          </h2>
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.08}
        >
          {INCLUSIONS.map((item, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="group h-full flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover-card-float transition-all duration-300">
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-brand-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
