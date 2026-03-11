import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('anytime-cookie-consent');
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const accept = () => { localStorage.setItem('anytime-cookie-consent', 'true');  setIsVisible(false); };
  const decline = () => { localStorage.setItem('anytime-cookie-consent', 'false'); setIsVisible(false); };

  return (
    <div className="fixed bottom-0 md:bottom-8 left-0 md:left-8 z-50 w-full md:w-[440px] bg-white border border-gray-200 shadow-2xl p-6 md:rounded-2xl animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary-green/10 p-3 rounded-full">
          <Cookie className="w-6 h-6 text-primary-green" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-lg mb-2 pr-6 text-brand-text">We value your privacy</h3>
          <p className="text-sm text-brand-text-light mb-4 leading-relaxed">
            We use cookies to enhance your experience and analyse traffic. See our{' '}
            <Link to="/cookie-policy" className="text-primary-green hover:underline">Cookie Policy</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={accept}  className="flex-1 bg-primary-green hover:bg-primary-green-dark text-white rounded-lg">
              Accept All
            </Button>
            <Button onClick={decline} variant="outline" className="flex-1 text-brand-text border-gray-200 hover:bg-gray-50 rounded-lg">
              Decline Optional
            </Button>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-text p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
