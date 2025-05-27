import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };


  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
    } else {
      console.log('Form Submitted:', formData);
      const response= await api.post('/signup',formData);

      console.log('User created: ',JSON.stringify(response));

      if (response.status===200){
        //figure it out later
        navigate('/login');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0ff]">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-fjalla text-center text-purple-700 mb-6">Create Account <CgProfile className='inline-block text-purple-700'/></h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-fjalla text-xl hover:bg-purple-700 transition shadow-md hover:cursor-pointer"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
