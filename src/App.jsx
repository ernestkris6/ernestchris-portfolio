import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Buttons from './Components/Buttons'

export default function App() {
  return (
    <div className='bg-[#121212] h-screen'>
        <Navbar />
        <HeroSection />
        <Buttons />
    </div>
  )
}
