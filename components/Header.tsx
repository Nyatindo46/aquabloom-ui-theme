
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-2xl font-serif font-bold text-charcoal-navy">
             <Icon name="logo" className="h-6 w-6 text-aloe-green"/>
            Aquabloom
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-charcoal-navy hover:text-aloe-green transition-colors duration-300">About</a>
            <a href="#products" className="text-charcoal-navy hover:text-aloe-green transition-colors duration-300">Products</a>
            <a href="#reviews" className="text-charcoal-navy hover:text-aloe-green transition-colors duration-300">Reviews</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Shop Now</Button>
          </div>
          
          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            <button className="text-charcoal-navy">
                <Icon name="menu" className="h-6 w-6"/>
            </button>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aloe-green to-aqua-blue transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </header>
  );
};
