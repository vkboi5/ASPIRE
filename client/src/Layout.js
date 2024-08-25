import React from 'react';
import TopNavbar from './pages/LandingPg/components/Nav/TopNavbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <main>
        <Outlet /> {/* This is where the routed components will be rendered */}
      </main>
      
    </div>
  );
};

export default Layout;
