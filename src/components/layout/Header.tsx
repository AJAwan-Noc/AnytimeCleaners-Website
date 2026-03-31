import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import TopBar from './TopBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Commercial', path: '/commercial-cleaning' },
    { name: 'Residential', path: '/residential-cleaning' },
    { name: 'Suburbs', path: '/areas-we-clean' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'More',
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Accreditation', path: '/accreditation' },
        { name: 'Environmentally Responsible', path: '/environmentally-responsible' },
        { name: 'Modern Slavery Policy', path: '/modern-slavery' },
        { name: "FAQ's", path: '/faq' },
      ],
    },
  ];

  return (
    <div className={cn(
      "fixed top-0 w-full z-50 flex flex-col transition-transform duration-300",
      isScrolled ? "lg:-translate-y-10" : ""
    )}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary-green text-white px-4 py-2 rounded-lg font-bold shadow-xl"
      >
        Skip to main content
      </a>
      <TopBar />

      <header
        className={cn(
          'w-full transition-all duration-300 ease-in-out border-b border-white/5',
          isScrolled ? 'bg-bg-dark/95 backdrop-blur-md shadow-lg py-1' : 'bg-bg-dark py-2 lg:py-3',
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 lg:gap-4 xl:gap-6 2xl:gap-10">

          {/* ── Logo ────────────────────────────────────────────── */}
          <Link 
            to="/" 
            className="flex items-center gap-2 xl:gap-3 group flex-shrink-0 transition-all duration-300" 
            aria-label="Anytime Cleaners Home"
          >
            <img
              src="/images/Logo.png"
              alt="Anytime Cleaners Logo"
              className={cn(
                "w-auto object-contain transition-all duration-500 group-hover:scale-105",
                isScrolled ? "h-9 sm:h-10 lg:h-11" : "h-10 sm:h-12 md:h-13 lg:h-14 xl:h-16"
              )}
            />
            {/* Logo text: hidden below xl, visible on xl+ for space efficiency */}
            <span className={cn(
              "hidden xl:flex items-baseline gap-1.5 font-heading font-extrabold text-xl 2xl:text-2xl tracking-tighter transition-all duration-500",
              isScrolled ? "opacity-0 invisible w-0 -ml-8 overflow-hidden" : "opacity-100 visible w-auto ml-0"
            )}>
              <span className="text-primary-green">Anytime</span>
              <span className="text-logo-blue">Cleaners</span>
            </span>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1 min-w-0">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-1.5 xl:px-2.5 py-1.5 rounded-md font-semibold text-xs xl:text-[13px] transition-colors uppercase tracking-tight whitespace-nowrap',
                        location.pathname.startsWith(link.path) && link.path !== '#'
                          ? 'text-primary-green bg-primary-green/10'
                          : 'text-white hover:text-primary-green hover:bg-white/5',
                      )}
                    >
                      {link.name}
                      <ChevronDown size={13} className="opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-56 p-1.5 bg-white border border-gray-100 shadow-xl rounded-xl"
                  >
                    {link.dropdownItems?.map((item, idx) => (
                      <DropdownMenuItem
                        key={idx}
                        asChild
                        className="cursor-pointer rounded-lg py-2 focus:bg-bg-dark focus:text-white"
                      >
                        <Link to={item.path} className="font-medium text-[13px] w-full block">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-1.5 xl:px-2.5 py-1.5 rounded-md font-semibold text-xs xl:text-[13px] transition-colors uppercase tracking-tight relative group whitespace-nowrap',
                    location.pathname === link.path
                      ? 'text-primary-green'
                      : 'text-white hover:text-primary-green',
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-primary-green rounded-full transition-transform duration-300 origin-left',
                      location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              ),
            )}
          </nav>

          {/* ── Desktop CTA ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            {/* Phone: only on 2xl+ to avoid crowding */}
            <div className="hidden 2xl:flex items-center gap-1.5 text-white mr-1 group/phone">
              <PhoneCall size={16} className="text-secondary-blue icon-bounce" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold text-white/60 leading-none">Call Us Now</span>
                <a href="tel:0383857705" className="font-bold text-[13px] hover:text-primary-green transition-colors leading-tight text-white">
                  03 8385 7705
                </a>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-3.5 xl:px-5 py-1.5 h-10 font-semibold text-xs xl:text-[13px] shadow-[0_4px_14px_rgba(161,228,54,0.4)] transition-all active:scale-95"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* ── Mobile Hamburger ────────────────────────────────── */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 hover:text-primary-green border border-white/20 min-h-[44px] min-w-[44px]"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-[400px] border-l-0 shadow-2xl p-0 bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col h-full">
                <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center">
                  <Link to="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="Anytime Cleaners Home">
                    <img
                      src="/images/Logo.png"
                      alt="Anytime Cleaners Logo"
                      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto py-4 px-3 sm:px-4">
                  <nav className="flex flex-col">
                    {navLinks.map((link) => (
                      <div key={link.name} className="border-b border-gray-100 last:border-0">
                        {link.hasDropdown ? (
                          <div className="py-3">
                            <span className="text-xs uppercase font-bold text-brand-text-muted tracking-widest px-2 block mb-2">
                              {link.name}
                            </span>
                            <div className="pl-3 border-l-2 border-primary-green/30 ml-2 flex flex-col gap-1">
                              {link.dropdownItems?.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="py-3 px-3 sm:px-4 text-sm font-semibold text-brand-text hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={link.path}
                            className="py-4 px-2 text-base font-bold text-brand-text hover:text-primary-green flex items-center justify-between group"
                          >
                            {link.name}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="p-5 sm:p-6 bg-gray-50 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full bg-primary-green hover:bg-primary-green-dark text-white rounded-full py-6 font-semibold shadow-lg text-base mb-4"
                  >
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-brand-text">
                    <PhoneCall size={18} className="text-primary-green" />
                    <a href="tel:0383857705" className="font-bold text-lg hover:text-primary-green transition-colors">
                      03 8385 7705
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
