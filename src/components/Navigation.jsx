// src/components/Navigation.jsx
import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Contact'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121212] border-b border-[#a6a6a6]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="font-oswald text-[#f5f5f5] text-xl tracking-wide">
            HARSHA
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-nunito transition-colors duration-300 ${
                  index === navItems.length - 1 
                    ? 'text-[#f5f5f5] font-semibold border border-[#f5f5f5] px-4 py-2 hover:bg-[#f5f5f5] hover:text-[#121212]' 
                    : 'text-[#a6a6a6] hover:text-[#f5f5f5]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#a6a6a6] hover:text-[#f5f5f5] transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#121212] border-b border-[#a6a6a6]">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`font-nunito transition-colors duration-300 py-3 px-4 ${
                      index === navItems.length - 1 
                        ? 'text-[#f5f5f5] font-semibold border border-[#f5f5f5] text-center hover:bg-[#f5f5f5] hover:text-[#121212]' 
                        : 'text-[#a6a6a6] hover:text-[#f5f5f5] border-b border-[#a6a6a6]'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;