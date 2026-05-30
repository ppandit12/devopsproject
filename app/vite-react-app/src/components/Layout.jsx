import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlowingBackground from './GlowingBackground';
import PageTransition from './PageTransition';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-150 relative">
      {/* Background Mesh Gradients & Orbs */}
      <GlowingBackground />

      {/* Floating Header */}
      <Navbar />

      {/* Page Content wrapped in Framer-Motion wrapper */}
      <main className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageTransition key={location.pathname}>
          {children}
        </PageTransition>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
