import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white relative overflow-hidden pt-20 pb-8 rounded-t-[3rem] mt-10">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-blue opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block group">
              <div className="font-heading font-extrabold text-primary-green text-3xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                Anytime<span className="text-white">Cleaners</span>
              </div>
            </Link>
            <p className="text-white/70 font-medium italic">"we clean it, we mean it"</p>
            <p className="text-white/50 text-sm leading-relaxed pr-4">
              Pioneering the 'Green-Clean' revolution across Australia — serving commercial and residential clients with guaranteed satisfaction.
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { Icon: Facebook,  label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube,   label: 'YouTube' },
                { Icon: Linkedin,  label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary-green hover:text-white hover:border-primary-green hover:-translate-y-1 transition-all duration-300 icon-rotate"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 pb-3 relative inline-block text-white">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-green rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Commercial Cleaning',   path: '/commercial-cleaning' },
                { name: 'Residential Cleaning',  path: '/residential-cleaning' },
                { name: 'Office Cleaning',       path: '/commercial-cleaning#offices' },
                { name: 'Healthcare Cleaning',   path: '/commercial-cleaning#healthcare' },
                { name: 'Builders Cleaning',     path: '/commercial-cleaning#construction' },
                { name: 'End of Lease',          path: '/residential-cleaning#end-of-lease' },
              ].map((link, i) => (
                <li key={i} className="group">
                  <Link to={link.path} className="text-white/55 hover:text-white flex items-center transition-colors hover-underline">
                    <ArrowRight size={13} className="text-primary-green mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 pb-3 relative inline-block text-white">
              Company Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-green rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us',              path: '/about-us' },
                { name: 'Accreditation',         path: '/accreditation' },
                { name: 'Green Clean Revolution', path: '/environmentally-responsible' },
                { name: 'Modern Slavery Policy', path: '/modern-slavery' },
                { name: "FAQ's",                 path: '/faq' },
                { name: 'Areas We Clean',        path: '/areas-we-clean' },
                { name: 'Contact Us',            path: '/contact' },
              ].map((link, i) => (
                <li key={i} className="group">
                  <Link to={link.path} className="text-white/55 hover:text-white flex items-center transition-colors hover-underline">
                    <ArrowRight size={13} className="text-primary-green mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 pb-3 relative inline-block text-white">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-green rounded-full" />
            </h4>

            <div className="space-y-4 mb-7">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Melbourne Office</p>
                  <p className="text-white/50 text-sm mt-0.5">Ground Floor, 470 St Kilda Road,<br />Melbourne VIC 3004</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-green flex-shrink-0" />
                <a href="tel:0383857705" className="text-white/55 hover:text-white transition-colors text-sm">03 8385 7705</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-green flex-shrink-0" />
                <a href="mailto:info@anytimecleaners.com.au" className="text-white/55 hover:text-white transition-colors text-sm break-all">
                  info@anytimecleaners.com.au
                </a>
              </div>
            </div>

            <p className="text-white text-sm font-medium mb-3">Join Our Newsletter</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email address"
                aria-label="Email address for newsletter"
                required
                className="flex-1 min-w-0 bg-white/5 border border-white/15 focus:border-primary-green outline-none px-4 py-2.5 rounded-l-lg text-white text-sm placeholder:text-white/30 transition-colors input-glow-focus"
              />
              <Button
                type="submit"
                className="rounded-l-none rounded-r-lg bg-primary-green hover:bg-primary-green-dark text-white px-5 transition-colors flex-shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p className="text-center md:text-left">
            Copyright © {year} Anytime Cleaners. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy"   className="hover:text-primary-green transition-colors hover-underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary-green transition-colors hover-underline">Terms of Service</Link>
            <Link to="/cookie-policy"    className="hover:text-primary-green transition-colors hover-underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
