import { motion } from 'framer-motion';

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-body">
            
            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">1. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They are widely used to make websites work more efficiently, improve the user experience, and provide analytical information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">Anytime Cleaners uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse our website and use its features, such as accessing secure areas or completing booking forms. Without these, our site may not function properly.</li>
                <li><strong>Performance and Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website. This helps us improve our site architecture and content. We use third-party analytics services (such as Google Analytics) to aggregate this non-personally identifiable data.</li>
                <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make (such as your username or region) and provide enhanced, more personalized features.</li>
                <li><strong>Targeting/Advertising Cookies:</strong> We may use these cookies to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of our campaigns.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">3. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These third-party services have their own privacy and cookie policies over which we have no control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">4. Managing Your Cookies</h2>
              <p className="mb-4">
                You have the right to choose whether or not to accept cookies. However, please note that if you choose to refuse cookies you may not be able to use the full functionality of our website.
              </p>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can configure your browser to notify you when you receive a cookie or to reject cookies generally. For more information on how to manage cookies, you can visit the help pages of your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">5. Changes to This Policy</h2>
              <p className="mb-4">
                We may periodically update this Cookie Policy to reflect changes in our practices and service offerings. When we update this Policy, we will revise the "Last Updated" date at the top of this page. We encourage you to review this Cookie Policy from time to time to stay informed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-bg-dark mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us at:
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
