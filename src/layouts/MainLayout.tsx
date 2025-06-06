import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white scroll-smooth">
      <Header />
      <main className="gpu-accelerated">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;