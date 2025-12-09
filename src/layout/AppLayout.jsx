import { Outlet } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
