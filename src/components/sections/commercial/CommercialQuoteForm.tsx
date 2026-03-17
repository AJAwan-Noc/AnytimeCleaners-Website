import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, Calculator } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// 12-Field Comprehensive Zod Schema
const quoteSchema = z.object({
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Full Name is required"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your facility type"),
  facilitySize: z.string().min(1, "Please estimate your facility size"),
  address: z.string().min(5, "Property address is required"),
  frequency: z.string().min(1, "Please select desired cleaning frequency"),
  preferredStart: z.string().min(1, "Please select a preferred start timeframe"),
  currentArrangements: z.string().min(1, "Please tell us about your current cleaning setup"),
  painPoints: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const BUSINESS_TYPES = [
  "Corporate Office", "Medical/Healthcare", "Warehouse/Industrial", 
  "Retail Store", "School/Education", "Gym/Fitness", "Restaurant/Hospitality", "Other"
];

const FACILITY_SIZES = [
  "Under 1,000 sq ft", "1,000 - 5,000 sq ft", "5,000 - 10,000 sq ft", 
  "10,000 - 25,000 sq ft", "25,000+ sq ft", "Unsure"
];

const FREQUENCIES = [
  "Daily", "Multiple Times a Week", "Weekly", "Fortnightly", "Monthly", "Once-off Deep Clean"
];

const TIMEFRAMES = [
  "Immediately", "Within 1 Week", "Within 1 Month", "Flexible"
];

export default function CommercialQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useReactHookForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      businessType: "",
      facilitySize: "",
      frequency: "",
      preferredStart: "",
      currentArrangements: ""
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("=== QUOTE FORM SUBMITTED ===");
    console.table(data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Quote Request Sent Successfully!", {
      description: "One of our commercial account managers will contact you shortly.",
      duration: 5000,
    });
    
    reset();
    
    // Reset success state after 5 seconds to allow another submission
    setTimeout(() => setIsSuccess(false), 5000);
  };

  // Helper for shadcn Select integration with react-hook-form
  const handleSelectChange = (field: keyof QuoteFormValues, value: string) => {
    setValue(field, value);
    trigger(field);
  };

  return (
    <section id="quote-form" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-primary-green" />
              </div>
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-4">
              Request a Custom Commercial Proposal
            </h2>
            <p className="text-brand-text-light text-lg max-w-2xl mx-auto">
              Tell us a little about your facility and operational needs. We'll design a customized cleaning program and provide an accurate, transparent quote.
            </p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <CheckCircle className="w-24 h-24 text-primary-green mb-6" />
              <h3 className="font-heading font-bold text-3xl text-brand-text mb-4">Proposal Request Received!</h3>
              <p className="text-brand-text-light text-lg max-w-md mx-auto">
                Thank you for considering Anytime Cleaners. Our team is reviewing your requirements and will reach out to the provided contact details shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Section 1: Contact Detail */}
              <div>
                <h3 className="text-lg font-bold text-brand-text border-b border-gray-100 pb-2 mb-6 uppercase tracking-wider">1. Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Acme Corp" {...register('companyName')} className={errors.companyName ? "border-red-500" : ""} />
                    <AnimatePresence>
                      {errors.companyName && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.companyName.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input id="contactPerson" placeholder="John Doe" {...register('contactPerson')} className={errors.contactPerson ? "border-red-500" : ""} />
                    <AnimatePresence>
                      {errors.contactPerson && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.contactPerson.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input id="email" type="email" placeholder="john@acmecorp.com" {...register('email')} className={errors.email ? "border-red-500" : ""} />
                    <AnimatePresence>
                      {errors.email && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.email.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(03) 8385 7705" {...register('phone')} className={errors.phone ? "border-red-500" : ""} />
                    <AnimatePresence>
                      {errors.phone && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.phone.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Facility Address *</Label>
                    <Input id="address" placeholder="123 Corporate Blvd, Melbourne" {...register('address')} className={errors.address ? "border-red-500" : ""} />
                    <AnimatePresence>
                      {errors.address && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.address.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                </div>
              </div>

              {/* Section 2: Facility Specs */}
              <div>
                <h3 className="text-lg font-bold text-brand-text border-b border-gray-100 pb-2 mb-6 uppercase tracking-wider mt-12">2. Facility Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                     <Label>Business Type *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('businessType', val)}>
                        <SelectTrigger className={errors.businessType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select facility type..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {BUSINESS_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     <AnimatePresence>
                      {errors.businessType && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.businessType.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                     <Label>Facility Size (Approximate) *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('facilitySize', val)}>
                        <SelectTrigger className={errors.facilitySize ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select size..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {FACILITY_SIZES.map(size => <SelectItem key={size} value={size}>{size}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     <AnimatePresence>
                      {errors.facilitySize && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.facilitySize.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                     <Label>Desired Cleaning Frequency *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('frequency', val)}>
                        <SelectTrigger className={errors.frequency ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select frequency..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {FREQUENCIES.map(freq => <SelectItem key={freq} value={freq}>{freq}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     <AnimatePresence>
                      {errors.frequency && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.frequency.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                     <Label>When are you looking to start? *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('preferredStart', val)}>
                        <SelectTrigger className={errors.preferredStart ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select timeframe..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {TIMEFRAMES.map(time => <SelectItem key={time} value={time}>{time}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     <AnimatePresence>
                      {errors.preferredStart && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.preferredStart.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                </div>
              </div>

              {/* Section 3: Additional Context */}
              <div>
                <h3 className="text-lg font-bold text-brand-text border-b border-gray-100 pb-2 mb-6 uppercase tracking-wider mt-12">3. Additional Context</h3>
                <div className="grid grid-cols-1 gap-6">

                  <div className="space-y-2">
                     <Label>Current Cleaning Arrangements *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('currentArrangements', val)}>
                        <SelectTrigger className={errors.currentArrangements ? "border-red-500" : ""}>
                          <SelectValue placeholder="How is cleaning currently handled?" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="In-house staff">In-house staff</SelectItem>
                          <SelectItem value="Current external contractor">Current external contractor</SelectItem>
                          <SelectItem value="No current arrangement">No current arrangement / New facility</SelectItem>
                        </SelectContent>
                     </Select>
                     <AnimatePresence>
                      {errors.currentArrangements && <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-red-500 text-xs font-semibold">{errors.currentArrangements.message}</motion.p>}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="painPoints">Current Pain Points / What can we do better? (Optional)</Label>
                    <Textarea 
                      id="painPoints" 
                      placeholder="e.g. Current cleaners are inconsistent, floors look dull..." 
                      className="resize-none h-24"
                      {...register('painPoints')} 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Any specific areas of concern or special requests? (Optional)</Label>
                    <Textarea 
                      id="additionalNotes" 
                      placeholder="e.g. Require hospital-grade disinfectant, strict key security protocol needed..." 
                      className="resize-none h-24"
                      {...register('additionalNotes')} 
                    />
                  </div>

                </div>
              </div>

              <div className="pt-8 flex flex-col items-center">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[300px] bg-primary-green hover:bg-primary-green-dark text-white rounded-full py-7 text-lg font-bold shadow-xl transition-all hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    "Book Cleaning Service"
                  )}
                </Button>
                <p className="text-xs text-brand-text-muted mt-4 text-center">
                  By submitting this form, you agree to our privacy policy. Your data is secure and will never be shared.
                </p>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
