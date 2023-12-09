import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Aside from './Aside';
import Header from './Header';
const Layout = () => {
  return (
    <div className="flex max-h-screen max-w-screen pr-9 bg-[#F8FAFF]">
      <Aside />
      <main style={{ width: 'calc(100vw - 16rem - 2.25rem)' }}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
