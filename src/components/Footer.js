import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200 py-8">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between">
        
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Cookie's Auto</h3>
          <p>Reliable mobile mechanic serving Olney and surrounding areas.</p>
        </div>

        {/* Navigation Links */}

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p>Phone: <a href="tel:07123456789" className="hover:text-white">07123 456789</a></p>
          <p>Email: <a href="mailto:info@cookiesauto.com" className="hover:text-white">info@cookiesauto.com</a></p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/cookies-auto" className="hover:text-white"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://instagram.com/cookies-auto" className="hover:text-white"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Cookie's Auto. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;