import React, { useState, useRef, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import ProfileHover from './ProfileHover.jsx';
import { Link } from 'react-router-dom';

function TopBar() {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center mt-2 px-8 py-2'>
        <Link to="/">
          <h3 className='text-[30px] font-fjalla'>TrustVault</h3>
        </Link>

        <div className="relative" ref={profileRef}>
          <div
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 flex items-center justify-center shadow-md 
                       hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all duration-300 cursor-pointer"
            onClick={() => setShowProfile(prev => !prev)}
          >
            <CgProfile className="text-white text-3xl" />
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-2 z-50">
              <ProfileHover />
            </div>
          )}
        </div>
      </div>

      <div className="h-[6px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 shadow-md" />
    </div>
  );
}

export default TopBar;
