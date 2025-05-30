import React,{useState,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFileUpload } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import api from '../services/api.js';

function SideBar() {
    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        console.log('User Logged Out! ');
        location.reload();
    }
    const [selectedFileName,setSelectedFileName]=useState('');
    const [selectedFile,setSelectedFile]=useState(null);
    const fileInputRef=useRef(null);

    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        setSelectedFileName(e.target.files[0]?.name||'');
    }

    const handleUpload=async()=>{
        if(!selectedFile){
            alert("Please Select a File");
            return;
        }
        const formData = new FormData();
        formData.append('file',selectedFile);

        try{
            const response=await api.post('/file-upload',formData,{
                headers: {
                    'ContentType':'multipart/form-data',
                }
            });
            console.log('Upload success: ',response.data);
            alert("File Uploaded successfully");
        }catch(error){
            console.log("Upload Failed");
            alert("File Upload Failed");

        }
    }


  return (
    <div className='flex-col w-sm p-4 text-xl bg-[#f3f0ff] min-h-[90vh] pt-6'>
        <div className='mb-4'>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden'
          name='file'
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className='bg-white px-4 py-3 rounded-full shadow-md text-purple-700 border-2 border-purple-500 hover:bg-purple-100 transition font-semibold w-full text-left hover:cursor-pointer'
        >
          📁 {selectedFileName || 'Choose a file'}
        </button>
      </div>

      <div
        className='p-4 rounded-full shadow-lg hover:shadow-xl bg-purple-600 text-white text-center text-2xl cursor-pointer transition duration-300 font-fjalla mb-6'
        onClick={handleUpload}
      >
        <FaFileUpload className='inline-block mr-2' />
        Upload File
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

        <div className='mt-47 hover:shadow-xl p-4 rounded-2xl bg-purple-500 hover:bg-purple-400 transition duration-300' onClick={logout}>
            <Link to="/">
                <p className='align-middle'><IoLogOut className='inline-block'/>Logout</p>
            </Link>
        </div>
      
    </div>
  )
}

export default SideBar
