import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="text-2xl sm:text-3xl font-fjalla text-purple-700 tracking-wide hover:text-purple-800 transition">
            TrustVault
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link to="/about" className="text-lg font-fjalla text-gray-700 hover:text-purple-600 transition duration-200">
              About
            </Link>
            <Link to="/howtouse" className="text-lg font-fjalla text-gray-700 hover:text-purple-600 transition duration-200">
              How to Use
            </Link>
            <button
              onClick={() => navigate('/signup')}
              className="ml-4 px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 font-fjalla text-lg transition duration-300 shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="h-[4px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500" />
    </nav>
  );
}

export default Navbar;
