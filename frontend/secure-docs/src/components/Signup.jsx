import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { motion } from 'framer-motion';
import api from '../services/api';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
    } else {
      try {
        const response = await api.post('/signup', formData);
        if (response.status === 200) {
          navigate('/login');
        }
      } catch (err) {
        setError('Error creating account. Please try again.');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-[#f3f0ff] to-purple-200 px-4 overflow-hidden">

      {/* Abstract Background Shapes */}
      <div className="absolute w-[600px] h-[600px] bg-purple-300 opacity-30 rounded-full top-[-200px] left-[-150px] blur-3xl z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-400 opacity-20 rounded-full bottom-[-200px] right-[-150px] blur-3xl z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md z-10"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl font-fjalla text-center text-purple-700 mb-6"
        >
          Create Account <CgProfile className='inline-block text-purple-700 ml-1' />
        </motion.h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block mb-1 text-purple-700 font-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="block mb-1 text-purple-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block mb-1 text-purple-700 font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="w-full p-3 pr-12 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
                placeholder="Enter a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-4 top-3 text-purple-600 cursor-pointer mt-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <label className="block mb-1 text-purple-700 font-semibold">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                className="w-full p-3 pr-12 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-4 top-3 text-purple-600 cursor-pointer mt-1"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <IoEyeSharp />}
              </span>
            </div>
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ delay: 0.5 }}
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-fjalla text-xl hover:bg-purple-700 transition shadow-md hover:cursor-pointer"
          >
            Submit
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm mt-6"
        >
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline font-semibold">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Signup;
