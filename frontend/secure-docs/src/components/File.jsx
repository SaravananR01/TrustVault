import React from 'react';
import { FaFileDownload, FaShareAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import api from '../services/api';
import axios from 'axios';

function File(props) {
    async function handleDownload(){
        try{
            window.open(props.file.fileURL, '_blank');
            console.log(props.file.fileURL);
        }catch(error){
            console.log(error);
        }
    }

    function handleShare(){

    }

    async function handleDelete(){
        try{
          const s3_filename=props.file.fileURL.slice(52);
          const response = await api.delete('/delete',{
            params: { key: s3_filename},
            headers: { Authorization: `Bearer ${token}` },
          });

        if (response.status===200){
            alert("File Deleted Successfully");
        }else{
            alert("File Deletion Failed");
        }
    }catch(error){

    }
    }

  return (
    <div className='w-48 h-52 rounded-xl bg-[#f3f0ff] hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden'>
      
      <div className='flex-1 p-4 flex items-center justify-center text-gray-700 font-medium text-center'>
        <p>{props.file.filename}</p>
      </div>

      <div className='flex justify-around items-center border-t border-gray-300 bg-white py-2'>
        <button
          className='hover:bg-[#e3dcff] p-2 rounded transition hover:cursor-pointer'
          title="Download"
          onClick={handleDownload}
        >
          <FaFileDownload size={18} />
        </button>

        <button
          className='hover:bg-[#e3dcff] p-2 rounded transition hover:cursor-pointer'
          title="Share"
          onClick={handleShare}
        >
          <FaShareAlt size={18} />
        </button>

        <button
          className='hover:bg-[#e3dcff] p-2 rounded transition text-red-600 hover:cursor-pointer'
          title="Delete"
          onClick={handleDelete}
        >
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
}

export default File;
