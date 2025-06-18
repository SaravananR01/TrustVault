import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="h-[4px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500" />
      <footer className="bg-[#f3f0ff] text-purple-900 py-10 shadow-inner">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left translate-x-[10px]">

          <div>
            <h2 className="text-2xl font-fjalla mb-2">TrustVault</h2>
            <p className="text-sm">Your secure digital vault for encrypted document storage and seamless sharing.</p>
          </div>

          <div>
            <h3 className="text-xl font-fjalla mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
              <li><Link to="/howtouse" className="hover:text-purple-600">How to Use</Link></li>
              <li><Link to="/login" className="hover:text-purple-600">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-fjalla mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 text-purple-700">
              <a href="mailto:trustvault@example.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="text-2xl hover:text-purple-900 transition" />
              </a>
              <a href="https://github.com/SaravananR01/TrustVault" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl hover:text-purple-900 transition" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl hover:text-purple-900 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TrustVault. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
