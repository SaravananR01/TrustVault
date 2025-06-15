import React from 'react';
import { FaUserPlus, FaSignInAlt, FaUpload, FaDownload, FaTrashAlt, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    description: "Sign up to create your secure digital vault. It's quick and completely free.",
  },
  {
    icon: <FaSignInAlt />,
    title: "Login to Your Vault",
    description: "Use your credentials to access your encrypted vault from anywhere.",
  },
  {
    icon: <FaUpload />,
    title: "Upload Your Files",
    description: "Upload any document type. Every file is securely encrypted and stored in your private vault.",
  },
  {
    icon: (
      <div className="flex gap-4">
        <FaDownload />
        <FaTrashAlt />
        <FaShareAlt />
      </div>
    ),
    title: "Manage Your Files",
    description: "Download, delete, or securely share your documents — all with complete peace of mind.",
  },
];

function HowToUse() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f3f0ff] min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-fjalla text-purple-700 mb-4"
        >
          How to Use TrustVault
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg mb-10"
        >
          A secure journey in just a few simple steps.
        </motion.p>

        {/* Timeline Steps */}
        <div className="relative border-l-2 border-purple-300 ml-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute -left-6 top-1 text-purple-700 text-3xl bg-white rounded-full p-2 shadow-md">
                {step.icon}
              </div>
              <h2 className="text-xl font-fjalla text-purple-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12"
        >
          <button
            onClick={() => navigate('/signup')}
            className="bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-fjalla hover:bg-purple-800 shadow-md transition cursor-pointer"
          >
            Start Securing Your Documents →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default HowToUse;
