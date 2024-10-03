import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Subscribely. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
        <a href="#terms" className="hover:text-blue-400">Terms of Service</a>
        <a href="#contact" className="hover:text-blue-400">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
