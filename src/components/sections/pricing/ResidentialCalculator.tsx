import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, PartyPopper, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  BEDROOM_OPTIONS,
  RESIDENTIAL_SERVICES,
  FREQUENCY_OPTIONS,
  getResidentialPrice,
  type BedroomOption,
  type ResidentialService,
  type Frequency,
} from '@/lib/pricingData';

const TOTAL_STEPS = 4;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -120 : 120, opacity: 0 }),
};

export default function ResidentialCalculator() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [bedrooms, setBedrooms] = useState<BedroomOption | null>(null);
  const [service, setService] = useState<ResidentialService | null>(null);
  const [frequency, setFrequency] = useState<Frequency | null>(null);
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
    setBedrooms(null);
    setService(null);
    setFrequency(null);
    setContactOnly(false);
  }, []);

  const selectBedroom = (key: BedroomOption) => {
    setBedrooms(key);
    if (key === '5plus') {
      setContactOnly(true);
      setDirection(1);
      setStep(TOTAL_STEPS);
    } else {
      setContactOnly(false);
      goNext();
    }
  };

  const selectService = (key: ResidentialService) => {
    setService(key);
    const svc = RESIDENTIAL_SERVICES.find((s) => s.key === key);
    if (svc?.contactOnly) {
      setContactOnly(true);
      setDirection(1);
      setStep(TOTAL_STEPS);
    } else {
      setContactOnly(false);
      goNext();
    }
  };

  const selectFrequency = (key: Frequency) => {
    setFrequency(key);
    goNext();
  };

  // Get quote
  const quote = bedrooms && service && frequency ? getResidentialPrice(bedrooms, service, frequency) : null;
  const selectedBedLabel = BEDROOM_OPTIONS.find((b) => b.key === bedrooms)?.label ?? '';
  const selectedServiceLabel = RESIDENTIAL_SERVICES.find((s) => s.key === service)?.label ?? '';
  const selectedFreqLabel = FREQUENCY_OPTIONS.find((f) => f.key === frequency)?.label ?? '';
  const selectedFreqCallout = FREQUENCY_OPTIONS.find((f) => f.key === frequency)?.callout ?? '';
  const discountNote = frequency === 'weekly' ? '10% weekly discount applied' : frequency === 'fortnightly' ? '5% fortnightly discount applied' : '';

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
                  className="h-full bg-primary-green rounded-full"
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </div>

            {/* Step content */}
            <div className="p-6 md:p-8 min-h-[320px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1: Bedrooms */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      How many bedrooms does your property have?
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {BEDROOM_OPTIONS.map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => selectBedroom(opt.key)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left hover:border-primary-green hover:shadow-md ${
                            bedrooms === opt.key
                              ? 'border-primary-green bg-primary-green/5 shadow-md'
                              : 'border-gray-100 bg-white'
                          } ${opt.key === '5plus' ? 'col-span-2 sm:col-span-1' : ''}`}
                        >
                          <span className="font-heading font-bold text-brand-text text-sm block">
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      What type of clean do you need?
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {RESIDENTIAL_SERVICES.map((svc) => (
                        <button
                          key={svc.key}
                          onClick={() => selectService(svc.key)}
                          className={`px-4 py-2.5 rounded-full border-2 transition-all duration-200 text-sm font-semibold hover:border-primary-green hover:shadow-sm ${
                            service === svc.key
                              ? 'border-primary-green bg-primary-green/5 text-primary-green-dark'
                              : 'border-gray-100 bg-white text-brand-text'
                          }`}
                        >
                          {svc.label}
                          <span className="block text-xs font-normal text-brand-text-muted mt-0.5">
                            {svc.notes}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Frequency */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <h3 className="font-heading font-bold text-xl text-brand-text mb-6">
                      How often would you like us to clean?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {FREQUENCY_OPTIONS.map((freq) => (
                        <button
                          key={freq.key}
                          onClick={() => selectFrequency(freq.key)}
                          className={`relative p-4 rounded-2xl border-2 transition-all duration-200 text-left hover:border-primary-green hover:shadow-md ${
                            frequency === freq.key
                              ? 'border-primary-green bg-primary-green/5 shadow-md'
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
                          <span className="text-xs text-brand-text-muted">{freq.discount}</span>
                        </button>
                      ))}
                    </div>

                    {/* Callout */}
                    <AnimatePresence mode="wait">
                      {frequency && (
                        <motion.div
                          key={frequency}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm text-brand-text-light"
                        >
                          {selectedFreqCallout}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* Step 4: Result */}
                {step === TOTAL_STEPS && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {contactOnly ? (
                      /* Contact-Only Result */
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-secondary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Phone className="w-8 h-8 text-secondary-blue" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-text mb-3">
                          Contact Us for a Custom Quote
                        </h3>
                        <p className="text-brand-text-light mb-8 max-w-md mx-auto">
                          This service requires an onsite assessment. Get in touch and we'll provide a tailored quote within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button asChild size="lg" className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-8 font-bold">
                            <Link to="/contact">Request a Quote</Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">
                            <a href="tel:0383857705">📞 Call 03 8385 7705</a>
                          </Button>
                        </div>
                        <button onClick={reset} className="mt-6 text-sm text-brand-text-muted hover:text-primary-green transition-colors flex items-center gap-1 mx-auto">
                          <RotateCcw className="w-4 h-4" /> Recalculate
                        </button>
                      </div>
                    ) : (
                      /* Price Result */
                      <div className="text-center py-4">
                        {/* Confetti sparkles */}
                        <div className="relative inline-block mb-4">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              className="absolute text-lg"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                                x: [0, (i - 2) * 30],
                                y: [0, -(Math.random() * 40 + 20)],
                              }}
                              transition={{
                                duration: 1.5,
                                delay: i * 0.15,
                                ease: 'easeOut',
                              }}
                              style={{ left: '50%', top: '50%' }}
                            >
                              ✨
                            </motion.span>
                          ))}
                          <PartyPopper className="w-12 h-12 text-primary-green" />
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-brand-text mb-2">
                          Your Estimate
                        </h3>
                        <p className="text-brand-text-muted text-sm mb-6">
                          {selectedBedLabel} · {selectedFreqLabel} · {selectedServiceLabel}
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                          <div className="font-heading font-extrabold text-4xl text-brand-text mb-2">
                            {quote?.isFrom && <span className="text-lg font-semibold text-brand-text-muted">From </span>}
                            {quote?.price ? `$${quote.price}` : 'Contact us'}
                            {!quote?.isFrom && quote?.price && (
                              <span className="text-lg font-semibold text-brand-text-muted"> per session</span>
                            )}
                          </div>
                          {discountNote && (
                            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700 mb-2">
                              {discountNote}
                            </span>
                          )}
                          {quote?.duration && (
                            <p className="text-sm text-brand-text-muted mt-2">
                              Minimum duration: ~{quote.duration}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                          <Button asChild size="lg" className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-8 font-bold">
                            <Link to="/contact">Book This Plan →</Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">
                            <a href="tel:0383857705">📞 Call for Exact Quote</a>
                          </Button>
                        </div>

                        <button onClick={reset} className="text-sm text-brand-text-muted hover:text-primary-green transition-colors flex items-center gap-1 mx-auto mb-4">
                          <RotateCcw className="w-4 h-4" /> Recalculate
                        </button>

                        <p className="text-xs text-brand-text-muted max-w-md mx-auto">
                          Prices are estimates. Final pricing may vary based on property condition, location, and specific requirements.
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
