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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Commercial',
      path: '/commercial-cleaning',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Corporate Offices',    path: '/commercial-cleaning#offices' },
        { name: 'Healthcare Facilities', path: '/commercial-cleaning#healthcare' },
        { name: 'Retail & Shopping',    path: '/commercial-cleaning#retail' },
        { name: 'Industrial Plants',    path: '/commercial-cleaning#industrial' },
        { name: 'View All Services',    path: '/commercial-cleaning' },
      ],
    },
    {
      name: 'Residential',
      path: '/residential-cleaning',
      hasDropdown: true,
      dropdownItems: [
        { name: 'House Cleaning',    path: '/residential-cleaning#house' },
        { name: 'End of Lease',      path: '/residential-cleaning#end-of-lease' },
        { name: 'Carpet Steam',      path: '/residential-cleaning#carpet' },
        { name: 'Airbnb Cleaning',   path: '/residential-cleaning#airbnb' },
        { name: 'View All Services', path: '/residential-cleaning' },
      ],
    },
    { name: 'Areas We Clean', path: '/areas-we-clean' },
    { name: 'Blogs',    path: '/blog' },
    { name: 'Contact',  path: '/contact' },
    {
      name: 'More',
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us',                   path: '/about-us' },
        { name: 'Accreditation',              path: '/accreditation' },
        { name: 'Environmentally Responsible', path: '/environmentally-responsible' },
        { name: 'Modern Slavery Policy',      path: '/modern-slavery' },
        { name: "FAQ's",                      path: '/faq' },
      ],
    },
  ];

  return (
    <div className={cn(
      "fixed top-0 w-full z-50 flex flex-col transition-transform duration-300",
      isScrolled ? "lg:-translate-y-10" : ""
    )}>
      <TopBar />

      <header
        className={cn(
          'w-full transition-all duration-300 ease-in-out border-b border-gray-100',
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* ── Logo ────────────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="font-heading font-extrabold text-primary-green text-2xl tracking-tight transition-transform duration-300 group-hover:scale-105">
              Anytime<span className="text-secondary-blue">Cleaners</span>
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-md font-semibold text-sm transition-colors uppercase tracking-wide',
                        location.pathname.startsWith(link.path) && link.path !== '#'
                          ? 'text-primary-green bg-primary-green/5'
                          : 'text-brand-text hover:text-primary-green hover:bg-black/5',
                      )}
                    >
                      {link.name}
                      <ChevronDown size={14} className="opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-56 p-2 bg-white border border-gray-100 shadow-xl rounded-xl"
                  >
                    {link.dropdownItems?.map((item, idx) => (
                      <DropdownMenuItem
                        key={idx}
                        asChild
                        className="cursor-pointer rounded-lg py-2.5 focus:bg-primary-green/10 focus:text-primary-green"
                      >
                        <Link to={item.path} className="font-medium text-sm w-full block">
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
                    'px-3 py-2 rounded-md font-semibold text-sm transition-colors uppercase tracking-wide relative group',
                    location.pathname === link.path
                      ? 'text-primary-green'
                      : 'text-brand-text hover:text-primary-green',
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute bottom-0 left-3 right-3 h-0.5 bg-primary-green rounded-full transition-transform duration-300 origin-left',
                      location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              ),
            )}
          </nav>

          {/* ── Desktop CTA ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="hidden xl:flex items-center gap-2 text-brand-text mr-2">
              <PhoneCall size={18} className="text-secondary-blue" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-brand-text-muted leading-none">Call Us Now</span>
                <a href="tel:0383857705" className="font-bold text-sm hover:text-primary-green transition-colors leading-tight">
                  03 8385 7705
                </a>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary-green hover:bg-primary-green-dark text-white rounded-full px-6 font-semibold text-sm shadow-[0_4px_14px_rgba(124,179,66,0.4)] hover:shadow-[0_6px_20px_rgba(124,179,66,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* ── Mobile Hamburger ────────────────────────────────── */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-brand-text hover:bg-primary-green/10 hover:text-primary-green border border-gray-200"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 shadow-2xl p-0 bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100 flex items-center">
                  <div className="font-heading font-extrabold text-primary-green text-2xl tracking-tight">
                    Anytime<span className="text-secondary-blue">Cleaners</span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-4 px-4">
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
                                  className="py-2 px-3 text-sm font-semibold text-brand-text hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-colors"
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

                <div className="p-6 bg-gray-50 border-t border-gray-100">
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
