import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'


function MainPage() {
  return (
    <div className='flex'>
        {/* <TopBar/> */}
        <SideBar/>
        <div className='bg-purple-200'>

        </div>
    </div>
  )
}

export default MainPage
