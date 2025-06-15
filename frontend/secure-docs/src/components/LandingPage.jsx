import React from 'react';
import home_pic1 from '../assets/home_pic1.jpg';
import { useNavigate } from 'react-router-dom';

import Features from './Features';
import { motion } from 'framer-motion';

function LandingPage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[calc(100vh-6rem)] bg-gradient-to-b from-[#f3f0ff] to-white flex items-center justify-center px-6 sm:px-10 md:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute w-[250px] h-[250px] bg-purple-300 opacity-30 rounded-full blur-[100px] top-10 left-10" />
          <div className="absolute w-[300px] h-[300px] bg-purple-200 opacity-20 rounded-full blur-[100px] bottom-0 right-10" />
          <div className="absolute w-[200px] h-[200px] bg-purple-400 opacity-20 rotate-45 blur-[120px] bottom-10 left-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="text-purple-600 font-fjalla text-lg tracking-wider uppercase mb-1">
              Welcome to
            </h2>
            <h1 className="text-5xl sm:text-[58px] font-fjalla text-gray-900 leading-tight mb-4">
              TrustVault
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Your secure digital vault for encrypted document storage and seamless sharing. 
              Store, share, and access files effortlessly — 100% private.
            </p>

            {!isLoggedIn ? (
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate('/login')}
                  className="cursor-pointer bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition shadow-md text-lg"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="cursor-pointer border-2 border-purple-700 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-100 transition shadow-sm text-lg"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/mainpage')}
                className="cursor-pointer bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition shadow-md text-lg"
              >
                You’re already in! Go to Vault →
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={home_pic1}
              alt="Secure vault graphic"
              className="h-[60vh] max-w-[90vw] md:max-w-none rounded-[2rem] shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>

      <Features />
      
    </div>
  );
}

export default LandingPage;
