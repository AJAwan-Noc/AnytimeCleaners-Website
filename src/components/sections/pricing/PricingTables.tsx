import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/ui/animated';
import {
  STANDARD_PRICES,
  STANDARD_DURATIONS,
  DEEP_CLEAN_PRICES,
  DEEP_CLEAN_DURATIONS,
  BOND_CLEAN_PRICES,
  CARPET_PRICES,
  BEDROOM_OPTIONS,
  SPACE_SIZE_BRACKETS,
  COMMERCIAL_BASE_RATES,
  COMMERCIAL_MIN_CHARGE,
  type BedroomOption,
} from '@/lib/pricingData';
import { cn } from '@/lib/utils';
import { Sparkles, ShieldCheck, Waves, Clock, CheckCircle2 } from 'lucide-react';

type Mode = 'residential' | 'commercial';
type Frequency = 'once-off' | 'monthly' | 'fortnightly' | 'weekly';

interface PricingTablesProps {
  activeMode: Mode;
}

const bedKeys: Exclude<BedroomOption, '5plus'>[] = ['studio', '2bed', '3bed', '4bed'];

const FREQUENCIES: { key: Frequency; label: string; discount?: string }[] = [
  { key: 'once-off', label: 'Once' },
  { key: 'monthly', label: 'Monthly' },
  { key: 'fortnightly', label: 'Every 2w', discount: '5% off' },
  { key: 'weekly', label: 'Weekly', discount: '10% off' },
];

export default function PricingTables({ activeMode }: PricingTablesProps) {
  const [frequency, setFrequency] = useState<Frequency>('weekly');

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-secondary-blue font-bold tracking-wider uppercase text-sm mb-4 block">
            Reference Pricing
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-6">
            Pricing at a Glance
          </h2>
          <p className="text-brand-text-light text-lg max-w-2xl mx-auto">
            Transparent, competitive rates for every space. Select a frequency to see maintenance discounts.
          </p>
        </FadeUp>

        <AnimatePresence mode="wait">
          {activeMode === 'residential' ? (
            <motion.div
              key="res-dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-fr"
            >
              {/* Card 1: Maintenance Clean */}
              <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden group hover:border-primary-green/30 transition-all duration-500">
                <div className="p-8 pb-4 bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-green/10 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary-green" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-brand-text">
                      Maintenance Clean
                    </h3>
                  </div>

                  {/* Frequency Switcher */}
                  <div className="flex p-1 bg-gray-100 rounded-xl mb-6 relative overflow-hidden">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f.key}
                        onClick={() => setFrequency(f.key)}
                        className={cn(
                          "relative z-10 flex-1 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-tight transition-all duration-300 rounded-lg",
                          frequency === f.key ? "text-white shadow-sm" : "text-brand-text-muted hover:text-brand-text"
                        )}
                      >
                        {frequency === f.key && (
                          <motion.div
                            layoutId="activeFreq"
                            className="absolute inset-0 bg-primary-green rounded-lg -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 pt-0 flex-1">
                  <div className="space-y-4">
                    {bedKeys.map((bed) => (
                      <div key={bed} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 hover:bg-primary-green/5 border border-transparent hover:border-primary-green/10 transition-all group/row">
                        <div>
                          <div className="font-bold text-brand-text">
                            {BEDROOM_OPTIONS.find((b) => b.key === bed)?.short}
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-brand-text-muted mt-0.5">
                            <Clock className="w-3 h-3" />
                            Est. {STANDARD_DURATIONS[bed]}
                          </div>
                        </div>
                        <div className="text-right">
                          <AnimatePresence mode="popLayout">
                            <motion.div
                              key={frequency}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="font-heading font-black text-xl text-primary-green-dark"
                            >
                              ${STANDARD_PRICES[bed][frequency]}
                            </motion.div>
                          </AnimatePresence>
                          {frequency === 'weekly' && (
                            <div className="text-[10px] font-bold text-primary-green uppercase tracking-wider">Lowest Rate</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Deep & Bond */}
              <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden group hover:border-secondary-blue/30 transition-all duration-500">
                <div className="p-8 pb-4 bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary-blue/10 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-secondary-blue" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-brand-text">
                      Deep Clean & EOL
                    </h3>
                  </div>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    Heavy-duty cleaning for moving out or seasonal refreshing.
                  </p>
                </div>

                <div className="p-8 pt-4 flex-1">
                  <div className="space-y-4">
                    {bedKeys.map((bed) => (
                      <div key={bed} className="p-4 rounded-2xl bg-gray-50/50 border border-transparent flex justify-between items-center group/row">
                        <div className="font-bold text-brand-text text-sm">
                          {BEDROOM_OPTIONS.find((b) => b.key === bed)?.short}
                        </div>
                        <div className="flex gap-4">
                          <div className="text-right">
                            <div className="text-[9px] uppercase font-bold text-brand-text-muted tracking-widest mb-0.5">Deep</div>
                            <div className="font-bold text-brand-text text-sm hover:text-secondary-blue transition-colors">From ${DEEP_CLEAN_PRICES[bed]}</div>
                          </div>
                          <div className="text-right border-l border-gray-200 pl-4">
                            <div className="text-[9px] uppercase font-bold text-brand-text-muted tracking-widest mb-0.5">Bond</div>
                            <div className="font-bold text-brand-text text-sm hover:text-secondary-blue transition-colors">From ${BOND_CLEAN_PRICES[bed]}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-secondary-blue/5 border border-secondary-blue/10 text-[10px] text-secondary-blue italic text-center">
                    "Bond clean includes a 72-hour satisfaction guarantee."
                  </div>
                </div>
              </div>

              {/* Card 3: Specialty Carpet */}
              <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden group hover:border-brand-text/30 transition-all duration-500">
                <div className="p-8 pb-4 bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <Waves className="w-6 h-6 text-brand-text" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-brand-text">
                      Carpet Steam Clean
                    </h3>
                  </div>
                  <p className="text-xs text-brand-text-muted leading-relaxed">
                    Revitalize carpets with industry-grade steam extraction.
                  </p>
                </div>

                <div className="p-8 pt-4 flex-1">
                  <div className="space-y-4">
                    {bedKeys.map((bed) => (
                      <div key={bed} className="p-4 rounded-2xl bg-gray-50/50 border border-transparent flex justify-between items-center group/row">
                        <div className="font-bold text-brand-text text-sm">
                          {BEDROOM_OPTIONS.find((b) => b.key === bed)?.short}
                        </div>
                        <div className="flex gap-4">
                          <div className="text-right">
                            <div className="text-[9px] uppercase font-bold text-brand-text-muted tracking-widest mb-0.5">Steam</div>
                            <div className="font-bold text-brand-text text-sm">$${CARPET_PRICES[bed].standard}</div>
                          </div>
                          <div className="text-right border-l border-gray-200 pl-4">
                            <div className="text-[9px] uppercase font-bold text-brand-text-muted tracking-widest mb-0.5">EOL Pkg</div>
                            <div className="font-bold text-brand-text text-sm">$${CARPET_PRICES[bed].eol}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2 text-[10px] text-brand-text-light">
                      <CheckCircle2 className="w-3 h-3 text-primary-green" />
                      Anti-bacterial sanitation included
                    </li>
                    <li className="flex items-center gap-2 text-[10px] text-brand-text-light">
                      <CheckCircle2 className="w-3 h-3 text-primary-green" />
                      Free stain assessment
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="com-dashboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="max-w-[700px] mx-auto"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-secondary-blue/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-brand-text">
                      Commercial Base Rates
                    </h3>
                    <p className="text-sm text-brand-text-muted mt-1">
                      Indicative ongoing contract pricing (+ GST)
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {SPACE_SIZE_BRACKETS.map((bracket) => (
                    <div key={bracket.key} className="flex flex-wrap items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary-blue/20 transition-all hover:translate-x-1 decoration-300">
                      <div className="font-bold text-brand-text min-w-[120px]">
                        {bracket.label}
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest">Weekly</div>
                          <div className="font-heading font-black text-lg text-secondary-blue">
                             {COMMERCIAL_BASE_RATES[bracket.key].weekly ? `$${COMMERCIAL_BASE_RATES[bracket.key].weekly}` : '-'}
                          </div>
                        </div>
                        <div className="border-l border-gray-200 pl-8">
                          <div className="text-[10px] uppercase font-bold text-brand-text-muted tracking-widest">Daily</div>
                          <div className="font-heading font-black text-lg text-secondary-blue">
                            {COMMERCIAL_BASE_RATES[bracket.key].daily ? `$${COMMERCIAL_BASE_RATES[bracket.key].daily}` : 'Quote'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-bg-dark text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <p className="text-sm relative z-10 leading-relaxed opacity-90">
                    Prices start from <span className="font-bold text-primary-green">${COMMERCIAL_MIN_CHARGE} + GST</span>. All commercial quotes are confirmed after a <span className="underline decoration-primary-green underline-offset-4 font-bold">free site assessment</span> to ensure accuracy.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
