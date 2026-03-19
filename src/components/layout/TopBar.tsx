import { Mail, Phone, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full h-10 bg-white text-brand-text hidden lg:flex items-center border-b border-gray-100 flex-shrink-0">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium w-full">
        <div className="flex items-center gap-5">
          <a href="mailto:info@anytimecleaners.com.au" className="flex items-center gap-1.5 hover:text-primary-green transition-colors">
            <Mail size={13} className="text-primary-green" />
            info@anytimecleaners.com.au
          </a>
          <a href="tel:0383857705" className="flex items-center gap-1.5 hover:text-primary-green transition-colors">
            <Phone size={13} className="text-secondary-blue" />
            03 8385 7705
          </a>
          <div className="flex items-center gap-1.5 text-brand-text/60">
            <Clock size={13} />
            Mon–Sat: 9AM–5PM, Sun: 9AM–2PM
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/anytimecleaners.com.au" target="_blank" rel="noopener noreferrer" aria-label="Facebook"  className="hover:text-primary-green transition-colors"><Facebook  size={15} /></a>
          <a href="https://www.instagram.com/anytime_cleaners" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-green transition-colors"><Instagram size={15} /></a>
          <a href="https://www.youtube.com/@AnytimeCleaners-2023" target="_blank" rel="noopener noreferrer" aria-label="YouTube"   className="hover:text-primary-green transition-colors"><Youtube   size={15} /></a>
          <a href="https://www.linkedin.com/company/anytimecleaners-com-au/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="hover:text-primary-green transition-colors"><Linkedin  size={15} /></a>
        </div>
      </div>
    </div>
  );
}
