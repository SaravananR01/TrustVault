import React from 'react'
import { CgProfile } from "react-icons/cg";
import ProfileHover from './ProfileHover.jsx';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div>
      <div className='flex justify-evenly mt-2'>
        <div className='mr-115 p-2'>
          <Link to="/">
              <h3 className='text-[30px] font-fjalla'>TrustVault</h3>
          </Link>
        </div>
        <div className="relative group ml-115">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center shadow-md 
                          hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all duration-300 cursor-pointer">
            <CgProfile className="text-white text-3xl" />
          </div>

          <div className="absolute right-0 mt-2 hidden group-hover:block">
            <ProfileHover />
          </div>
        </div>
      </div>
      <div className="h-[6px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 shadow-md" />
    </div>
    
  )
}

export default TopBar
