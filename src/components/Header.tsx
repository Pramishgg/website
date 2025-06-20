import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import GooeyNav from './ui/GooeyNav';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero', label: 'Home', href: '#hero' },
    { name: 'About', to: 'about', label: 'About', href: '#about' },
    { name: 'Projects', to: 'projects', label: 'Projects', href: '#projects' },
    { name: 'Contact', to: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleGooeyNavClick = (index: number, item: any) => {
    setActiveNavIndex(index);
    // Scroll to the section
    const element = document.getElementById(item.href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gpu-accelerated ${
        isScrolled 
          ? 'bg-gradient-to-r from-primary-600/95 to-primary-500/95 backdrop-blur-md shadow-lg py-2 md:py-3 mx-0 sm:mx-4 md:mx-6 mt-0 sm:mt-4 md:mt-6 rounded-none sm:rounded-2xl md:rounded-3xl' 
          : 'bg-gradient-to-r from-primary-600/90 to-primary-500/90 backdrop-blur-sm py-3 md:py-4 lg:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation with GooeyNav */}
        <div className="hidden md:flex">
          <GooeyNav
            items={navItems.map(item => ({ label: item.label, href: item.href }))}
            initialActiveIndex={activeNavIndex}
            onItemClick={handleGooeyNavClick}
            animationTime={500}
            particleCount={12}
            particleDistances={[80, 8]}
            colors={[1, 2, 3, 4]}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg touch-optimized text-white hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg py-3 px-4 absolute top-full left-0 right-0 animate-slide-down">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 hover:text-primary-500 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg cursor-pointer transition-colors touch-optimized"
                activeClass="text-primary-500 bg-primary-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;