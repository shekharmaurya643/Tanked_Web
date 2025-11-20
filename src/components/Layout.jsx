import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // We'll create this next
import Footer from './Footer'; // We'll create this next

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar sits at the top */}
      <Navbar />

      {/* Page content is rendered here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer sits at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;