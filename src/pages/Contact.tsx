import ContactInfo from '@/components/sections/contact/ContactInfo';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactMap from '@/components/sections/contact/ContactMap';
import ContactFAQ from '@/components/sections/contact/ContactFAQ';
import SEO from '@/components/seo/SEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export default function Contact() {
  return (
    <main className="w-full flex flex-col pt-0 pb-0 bg-gray-50 min-h-screen">
      <SEO 
        title="Contact Us - Get a Free Cleaning Quote"
        description="Get in touch with Anytime Cleaners for professional commercial and residential cleaning services in Melbourne. Call us or fill out our form for a free, no-obligation quote."
        canonical="https://anytimecleaners.com.au/contact"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' }
        ]}
      />
      
      {/* 2-Column Layout for Info and Form */}
      <section className="pt-32 pb-24 container mx-auto px-4 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32">
              <ContactInfo />
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <ContactMap />

      {/* FAQ Section */}
      <ContactFAQ />

    </main>
  );
}
