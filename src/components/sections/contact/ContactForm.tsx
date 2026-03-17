import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, Send, Home, Building2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

// ─── Shared schema (common to both service types) ────────────────────────────
const baseSchema = z.object({
  serviceCategory: z.enum(['residential', 'commercial']),
  contactPerson: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  locationAddress: z.string().min(5, "Address is required"),
  preferredStartDate: z.string().min(1, "Date is required"),
  preferredTimeSlot: z.string().min(1, "Time slot is required"),
  additionalNotes: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms"),
  // Residential-specific (optional at schema level, validated in submit)
  serviceType: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  frequency: z.string().optional(),
  // Commercial-specific (optional at schema level)
  companyName: z.string().optional(),
  businessType: z.string().optional(),
  facilitySize: z.string().optional(),
  cleaningFrequency: z.string().optional(),
});

type FormValues = z.infer<typeof baseSchema>;

// ─── Data Lists ───────────────────────────────────────────────────────────────
const RESIDENTIAL_SERVICE_TYPES = [
  "General Cleaning",
  "Deep Cleaning",
  "End of Lease Cleaning",
  "Move-In / Move-Out",
  "Spring Cleaning",
  "Post-Renovation Cleaning",
  "Carpet Steam Cleaning",
  "Window Cleaning",
  "Upholstery Cleaning",
];

const COMMERCIAL_BUSINESS_TYPES = [
  "Office / Corporate", "Medical / Healthcare", "Education / Childcare",
  "Retail / Showroom", "Warehouse / Industrial", "Hospitality / Gym",
  "Strata / Body Corporate", "Government / Council", "Other"
];

const FACILITY_SIZES = [
  "Under 200 sqm (Small)", "200 - 500 sqm (Medium)",
  "500 - 1000 sqm (Large)", "Over 1000 sqm (Enterprise)"
];

const COMMERCIAL_FREQUENCIES = [
  "Daily", "3 x Per Week", "Weekly", "Fortnightly", "Monthly", "Once-off / Ad Hoc"
];

const RESIDENTIAL_FREQUENCIES = [
  "Weekly (Save 20%)", "Fortnightly (Save 10%)", "Monthly (Save 5%)", "Once-off"
];

const TIME_SLOTS = [
  "Morning (9am - 12pm)", "Afternoon (12pm - 5pm)", "Evening (After hours)"
];

export default function ContactForm() {
  const [serviceCategory, setServiceCategory] = useState<'residential' | 'commercial'>('residential');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useReactHookForm<FormValues>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      serviceCategory: 'residential',
      serviceType: '',
      bedrooms: '',
      bathrooms: '',
      frequency: '',
      businessType: '',
      facilitySize: '',
      cleaningFrequency: '',
      preferredTimeSlot: '',
      termsAccepted: false,
    }
  });

  const handleCategorySwitch = (cat: 'residential' | 'commercial') => {
    setServiceCategory(cat);
    setValue('serviceCategory', cat);
  };

  const handleSelectChange = (field: keyof FormValues, value: string) => {
    setValue(field, value as any);
    trigger(field);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("=== CONTACT ENQUIRY SUBMITTED ===");
    console.table(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Enquiry Sent!", {
      description: "Our team will review your details and be in touch within 24 hours.",
      duration: 5000,
    });
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center h-full min-h-[500px]"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-primary-green" />
        </div>
        <h3 className="font-heading font-extrabold text-3xl text-brand-text mb-4">Request Received!</h3>
        <p className="text-brand-text-light text-lg max-w-md">
          Thank you for reaching out to Anytime Cleaners. One of our account managers will be in touch within 24 hours to discuss your requirements.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8 rounded-full border-gray-200">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-green to-secondary-blue rounded-t-3xl" />

      <h3 className="text-2xl font-bold font-heading text-brand-text mb-6">Send us a message</h3>

      {/* ── Service Category Toggle ── */}
      <div className="mb-8 p-1 bg-gray-100 rounded-xl grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => handleCategorySwitch('residential')}
          className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
            serviceCategory === 'residential'
              ? 'bg-white text-secondary-blue shadow-sm'
              : 'text-gray-500 hover:text-brand-text'
          }`}
        >
          <Home className="w-4 h-4" />
          Residential Cleaning
        </button>
        <button
          type="button"
          onClick={() => handleCategorySwitch('commercial')}
          className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
            serviceCategory === 'commercial'
              ? 'bg-white text-primary-green shadow-sm'
              : 'text-gray-500 hover:text-brand-text'
          }`}
        >
          <Building2 className="w-4 h-4" />
          Commercial Cleaning
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="hidden" {...register('serviceCategory')} />

        {/* ── Common: Contact Details ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactPerson">Full Name *</Label>
            <Input id="contactPerson" placeholder="Jane Doe" {...register('contactPerson')} className={errors.contactPerson ? "border-red-500" : ""} />
            {errors.contactPerson && <p className="text-red-500 text-xs font-semibold">{errors.contactPerson.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="jane@example.com" {...register('email')} className={errors.email ? "border-red-500" : ""} />
            {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="(03) 8385 7705" {...register('phone')} className={errors.phone ? "border-red-500" : ""} />
            {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="locationAddress">Location / Suburb *</Label>
            <Input id="locationAddress" placeholder="e.g. Caroline Springs 3023" {...register('locationAddress')} className={errors.locationAddress ? "border-red-500" : ""} />
            {errors.locationAddress && <p className="text-red-500 text-xs font-semibold">{errors.locationAddress.message}</p>}
          </div>
        </div>

        {/* ── Dynamic Section ── */}
        <AnimatePresence mode="wait">
          {serviceCategory === 'residential' ? (
            <motion.div
              key="residential"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Residential: Service Type */}
              <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4">
                <p className="text-sm font-bold text-secondary-blue uppercase tracking-wider">Home Details</p>
                <div className="space-y-2">
                  <Label>Type of Cleaning Service *</Label>
                  <Select onValueChange={(val: string) => handleSelectChange('serviceType', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What kind of cleaning do you need?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {RESIDENTIAL_SERVICE_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Bedrooms</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('bedrooms', val)}>
                      <SelectTrigger><SelectValue placeholder="Beds" /></SelectTrigger>
                      <SelectContent className="bg-white">
                        {[1,2,3,4,5,'6+'].map(n => <SelectItem key={`bed-${n}`} value={n.toString()}>{n} Bed{n !== 1 ? 's' : ''}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Bathrooms</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('bathrooms', val)}>
                      <SelectTrigger><SelectValue placeholder="Baths" /></SelectTrigger>
                      <SelectContent className="bg-white">
                        {[1,2,3,4,'5+'].map(n => <SelectItem key={`bath-${n}`} value={n.toString()}>{n} Bath{n !== 1 ? 's' : ''}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('frequency', val)}>
                      <SelectTrigger><SelectValue placeholder="How often?" /></SelectTrigger>
                      <SelectContent className="bg-white">
                        {RESIDENTIAL_FREQUENCIES.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="commercial"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Commercial: Business Details */}
              <div className="p-5 bg-green-50/50 rounded-2xl border border-green-100 space-y-4">
                <p className="text-sm font-bold text-primary-green uppercase tracking-wider">Business Details</p>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name <span className="text-gray-400 font-normal">(Optional)</span></Label>
                  <Input id="companyName" placeholder="Acme Corp" {...register('companyName')} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Property / Business Type *</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('businessType', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {COMMERCIAL_BUSINESS_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Facility Size *</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('facilitySize', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {FACILITY_SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Cleaning Frequency *</Label>
                    <Select onValueChange={(val: string) => handleSelectChange('cleaningFrequency', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How often?" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {COMMERCIAL_FREQUENCIES.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Common: Schedule ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
            <Input id="preferredStartDate" type="date" {...register('preferredStartDate')} className={errors.preferredStartDate ? "border-red-500" : ""} />
            {errors.preferredStartDate && <p className="text-red-500 text-xs font-semibold">{errors.preferredStartDate.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Preferred Time Slot *</Label>
            <Select onValueChange={(val: string) => handleSelectChange('preferredTimeSlot', val)}>
              <SelectTrigger className={errors.preferredTimeSlot ? "border-red-500" : ""}>
                <SelectValue placeholder="Select timeframe..." />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {TIME_SLOTS.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.preferredTimeSlot && <p className="text-red-500 text-xs font-semibold">{errors.preferredTimeSlot.message}</p>}
          </div>
        </div>

        {/* ── Notes ── */}
        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Additional Notes <span className="text-gray-400 font-normal">(Optional)</span></Label>
          <Textarea
            id="additionalNotes"
            placeholder="Tell us about any specific requirements, areas of focus, or access instructions..."
            className="h-24 resize-none"
            {...register('additionalNotes')}
          />
        </div>

        {/* ── Terms ── */}
        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="termsAccepted"
            onCheckedChange={(checked) => {
              setValue('termsAccepted', checked as boolean);
              trigger('termsAccepted');
            }}
            className="mt-1"
          />
          <div className="space-y-1 leading-none">
            <Label htmlFor="termsAccepted" className="text-sm font-normal text-brand-text-light cursor-pointer">
              I agree to the <a href="/terms-of-service" className="text-primary-green hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-primary-green hover:underline">Privacy Policy</a>.*
            </Label>
            {errors.termsAccepted && <p className="text-red-500 text-xs font-semibold">{errors.termsAccepted.message}</p>}
          </div>
        </div>

        {/* ── Submit ── */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white rounded-xl py-6 text-lg font-bold shadow-lg transition-all ${
            serviceCategory === 'residential'
              ? 'bg-secondary-blue hover:bg-secondary-blue/90'
              : 'bg-primary-green hover:bg-primary-green-dark'
          }`}
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> Book Cleaning Service</>
          )}
        </Button>

      </form>
    </motion.div>
  );
}
