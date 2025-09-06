// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-4 text-center border-t border-gray-200">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;