import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Subscribely</h2>
            <p className="text-sm">Your one-stop solution for all subscription services.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-blue-200 transition duration-300">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-200 transition duration-300">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-blue-200 transition duration-300">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-blue-200 transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#facebook" className="hover:text-blue-200 transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#twitter" className="hover:text-blue-200 transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#instagram" className="hover:text-blue-200 transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#email" className="hover:text-blue-200 transition duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-400 text-center text-sm">
          <p>&copy; {currentYear} Subscribely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;