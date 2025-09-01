import React, { useState, useEffect } from 'react';
import { LogoIcon, SearchIcon } from './icons';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-sm shadow-glow-purple' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 text-white">
          <LogoIcon />
        </a>
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <a href="#explore" className="text-gray-300 hover:text-brand-cyan transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full">Explore</a>
              <a href="#gta-online" className="text-gray-300 hover:text-brand-cyan transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full">GTA Online</a>
              <a href="#player-reviews" className="text-gray-300 hover:text-brand-cyan transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full">Reviews</a>
              <a href="#history" className="text-gray-300 hover:text-brand-cyan transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full">History</a>
            </nav>
            <a href="https://locked2.com/cl/i/rnd1xl" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold py-2 px-6 rounded-full transition-all hover:scale-105 hover:shadow-glow-purple">
              Get Started
            </a>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-48 bg-transparent text-white border-2 border-gray-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-0 focus:border-brand-purple transition duration-300 ease-in-out placeholder-gray-500"
                />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;