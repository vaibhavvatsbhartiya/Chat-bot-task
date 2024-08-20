import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-evenly">
      <h1 className="text-2xl font-bold">Home Improvement Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
