import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading font-bold text-primary-green text-3xl tracking-tight block mb-4">
              Anytime<span className="text-white">Cleaners</span>
            </Link>
            <p className="text-text-muted mb-6">"we clean it, we mean it"</p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">YT</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors cursor-pointer">LI</div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/commercial-cleaning" className="text-text-muted hover:text-primary-green transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/residential-cleaning" className="text-text-muted hover:text-primary-green transition-colors">Residential Cleaning</Link></li>
              <li><Link to="/commercial-cleaning" className="text-text-muted hover:text-primary-green transition-colors">Office Cleaning</Link></li>
              <li><Link to="/commercial-cleaning" className="text-text-muted hover:text-primary-green transition-colors">Healthcare Cleaning</Link></li>
            </ul>
          </div>
          
          {/* Company Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/more-info/about" className="text-text-muted hover:text-primary-green transition-colors">About Us</Link></li>
              <li><Link to="/more-info/accreditation" className="text-text-muted hover:text-primary-green transition-colors">Accreditation</Link></li>
              <li><Link to="/more-info/environment" className="text-text-muted hover:text-primary-green transition-colors">Green Cleaning</Link></li>
              <li><Link to="/more-info/faq" className="text-text-muted hover:text-primary-green transition-colors">FAQ's</Link></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2">Newsletter</h4>
            <p className="text-text-muted mb-4 text-sm">Subscribe to get the latest cleaning tips and exclusive offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="bg-white/5 border border-white/10 focus:border-primary-green outline-none px-4 py-2 rounded-l-md w-full text-white" />
              <button type="submit" className="bg-primary-green hover:bg-primary-green-dark px-4 py-2 rounded-r-md transition-colors font-medium">Subscribe</button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>Copyright © 2026 Anytime Cleaners. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
