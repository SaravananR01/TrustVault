import React, { useEffect } from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import File from './File'
import api from '../services/api'


function MainPage() {
  useEffect(()=>{
    getFiles();
  },[]);
  async function getFiles(){
    try{
      const response = await api.get('/get-files',{withCredentials:true});

      if (response.status===200){

      }
    }catch(error){

    }
  }

  return (
    <div className='flex'>
        {/* <TopBar/> */}
        <SideBar/>
        <div className='bg-purple-200 w-full p-2'>
          <File />
        </div>
    </div>
  )
}

export default MainPage
