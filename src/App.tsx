import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home';
import CommercialCleaning from '@/pages/CommercialCleaning';
import ResidentialCleaning from '@/pages/ResidentialCleaning';
import Blogs from '@/pages/Blogs';
import Contact from '@/pages/Contact';
import MoreInfo from '@/pages/MoreInfo';

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
          <Route path="/more-info/*" element={<MoreInfo />} />
          
          {/* Legal Pages Mapped to MoreInfo Placeholder for now */}
          <Route path="/privacy-policy" element={<MoreInfo />} />
          <Route path="/terms-of-service" element={<MoreInfo />} />
          <Route path="/cookie-policy" element={<MoreInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
