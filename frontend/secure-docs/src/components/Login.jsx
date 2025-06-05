import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState("");

  function handleChange(event){
    const {name,value}=event.target;

    switch(name){
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const navigate = useNavigate();

  async function handleSubmit(event){
    event.preventDefault();
    try {
      const response= await api.post('/login', { email, password },{withCredentials:true});

      if (response.status === 200) {
        const {token} = response.data;
        localStorage.setItem("token",token);
        navigate('/mainpage');
        
      }
    } catch (error) {
      if (error.response && error.response.status===401) {
        setError("Invalid email or password.");
      } else if (error.response && error.response.status === 404) {
        setError("User not found.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0ff]">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-fjalla text-center text-purple-700 mb-6">Login</h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-purple-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className='relative'>
            <label className="block mb-1 text-purple-700 font-semibold">Password</label>
            <input
              type= {showPassword ? "text":"password"}
              name="password"
              className="w-full p-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-600 transition"
              placeholder="Enter your password"
              onChange={handleChange}
              value={password}
            />
            <div className='absolute right-4 top-10 text-purple-600 cursor-pointer mt-1' onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
            </div>
          </div>

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-fjalla text-xl hover:bg-purple-700 transition shadow-md hover:cursor-pointer"
            onClick={handleSubmit}
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

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
