import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaCloudUploadAlt, FaUserShield, FaFileAlt } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-[#f3f0ff] min-h-screen py-16 px-6 sm:px-10 md:px-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-fjalla text-purple-800 mb-4">About TrustVault</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          TrustVault is your end-to-end encrypted digital vault — designed for peace of mind. 
          We empower users to store, manage, and share their documents securely without compromise.
        </p>
      </motion.div>

      {/* Feature Highlights */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-fjalla text-purple-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-6">
            We believe your privacy matters. With growing concerns over digital rights and document security, 
            TrustVault offers a safe, encrypted space for individuals and businesses alike.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-md space-y-2">
            <li>No third-party access — ever.</li>
            <li>Military-grade encryption for every file.</li>
            <li>Simple, intuitive design built for humans.</li>
          </ul>
        </motion.div>

        {/* Right Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {/* Info Cards */}
          {[
            { icon: <FaLock />, title: "Secure Encryption", desc: "Files are encrypted client-side using AES-256." },
            { icon: <FaCloudUploadAlt />, title: "Cloud Convenience", desc: "Upload and access files from anywhere securely." },
            { icon: <FaUserShield />, title: "Privacy First", desc: "Only you can see your data. We can’t, and won’t." },
            { icon: <FaFileAlt />, title: "Organized Vault", desc: "Tag, search and sort your documents easily." }
          ].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="text-purple-600 text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-fjalla mb-4">Start Securing Your Documents Today</h2>
        <p className="text-gray-700 text-md mb-6">Be among the first to experience secure, private document storage — built with trust at its core.</p>
        <button 
          onClick={() => window.location.href = '/signup'} 
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition cursor-pointer"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
}

export default About;
