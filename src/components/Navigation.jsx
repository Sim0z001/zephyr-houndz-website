import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-page-background shadow-none relative z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center" onClick={closeMobileMenu}>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src="/images/zephyr-logo.png" 
              alt="Zephyr Houndz" 
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 h-full">
          <a 
            href="/" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            Home
          </a>
          <a 
            href="/services" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            Services
          </a>
          <a 
            href="/gallery" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            Gallery
          </a>
          <a 
            href="/portraits" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            Portraits
          </a>
          <a 
            href="/about" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors flex items-center h-full"
          >
            Contact
          </a>
          
          {/* Book Now Button */}
          <a 
            href="/booking" 
            className="bg-zephyr-mint text-zephyr-ashbrown px-4 py-2 rounded-full font-bold 
            text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-zephyr-mint"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-zephyr-ashbrown focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md z-50 border-none shadow-none">
            <div className="flex flex-col items-center space-y-4 py-4 px-4">
              <a 
                href="/" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="/services" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="/gallery" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
              <a 
                href="/portraits" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                Portraits
              </a>

              <a 
                href="/about" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="/contact" 
                className="text-zephyr-ashbrown hover:text-opacity-80 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              
              {/* Book Now Button */}
              <a 
                href="/booking" 
                className="bg-zephyr-mint text-zephyr-ashbrown px-4 py-2 rounded-full font-bold 
                text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-zephyr-mint"
                onClick={closeMobileMenu}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;