import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-primary-green text-2xl tracking-tight">
          Anytime<span className="text-secondary-blue">Cleaners</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-text-primary hover:text-primary-green transition-colors font-medium text-sm uppercase tracking-wider">Home</Link>
          <Link to="/commercial-cleaning" className="text-text-primary hover:text-primary-green transition-colors font-medium text-sm uppercase tracking-wider">Commercial</Link>
          <Link to="/residential-cleaning" className="text-text-primary hover:text-primary-green transition-colors font-medium text-sm uppercase tracking-wider">Residential</Link>
          <Link to="/blog" className="text-text-primary hover:text-primary-green transition-colors font-medium text-sm uppercase tracking-wider">Blogs</Link>
          <Link to="/contact" className="text-text-primary hover:text-primary-green transition-colors font-medium text-sm uppercase tracking-wider">Contact</Link>
          
          <Link 
            to="/contact" 
            className="bg-primary-green hover:bg-primary-green-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
        </nav>
        
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden text-text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
