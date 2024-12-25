import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function GuestLayout() {
  return (
    <div className="guest-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default GuestLayout;
