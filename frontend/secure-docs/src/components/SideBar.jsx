import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFileUpload } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

function SideBar() {
    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        console.log('User Logged Out! ');
        location.reload();
    }

  return (
    <div className='flex-col w-sm p-4 text-xl bg-[#f3f0ff] min-h-[90vh] pt-6'>
        <div className='p-3 rounded-2xl shadow-lg hover:shadow-xl text-2xl mb-2 bg-white hover:cursor-pointer'>
            <h2 className='font-fjalla'><FaFileUpload className='inline-block'/> Upload File</h2>
        </div>

        <div className='mt-6 m-2 p-3 hover:shadow-xl transition duration-300 hover:bg-white rounded-lg'>
            <Link to="/mainpage">
                <p className='align-middle'><FaHome className='inline-block' /> Home</p>
            </Link>
        </div>

        <div className='m-2 p-3 hover:shadow-xl transition duration-300 hover:bg-white rounded-lg'>
            <Link to="/inbox">
                <p className='align-middle'><FaInbox className='inline-block'/> Inbox</p>
            </Link>
        </div>

        <div className='m-2 p-3 hover:shadow-xl transition duration-300 hover:bg-white rounded-lg'>
            <Link to="/trash">
                <p className='align-middle'><FaTrash className='inline-block'/> Trash</p>
            </Link>
        </div>

        <div className='mt-65 hover:shadow-xl p-4 rounded-2xl bg-purple-500 hover:bg-purple-400 transition duration-300' onClick={logout}>
            <Link to="/">
                <p className='align-middle'><IoLogOut className='inline-block'/>Logout</p>
            </Link>
        </div>
      
    </div>
  )
}

export default SideBar
