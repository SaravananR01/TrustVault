import React from 'react'
import { CgProfile } from "react-icons/cg";
import ProfileHover from './ProfileHover';

function TopBar() {
  return (
    <div className='flex justify-end bg-[#f3f0ff] border-b-purple-500 border-b-2'>
      <div className="m-3 hover:cursor-pointer" onClick={<ProfileHover/>}>
        <CgProfile className='rounded-4xl text-4xl text-purple-500' />
      </div>
    </div>
  )
}

export default TopBar
