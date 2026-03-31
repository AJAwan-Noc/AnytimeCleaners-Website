import { motion } from 'framer-motion';
import SEO from '@/components/seo/SEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export default function PrivacyPolicy() {
  const lastUpdated = "March 15, 2026";

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <SEO 
        title="Privacy Policy - Your Data Protection"
        description="Read Anytime Cleaners' privacy policy to understand how we collect, use, and protect your personal information."
        canonical="https://anytimecleaners.com.au/privacy-policy"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Privacy Policy', item: '/privacy-policy' }
        ]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="mb-12 border-b border-gray-100 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-body">
            
            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">1. Introduction</h2>
              <p className="mb-4">
                Anytime Cleaners ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website <code>anytimecleaners.com.au</code> or use our cleaning services.
              </p>
              <p>
                By accessing our website or using our services, you consent to the data practices described in this statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">2. Information Collection</h2>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Request a quote or book a cleaning service.</li>
                <li>Fill out a contact form or subscribe to our newsletter.</li>
                <li>Communicate with us via phone, email, or social media.</li>
              </ul>
              <p>
                The personal information we collect may include your name, email address, phone number, property address, payment information, and details about your property relevant to the cleaning service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">3. Use of Information</h2>
              <p className="mb-4">We use the collected information for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To provide, operate, and maintain our cleaning services.</li>
                <li>To process your transactions and manage your bookings.</li>
                <li>To send administrative information, such as confirmations and updates.</li>
                <li>To respond to customer service requests and support needs.</li>
                <li>To improve our website, services, and overall customer experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">4. Sharing of Information</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal identification information to others. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business (e.g., payment processors), so long as those parties agree to keep this information confidential.
              </p>
              <p>
                We may also disclose your information when required by law, to enforce our site policies, or to protect our or others' rights, property, or safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">6. Cookies</h2>
              <p className="mb-4">
                Our website uses "cookies" to enhance your experience. For detailed information on how we use cookies, please refer to our <a href="/cookie-policy" className="text-primary-green hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions regarding this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-sm">
                <p><strong>Email:</strong> info@anytimecleaners.com.au</p>
                <p><strong>Phone:</strong> 03 8385 7705</p>
                <p><strong>Office:</strong> Level 1/236 Caroline Springs Blvd, Caroline Springs, Victoria, Australia 3023</p>
              </div>
            </section>

          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
