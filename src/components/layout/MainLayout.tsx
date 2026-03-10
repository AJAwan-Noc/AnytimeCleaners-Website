import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary-green selection:text-white">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
