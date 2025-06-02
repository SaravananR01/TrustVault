import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import File from './File'


function MainPage() {
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
