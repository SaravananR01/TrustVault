import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

function File() {
  return (
    <div className='h-[200px] w-[200px] rounded-xl hover:shadow-2xl flex-col bg-[#f3f0ff]'>
        <div className='h-[10.5rem]'>
            <p>text</p>
        </div>
        <div className='flex justify-evenly border-t-2 border-black'>
            <button className='h-fit w-[33%] hover:bg-[#e3dcff]'>
                <FaFileDownload className='inline-block'/> 
            </button>
            <button>
                <FaShareAlt className='inline-block'/>
            </button>
            <button>
                <MdDelete className='inline-block'/>
            </button>
        </div>
      
    </div>
  )
}

export default File
