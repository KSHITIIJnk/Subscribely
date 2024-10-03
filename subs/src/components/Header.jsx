import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Subscribely</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
            <div className="relative group">
              <button onClick={toggleDropdown} className="flex items-center hover:text-blue-200 transition duration-300">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? '' : 'hidden'}`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/tvshows" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">TV Shows</Link>
                  <Link to="/music" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Music</Link>
                  <Link to="/transport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Transport</Link>
                </div>
              </div>
            </div>
            <Link to="/aboutus" className="hover:text-blue-200 transition duration-300">About Us</Link>
          </nav>

          {/* Total Credits and Manage Subscriptions */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-white">Total Credits Earned: <strong>0</strong></span>
            <Link to="/subscriptions" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md">
              Manage Your Subscriptions
            </Link>
            <Link to="/rewards" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md">
              Rewards
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="mt-4 md:hidden">
            <Link to="/" className="block py-2 hover:bg-blue-700">Home</Link>
            <Link to="/tvshows" className="block py-2 hover:bg-blue-700">TV Shows</Link>
            <Link to="/music" className="block py-2 hover:bg-blue-700">Music</Link>
            <Link to="/transport" className="block py-2 hover:bg-blue-700">Transport</Link>
            <Link to="/aboutus" className="block py-2 hover:bg-blue-700">About Us</Link>
            <Link to="/subscriptions" className="block py-2 hover:bg-blue-700">Manage Your Subscriptions</Link>
            <Link to="/rewards" className="block py-2 hover:bg-blue-700">Rewards</Link>
            <div className="block py-2 text-white">
              Total Credits Earned: <strong>0</strong>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
