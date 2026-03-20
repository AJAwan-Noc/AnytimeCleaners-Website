import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, CalendarDays, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

// Form Validation Schema
const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  location: z.string().min(3, "Suburb or postcode is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  bedrooms: z.string().min(1, "Required"),
  bathrooms: z.string().min(1, "Required"),
  frequency: z.string().min(1, "Required"),
  extras: z.array(z.string()).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const SERVICE_TYPES = [
  "General Cleaning",
  "Deep Cleaning",
  "End of Lease Cleaning",
  "Move-In / Move-Out",
  "Spring Cleaning",
  "Post-Renovation Cleaning"
];

const EXTRAS = [
  { id: "oven", label: "Inside Oven" },
  { id: "fridge", label: "Inside Fridge" },
  { id: "windows", label: "Interior Windows" },
  { id: "cabinets", label: "Inside Cabinets" },
  { id: "laundry", label: "Laundry Load" },
  { id: "walls", label: "Wall Washing" }
];

export default function ResidentialBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useReactHookForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "",
      bedrooms: "",
      bathrooms: "",
      frequency: "",
      extras: []
    }
  });

  const selectedExtras = watch('extras') || [];

  const handleSelectChange = (field: keyof BookingFormValues, value: string) => {
    setValue(field, value);
    trigger(field);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const current = selectedExtras;
    const updated = checked 
      ? [...current, id]
      : current.filter(item => item !== id);
    setValue('extras', updated);
  };

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("=== RESIDENTIAL BOOKING SUBMITTED ===");
    console.table(data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Booking Request Received!", {
      description: "We'll contact you shortly to confirm your slot.",
      duration: 5000,
    });
    
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="booking-form" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-secondary-blue/10 rounded-2xl flex items-center justify-center text-secondary-blue">
                <CalendarDays className="w-8 h-8" />
              </div>
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-text mb-4">
              Book Your Cleaner Online
            </h2>
            <p className="text-brand-text-light text-lg">
              Takes less than 60 seconds. Secure your spot today!
            </p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-gray-50 rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 relative overflow-hidden"
        >
          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-blue/5 rounded-bl-[100px] -z-0" />

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center justify-center py-20 text-center relative z-10"
            >
              <CheckCircle className="w-24 h-24 text-primary-green mb-6" />
              <h3 className="font-heading font-bold text-3xl text-brand-text mb-4">Booking Request Sent!</h3>
              <p className="text-brand-text-light text-lg max-w-md mx-auto">
                Thank you! Our scheduling team has received your request and will call you shortly to confirm dates and provide your exact quote.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              
              {/* Step 1: Contact Details */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-brand-text mb-6 flex items-center gap-2">
                  <span className="bg-secondary-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Jane Doe" {...register('fullName')} className={errors.fullName ? "border-red-500" : ""} />
                    {errors.fullName && <p className="text-red-500 text-xs font-semibold">{errors.fullName.message}</p>}
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
                    <Label htmlFor="location">Suburb or Postcode *</Label>
                    <Input id="location" placeholder="e.g. Caroline Springs 3023" {...register('location')} className={errors.location ? "border-red-500" : ""} />
                    {errors.location && <p className="text-red-500 text-xs font-semibold">{errors.location.message}</p>}
                  </div>
                </div>
              </div>

              {/* Step 2: Service Details */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-brand-text mb-6 flex items-center gap-2">
                  <span className="bg-secondary-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Your Home
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2 md:col-span-2">
                     <Label>Type of Cleaning Service *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('serviceType', val)}>
                        <SelectTrigger className={errors.serviceType ? "border-red-500" : ""}>
                          <SelectValue placeholder="What kind of cleaning do you need?" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {SERVICE_TYPES.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     {errors.serviceType && <p className="text-red-500 text-xs font-semibold">{errors.serviceType.message}</p>}
                  </div>

                  <div className="space-y-2">
                     <Label>Bedrooms *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('bedrooms', val)}>
                        <SelectTrigger className={errors.bedrooms ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {[1,2,3,4,5,"6+"].map(num => <SelectItem key={`bed-${num}`} value={num.toString()}>{num} Bedroom{num !== 1 ? 's' : ''}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     {errors.bedrooms && <p className="text-red-500 text-xs font-semibold">{errors.bedrooms.message}</p>}
                  </div>

                  <div className="space-y-2">
                     <Label>Bathrooms *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('bathrooms', val)}>
                        <SelectTrigger className={errors.bathrooms ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {[1,2,3,4,"5+"].map(num => <SelectItem key={`bath-${num}`} value={num.toString()}>{num} Bathroom{num !== 1 ? 's' : ''}</SelectItem>)}
                        </SelectContent>
                     </Select>
                     {errors.bathrooms && <p className="text-red-500 text-xs font-semibold">{errors.bathrooms.message}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                     <Label>How often do you want us to clean? *</Label>
                     <Select onValueChange={(val: string) => handleSelectChange('frequency', val)}>
                        <SelectTrigger className={errors.frequency ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select frequency..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                           <SelectItem value="weekly">Weekly (Save 20%)</SelectItem>
                           <SelectItem value="fortnightly">Fortnightly (Save 10%)</SelectItem>
                           <SelectItem value="monthly">Monthly (Save 5%)</SelectItem>
                           <SelectItem value="once">Once-off</SelectItem>
                        </SelectContent>
                     </Select>
                     {errors.frequency && <p className="text-red-500 text-xs font-semibold">{errors.frequency.message}</p>}
                  </div>

                </div>
              </div>

               {/* Step 3: Extras */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
                  <span className="bg-secondary-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                  Select Extras <span className="text-sm font-normal text-gray-400">(Optional)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {EXTRAS.map((extra) => (
                    <div key={extra.id} className="flex items-center space-x-2 bg-gray-50 border border-gray-100 p-3 rounded-lg hover:border-secondary-blue/30 transition-colors">
                      <Checkbox 
                        id={extra.id} 
                        checked={selectedExtras.includes(extra.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(extra.id, checked as boolean)}
                      />
                      <Label htmlFor={extra.id} className="text-sm cursor-pointer leading-tight font-medium text-brand-text-light">{extra.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary-blue hover:bg-secondary-blue/90 text-white rounded-xl py-7 text-lg font-bold shadow-xl transition-all hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Securing Your Booking...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Complete Booking Request
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">No payment required today. We will confirm your exact price before starting.</p>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
