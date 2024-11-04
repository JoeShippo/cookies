// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-20 bg-transparent">
      <div className="text-2xl font-bold text-white">Cookie's Auto</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-white">
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
        <a href="#about-faqs" className="hover:text-gray-300">About</a>
      </div>
      <a href='#contact' className="btn btn-warning hidden md:flex">Contact Us</a>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#services" className="hover:text-gray-300" onClick={toggleMenu}>Services</a>
          <a href="#testimonials" className="hover:text-gray-300" onClick={toggleMenu}>Testimonials</a>
          <a href="#about-faqs" className="hover:text-gray-300" onClick={toggleMenu}>About</a>
          <a href="#contact" className="btn btn-warning" onClick={toggleMenu}>Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;