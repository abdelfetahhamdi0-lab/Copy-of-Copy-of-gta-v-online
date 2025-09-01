import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="flex items-center gap-4 text-white">
              <LogoIcon />
            </a>
          </div>

          <nav className="flex justify-center space-x-8">
            <a href="#explore" className="text-gray-400 hover:text-white transition-colors">Explore</a>
            <a href="#gta-online" className="text-gray-400 hover:text-white transition-colors">GTA Online</a>
            <a href="#player-reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#history" className="text-gray-400 hover:text-white transition-colors">History</a>
            <a href="#shark-cards" className="text-gray-400 hover:text-white transition-colors">Shark Cards</a>
          </nav>

          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon /></a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Rockstar Games Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;