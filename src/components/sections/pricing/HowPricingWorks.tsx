import { FadeUp, SlideIn } from '@/components/ui/animated';

const residentialScale = [
  { label: 'Weekly', dots: 5, note: 'Lowest', color: 'bg-primary-green' },
  { label: 'Fortnightly', dots: 4, note: '', color: 'bg-primary-green' },
  { label: 'Monthly', dots: 3, note: '', color: 'bg-primary-green' },
  { label: 'Once-Off', dots: 2, note: 'Highest', color: 'bg-primary-green' },
];

const commercialScale = [
  { label: 'Ongoing Daily', dots: 5, note: 'Best Rate', color: 'bg-secondary-blue' },
  { label: '3x per week', dots: 4, note: '', color: 'bg-secondary-blue' },
  { label: 'Weekly', dots: 3, note: '', color: 'bg-secondary-blue' },
  { label: 'One-Off', dots: 2, note: 'Custom Quote', color: 'bg-secondary-blue' },
];

function DotScale({ items, accentColor }: { items: typeof residentialScale; accentColor: string }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="text-sm font-semibold text-brand-text w-28 shrink-0 text-right">
            {item.label}
          </span>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-4 h-4 rounded-full transition-all ${
                  dot <= item.dots ? item.color : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          {item.note && (
            <span className={`text-xs font-bold ${accentColor} ml-1`}>{item.note}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HowPricingWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-primary-green font-bold tracking-wider uppercase text-sm mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
            How Pricing Works
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Residential */}
          <SlideIn direction="left">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏠</span>
                <h3 className="font-heading font-bold text-xl text-brand-text">
                  Residential Pricing
                </h3>
              </div>
              <p className="text-brand-text-light text-sm mb-6 leading-relaxed">
                The more regularly you book, the less you pay per session. Weekly bookings save 10%, fortnightly saves 5%. No lock-in contract required.
              </p>
              <DotScale items={residentialScale} accentColor="text-primary-green" />
            </div>
          </SlideIn>

          {/* Commercial */}
          <SlideIn direction="right">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">💼</span>
                <h3 className="font-heading font-bold text-xl text-brand-text">
                  Commercial Pricing
                </h3>
              </div>
              <p className="text-brand-text-light text-sm mb-6 leading-relaxed">
                Commercial pricing depends on your space size, industry type, and cleaning frequency. Ongoing contracts deliver the best value — daily cleans are priced more competitively per session than weekly.
              </p>
              <DotScale items={commercialScale} accentColor="text-secondary-blue" />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
