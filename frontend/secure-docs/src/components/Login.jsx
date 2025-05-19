import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0ff]">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-fjalla text-center text-purple-700 mb-6">Login</h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-purple-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-purple-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-fjalla text-xl hover:bg-purple-700 transition shadow-md hover:cursor-pointer"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 hover:underline font-semibold">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
