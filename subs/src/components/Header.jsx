import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Subscribely</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/tvshows" className="hover:text-blue-400">TV Shows</Link></li>
          <li><Link to="/music" className="hover:text-blue-400">Music</Link></li>
          <li><Link to="/transport" className="hover:text-blue-400">Transport</Link></li>
          <li><Link to="/aboutus" className="hover:text-blue-400">About Us</Link></li>
        </ul>
      </nav>
      <div>
        <Link to="#subscribe" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Subscribe Now</Link>
      </div>
    </header>
  );
};

export default Header;
