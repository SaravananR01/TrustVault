import React from 'react'
import home_pic1 from '../assets/home_pic1.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const isLoggedIn= localStorage.getItem('token');

  return (
    <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-[#f3f0ff]">
      <div className="flex flex-row items-center justify-center m-5 gap-10">
        <div className="flex flex-col h-full">
          <h1 className="font-fjalla text-[60px]">TrustVault</h1>
          <p className="font-fjalla text-[30px] mt-4 mb-4">
            Your secure digital vault for encrypted document storage and seamless sharing.
          </p>
          {!isLoggedIn ?
          <div className="flex">
            <button onClick={()=>navigate('/login')} className="p-6 bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:shadow-lg font-fjalla text-2xl transition duration-300 w-fit mr-4 border-2 border-purple-600 hover:cursor-pointer">
              Login
            </button>
            <button onClick={()=>navigate('/signup')} className="p-6 bg-transparent text-purple-700 border-2 border-purple-700 rounded-full hover:bg-purple-100 hover:text-purple-900 hover:shadow-md font-fjalla text-2xl transition duration-300 w-fit hover:cursor-pointer">
              Sign Up
            </button>
          </div>
          :
          <div className='flex'>
            <button onClick={()=>navigate('/mainpage')}className='p-6 bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:shadow-lg font-fjalla text-2xl transition duration-300 w-fit mr-4 border-2 border-purple-600 hover:cursor-pointer'>You are already Logged In! <p>Click to enter your Vault!</p></button>
          </div>
          }

          
        </div>

        <div>
          <img
            src={home_pic1}
            alt="picture about securing documents"
            className="h-[60vh] rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}


export default LandingPage
