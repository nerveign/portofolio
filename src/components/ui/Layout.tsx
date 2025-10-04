import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen  flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
