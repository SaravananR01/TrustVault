import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileUpload } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function SideBar() {
  return (
    <div className='flex-col w-sm p-4 text-lg bg-[#f3f0ff] min-h-[100vh]'>
        <div className='p-3 rounded-2xl shadow-lg hover:shadow-xl text-xl mb-2 hover:cursor-pointer'>
            <h2 className='font-fjalla'><FaFileUpload className='inline-block'/> Upload File</h2>
        </div>

        <div className='m-2 hover:shadow-xl'>
            <Link to="/mainpage">
                <p className='align-middle'><FaHome className='inline-block' /> Home</p>
            </Link>
        </div>

        <div className='m-2 hover:shadow-xl'>
            <Link to="/inbox">
                <p className='align-middle'><FaInbox className='inline-block'/> Inbox</p>
            </Link>
        </div>

        <div className='m-2 hover:shadow-xl'>
            <Link to="/trash">
                <p className='align-middle'><FaTrash className='inline-block'/> Trash</p>
            </Link>
        </div>
      
    </div>
  )
}

export default SideBar
