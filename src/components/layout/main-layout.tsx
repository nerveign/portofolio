import { Outlet } from 'react-router-dom';
import { Navbar } from '../ui/navbar';
import { Footer } from '../ui/footer';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
