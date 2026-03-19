import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import ScrollRestoration from '@/components/layout/ScrollRestoration';

// Lazy load page components
const Home = lazy(() => import('@/pages/Home'));
const CommercialCleaning = lazy(() => import('@/pages/CommercialCleaning'));
const ResidentialCleaning = lazy(() => import('@/pages/ResidentialCleaning'));
const Blogs = lazy(() => import('@/pages/Blogs'));
const Contact = lazy(() => import('@/pages/Contact'));
const MoreInfo = lazy(() => import('@/pages/MoreInfo'));
const SuburbLandingPage = lazy(() => import('@/pages/SuburbLandingPage'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Accreditation = lazy(() => import('@/pages/Accreditation'));
const EnvironmentallyResponsible = lazy(() => import('@/pages/EnvironmentallyResponsible'));
const ModernSlavery = lazy(() => import('@/pages/ModernSlavery'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const AreasWeClean = lazy(() => import('@/pages/AreasWeClean'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'));
const Pricing = lazy(() => import('@/pages/Pricing'));

// Loading component
function PageLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-green/20 border-t-primary-green rounded-full animate-spin" />
        <p className="text-brand-text/50 font-medium animate-pulse">Loading Anytime Cleaners...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/pricing-direct" element={<Pricing />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
            <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/accreditation" element={<Accreditation />} />
            <Route path="/environmentally-responsible" element={<EnvironmentallyResponsible />} />
            <Route path="/modern-slavery" element={<ModernSlavery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/areas-we-clean" element={<AreasWeClean />} />
            <Route path="/commercial-cleaning/:suburb" element={<SuburbLandingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
