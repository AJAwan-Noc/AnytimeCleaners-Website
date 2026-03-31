import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CookieConsent from './CookieConsent';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary-green selection:text-white">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col pt-24 lg:pt-[100px]"> {/* Account for TopBar + Header */}
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
