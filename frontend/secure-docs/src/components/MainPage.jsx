import React, { useEffect,useState } from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import File from './File'
import api from '../services/api'


function MainPage() {
  const [files,setFiles] =useState([]);
  const token = localStorage.getItem('token');
  useEffect(()=>{
    getFiles();
  },[]);
  async function getFiles(){
    try{
      const response = await api.get('/get-files',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });

      if (response.status===200){
        setFiles(response.data);
      }
    }catch(error){
      console.error('error' ,error);
    }
  }

  return (
    <div className='flex'>
      {/*<TopBar /> */}
      <SideBar />
      <div className='bg-purple-200 w-full p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {files.map((file, index) => (
            <File key={index} file={file} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
