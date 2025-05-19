import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className='flex justify-center mt-2'>
        <div className='mr-115 p-2'>
            <Link to="/">
                <h3 className='text-[30px] font-fjalla'>TrustVault</h3>
            </Link>
        </div>

        <div className='ml-96 mr-1 p-2'>
            <Link to="about">
                <p className='text-lg mt-4 font-fjalla'>About</p>
            </Link>
        </div>

        <div className='mr-1 p-2'>
            <Link to="/howtouse">
                <p className='text-lg mt-4 font-fjalla'>How to Use</p>
            </Link>
        </div>

        <div className='mr-1 p-2 ml-4'>
            <button className='p-4 bg-purple-400 rounded-lg hover:cursor-pointer font-fjalla hover:bg-purple-300 text-lg transition duration-300'>Get Started</button>
        </div>
      </div>
      <div className="h-[6px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 shadow-md" />
    </div>
  )
}

export default Navbar
