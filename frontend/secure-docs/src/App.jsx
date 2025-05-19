import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import About from './components/About.jsx'
import HowToUse from './components/HowToUse.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/howtouse" element={<HowToUse/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
