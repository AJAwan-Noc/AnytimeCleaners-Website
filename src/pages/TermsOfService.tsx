import { motion } from 'framer-motion';

export default function TermsOfService() {
  const lastUpdated = "March 15, 2026";

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="mb-12 border-b border-gray-100 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-body">
            
            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the Anytime Cleaners website (<code>anytimecleaners.com.au</code>) and our cleaning services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">2. Service Agreement</h2>
              <p className="mb-4">
                We agree to provide professional cleaning services as detailed in the accepted quote or booking confirmation. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>We will supply all necessary cleaning equipment and eco-friendly products unless prior arrangements have been made.</li>
                <li>Our staff are trained professionals who will perform their duties with care and diligence.</li>
                <li>We hold valid public liability insurance to cover any damages caused by our staff during the provision of services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">3. Booking, Rescheduling, and Cancellation</h2>
              <p className="mb-4">
                To provide consistent service, we require adequate notice for any changes to your booking.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cancellation Policy:</strong> A minimum of 24 hours' notice is required to cancel or reschedule a service without incurring a cancellation fee. Late cancellations may incur a fee up to the full price of the booked service.</li>
                <li><strong>Access to Premises:</strong> It is the client's responsibility to ensure that our cleaners have unhindered access to the premises at the scheduled time. Failure to provide access may result in a cancellation fee.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                For residential services, payment is due upon completion of the service unless otherwise agreed. For commercial clients with an established account, payment terms are strictly within the agreed Net period outlined in the invoice. Late payments may incur administrative fees and interest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">5. Liability and Damages</h2>
              <p className="mb-4">
                We take utmost care when cleaning your property. If any damage occurs as a direct result of our service, you must notify us within 24 hours. We reserve the right to inspect the damage and either arrange for repair or replacement, or handle the claim through our insurance provider. We are not liable for pre-existing damage, wear and tear, or items valued over a specified amount not disclosed prior to service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                The content, layout, design, data, databases and graphics on this website are protected by Australian intellectual property laws and are owned by Anytime Cleaners. You may not reproduce, modify, or distribute any part without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">7. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. Your continued use of the website or services following any changes signifies your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions regarding these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-sm">
                <p><strong>Email:</strong> info@anytimecleaners.com.au</p>
                <p><strong>Phone:</strong> 03 8385 7705</p>
              </div>
            </section>

          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
