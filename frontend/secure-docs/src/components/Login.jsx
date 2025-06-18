import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/login', { email, password }, { withCredentials: true });
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate('/mainpage');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Invalid email or password.");
      } else if (error.response?.status === 404) {
        setError("User not found.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-[#f3f0ff] to-purple-200 px-4 overflow-hidden">

      {/* Abstract Background Elements */}
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
          Login
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block mb-1 text-purple-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className='relative'
          >
            <label className="block mb-1 text-purple-700 font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your password"
              onChange={handleChange}
              value={password}
            />
            <div
              className='absolute right-4 top-10 text-purple-600 cursor-pointer mt-1'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-right text-sm"
          >
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
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
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 hover:underline font-semibold">
            Create Account
          </Link>
        </motion.p>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center mt-2"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default Login;
