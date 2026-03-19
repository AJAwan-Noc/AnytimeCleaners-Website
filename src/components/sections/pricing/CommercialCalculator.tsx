import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, RotateCcw, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  COMMERCIAL_INDUSTRIES,
  COMMERCIAL_FREQUENCIES,
  COMMERCIAL_MIN_CHARGE,
  getCommercialEstimate,
  getSqmBracket,
  type CommercialFrequency,
  type IndustryComplexity,
} from '@/lib/pricingData';

const TOTAL_STEPS = 4;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -120 : 120, opacity: 0 }),
};

type SizeInputMode = 'sqm' | 'rooms';

export default function CommercialCalculator() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [industry, setIndustry] = useState<string | null>(null);
  const [sizeMode, setSizeMode] = useState<SizeInputMode>('sqm');
  const [sqm, setSqm] = useState<number>(200);
  const [rooms, setRooms] = useState<number>(5);
  const [frequency, setFrequency] = useState<CommercialFrequency | null>(null);
  const [contactOnly, setContactOnly] = useState(false);

  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }, []);

  const reset = useCallback(() => {
    setDirection(-1);
    setStep(1);
    setIndustry(null);
    setFrequency(null);
    setContactOnly(false);
    setSqm(200);
    setRooms(5);
  }, []);

  const selectIndustry = (key: string) => {
    setIndustry(key);
    goNext();
  };

  const selectFrequency = (key: CommercialFrequency) => {
    const freq = COMMERCIAL_FREQUENCIES.find((f) => f.key === key);
    setFrequency(key);
    if (freq?.contactOnly) {
      setContactOnly(true);
      setDirection(1);
      setStep(TOTAL_STEPS);
    } else {
      setContactOnly(false);
      goNext();
    }
  };

  // Compute estimate
  const complexity: IndustryComplexity = COMMERCIAL_INDUSTRIES.find((i) => i.key === industry)?.complexity ?? 'standard';
  const effectiveSqm = sizeMode === 'rooms' ? rooms * 20 : sqm; // rough rooms→sqm
  const sizeBracket = getSqmBracket(effectiveSqm);
  const estimate = frequency ? getCommercialEstimate(sizeBracket, frequency, complexity) : null;

  const industryLabel = COMMERCIAL_INDUSTRIES.find((i) => i.key === industry)?.label ?? '';
  const freqLabel = COMMERCIAL_FREQUENCIES.find((f) => f.key === frequency)?.label ?? '';
  const sizeLabel = sizeMode === 'sqm' ? `${sqm} sqm` : `${rooms} rooms`;

  // Animated bar width based on sqm (for visual delight)
  const barPercent = Math.min(effectiveSqm / 1200, 1) * 100;

  // Quick-select sqm presets
  const sqmPresets = [
    { label: '< 100 sqm', value: 80 },
    { label: '100–300 sqm', value: 200 },
    { label: '300–500 sqm', value: 400 },
    { label: '500–1000 sqm', value: 750 },
    { label: '1000+ sqm', value: 1200 },
  ];

  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
            {/* Progress bar */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">
                  Step {step} of {TOTAL_STEPS}
                </span>
                {step > 1 && !contactOnly && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1 text-sm text-brand-text-muted hover:text-primary-green transition-colors font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                )}
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-secondary-blue rounded-full"
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </div>

            {/* Step content */}
            <div className="p-6 md:p-8 min-h-[380px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1: Industry */}
                {step === 1 && (
                  <motion.div
                    key="c-step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      What type of business are we cleaning?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {COMMERCIAL_INDUSTRIES.map((ind) => (
                        <button
                          key={ind.key}
                          onClick={() => selectIndustry(ind.key)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left hover:border-secondary-blue hover:shadow-md flex items-center gap-3 ${
                            industry === ind.key
                              ? 'border-secondary-blue bg-secondary-blue/5 shadow-md'
                              : 'border-gray-100 bg-white'
                          }`}
                        >
                          <span className="text-2xl">{ind.emoji}</span>
                          <span className="font-heading font-bold text-brand-text text-sm">
                            {ind.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Space Size */}
                {step === 2 && (
                  <motion.div
                    key="c-step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      How large is your space?
                    </h3>

                    {/* Mode toggle */}
                    <div className="flex gap-2 mb-6">
                      <button
                        onClick={() => setSizeMode('sqm')}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                          sizeMode === 'sqm'
                            ? 'bg-secondary-blue text-white'
                            : 'bg-gray-100 text-brand-text-muted hover:bg-gray-200'
                        }`}
                      >
                        By Area (sqm)
                      </button>
                      <button
                        onClick={() => setSizeMode('rooms')}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                          sizeMode === 'rooms'
                            ? 'bg-secondary-blue text-white'
                            : 'bg-gray-100 text-brand-text-muted hover:bg-gray-200'
                        }`}
                      >
                        By Rooms / Offices
                      </button>
                    </div>

                    {sizeMode === 'sqm' ? (
                      <div>
                        <label className="block text-sm font-semibold text-brand-text mb-2">
                          Square metres
                        </label>
                        <input
                          type="number"
                          min={10}
                          max={5000}
                          value={sqm}
                          onChange={(e) => setSqm(Math.max(10, Number(e.target.value)))}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary-blue focus:outline-none transition-colors text-lg font-bold text-brand-text input-glow-focus"
                        />
                        <div className="flex flex-wrap gap-2 mt-3">
                          {sqmPresets.map((p) => (
                            <button
                              key={p.value}
                              onClick={() => setSqm(p.value)}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                                sqm === p.value
                                  ? 'border-secondary-blue bg-secondary-blue/10 text-secondary-blue'
                                  : 'border-gray-200 text-brand-text-muted hover:border-secondary-blue/40'
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-semibold text-brand-text mb-2">
                          Number of rooms / offices
                        </label>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setRooms(Math.max(1, rooms - 1))}
                            className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-secondary-blue transition-colors"
                          >
                            <Minus className="w-5 h-5 text-brand-text" />
                          </button>
                          <span className="text-3xl font-heading font-extrabold text-brand-text min-w-[3rem] text-center">
                            {rooms}
                          </span>
                          <button
                            onClick={() => setRooms(Math.min(50, rooms + 1))}
                            className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-secondary-blue transition-colors"
                          >
                            <Plus className="w-5 h-5 text-brand-text" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Animated bar visual */}
                    <div className="mt-6">
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-secondary-blue to-accent-cyan rounded-full"
                          animate={{ width: `${barPercent}%` }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                      </div>
                      <p className="text-xs text-brand-text-muted mt-2 text-right">
                        ~{effectiveSqm} sqm
                      </p>
                    </div>

                    <Button
                      onClick={goNext}
                      size="lg"
                      className="bg-secondary-blue hover:bg-secondary-blue/90 text-white rounded-full px-8 font-bold mt-6 w-full sm:w-auto"
                    >
                      Next →
                    </Button>
                  </motion.div>
                )}

                {/* Step 3: Frequency */}
                {step === 3 && (
                  <motion.div
                    key="c-step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      How often do you need cleaning?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {COMMERCIAL_FREQUENCIES.map((freq) => (
                        <button
                          key={freq.key}
                          onClick={() => selectFrequency(freq.key)}
                          className={`relative p-4 rounded-2xl border-2 transition-all duration-200 text-left hover:border-secondary-blue hover:shadow-md ${
                            frequency === freq.key
                              ? 'border-secondary-blue bg-secondary-blue/5 shadow-md'
                              : 'border-gray-100 bg-white'
                          }`}
                        >
                          {freq.badge && (
                            <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${freq.badgeColor}`}>
                              {freq.badge}
                            </span>
                          )}
                          <span className="font-heading font-bold text-brand-text text-sm block">
                            {freq.label}
                          </span>
                          <span className="text-xs text-brand-text-muted">{freq.benefit}</span>
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      {frequency && !contactOnly && (
                        <motion.div
                          key={frequency}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm text-brand-text-light"
                        >
                          {COMMERCIAL_FREQUENCIES.find((f) => f.key === frequency)?.callout}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* Step 4: Result */}
                {step === TOTAL_STEPS && (
                  <motion.div
                    key="c-step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {contactOnly ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-secondary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Phone className="w-8 h-8 text-secondary-blue" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-text mb-3">
                          Custom Quote Required
                        </h3>
                        <p className="text-brand-text-light mb-8 max-w-md mx-auto">
                          One-off commercial cleans are quoted individually. Contact us for a tailored quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button asChild size="lg" className="bg-secondary-blue hover:bg-secondary-blue/90 text-white rounded-full px-8 font-bold">
                            <Link to="/contact">Request a Free Site Quote</Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">
                            <a href="tel:0383857705">📞 Call 03 8385 7705</a>
                          </Button>
                        </div>
                        <button onClick={reset} className="mt-6 text-sm text-brand-text-muted hover:text-secondary-blue transition-colors flex items-center gap-1 mx-auto">
                          <RotateCcw className="w-4 h-4" /> Recalculate
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <h3 className="font-heading font-bold text-2xl text-brand-text mb-2">
                          Your Commercial Estimate
                        </h3>
                        <p className="text-brand-text-muted text-sm mb-6">
                          {industryLabel} / {sizeLabel} · {freqLabel} Contract
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                          {estimate?.isCustom ? (
                            <div className="font-heading font-extrabold text-2xl text-brand-text">
                              Custom Quote Required
                            </div>
                          ) : (
                            <>
                              <div className="font-heading font-extrabold text-4xl text-brand-text mb-2">
                                <span className="text-lg font-semibold text-brand-text-muted">From </span>
                                ${estimate?.low} – ${estimate?.high}
                                <span className="text-lg font-semibold text-brand-text-muted"> + GST</span>
                              </div>
                              <p className="text-sm text-brand-text-muted">
                                per {frequency === 'daily' ? 'clean' : 'week'}
                              </p>
                            </>
                          )}
                          <p className="text-xs text-brand-text-muted mt-3 border-t border-gray-200 pt-3">
                            Minimum charge applies: ${COMMERCIAL_MIN_CHARGE} + GST
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                          <Button asChild size="lg" className="bg-secondary-blue hover:bg-secondary-blue/90 text-white rounded-full px-8 font-bold">
                            <Link to="/contact">Request a Free Site Quote →</Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">
                            <a href="tel:0383857705">📞 Call 03 8385 7705</a>
                          </Button>
                        </div>

                        <button onClick={reset} className="text-sm text-brand-text-muted hover:text-secondary-blue transition-colors flex items-center gap-1 mx-auto mb-4">
                          <RotateCcw className="w-4 h-4" /> Recalculate
                        </button>

                        <p className="text-xs text-brand-text-muted max-w-md mx-auto">
                          Commercial pricing is finalised after a free site visit. This estimate gives you a realistic starting range for budgeting purposes. GST not included.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
