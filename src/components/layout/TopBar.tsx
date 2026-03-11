import { Mail, Phone, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full h-10 bg-bg-dark text-white hidden lg:flex items-center border-b border-white/10 flex-shrink-0">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium w-full">
        <div className="flex items-center gap-5">
          <a href="mailto:info@anytimecleaners.com.au" className="flex items-center gap-1.5 hover:text-primary-green-light transition-colors">
            <Mail size={13} className="text-primary-green-light" />
            info@anytimecleaners.com.au
          </a>
          <a href="tel:0383857705" className="flex items-center gap-1.5 hover:text-primary-green-light transition-colors">
            <Phone size={13} className="text-secondary-blue-light" />
            03 8385 7705
          </a>
          <div className="flex items-center gap-1.5 text-white/60">
            <Clock size={13} />
            Mon–Sat: 9AM–5PM, Sun: 9AM–2PM
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook"  className="hover:text-primary-green-light transition-colors"><Facebook  size={15} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary-green-light transition-colors"><Instagram size={15} /></a>
          <a href="#" aria-label="YouTube"   className="hover:text-primary-green-light transition-colors"><Youtube   size={15} /></a>
          <a href="#" aria-label="LinkedIn"  className="hover:text-primary-green-light transition-colors"><Linkedin  size={15} /></a>
        </div>
      </div>
    </div>
  );
}
