import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Buttons from './Components/Buttons'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import MyServices from './Components/MyServices'

export default function App() {
  return (
    <div className='bg-[#121212] h-screen'>
        <Navbar />
        <HeroSection />
        <Buttons />
        <AboutMe />
        <Experience />
        <MyServices />
    </div>
  )
}
