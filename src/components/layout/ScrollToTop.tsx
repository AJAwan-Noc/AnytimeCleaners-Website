import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-[0_4px_14px_0_rgba(124,179,66,0.39)] transition-all duration-300 bg-primary-green hover:bg-primary-green-dark hover:scale-110",
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp size={20} className="text-white" />
    </Button>
  );
}
