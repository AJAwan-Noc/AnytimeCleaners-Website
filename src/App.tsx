import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import CommercialCleaning from '@/pages/CommercialCleaning';
import ResidentialCleaning from '@/pages/ResidentialCleaning';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';
import MoreInfo from '@/pages/MoreInfo';
import SuburbLandingPage from '@/pages/SuburbLandingPage';
import AboutUs from '@/pages/AboutUs';
import Accreditation from '@/pages/Accreditation';
import EnvironmentallyResponsible from '@/pages/EnvironmentallyResponsible';
import ModernSlavery from '@/pages/ModernSlavery';
import FAQ from '@/pages/FAQ';
import AreasWeClean from '@/pages/AreasWeClean';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
          <Route path="/areas-we-clean" element={<AreasWeClean />} />
          {/* Suburb Landing Pages — single dynamic route handles all 30 suburbs */}
          <Route path="/commercial-cleaning/:suburb" element={<SuburbLandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
