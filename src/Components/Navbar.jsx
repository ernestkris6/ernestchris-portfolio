import React, { useState } from 'react';
import chris from '../assets/chris.png';
import Button from '../Common/Button';
import cross from '../assets/menu_close.svg';
import bar from '../assets/menu_open.svg'
import logo from '../assets/chris.png'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  function handleClick(){
      setIsOpen((is) => !is)
  }


  return (
    <nav className='flex justify-between items-center py-6 mb-5 mx-2 sm:mx-[10%]'>
        <div>
            <img className='w-32 h-12 md:w-44 cursor-pointer' src={chris} alt="kris img" />
        </div>
            <ul className='hidden lg:flex flex justify-around gap-8 cursor-pointer'>
                <a href="/" className='text-white hover:text-purple-500'>HOME</a>
                <a href="#about" className='text-white hover:text-purple-500'>ABOUT ME</a>
                <a href="#services" className='text-white hover:text-purple-500'>SERVICES</a>
                <a href="#works" className='text-white hover:text-purple-500'>PORTFOLIO</a>
                <a href="#connect" className='text-white hover:text-purple-500'>CONTACT</a>
            </ul>
    
        {/* <Button href="#connect" className='hidden lg:flex items-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 py-3 px-12 rounded-full text-white  cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-500' >CONNECT</Button> */}

        <a href="#connect" className='hidden lg:flex items-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 py-3 px-12 rounded-full text-white  cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-500'>CONNECT</a>
      
        <div className='absolute cursor-pointer right-[18px] top-[28px] bottom-0 lg:hidden'>
          <img className='w-7' src={bar} onClick={handleClick} alt="" />
        </div>
       

        {/* Mobile menu */}
        <div className={`${isOpen ? 'fixed w-full' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center cursor-pointer justify-between py-4'>
              <img className='w-32 ml-4' src={logo} alt="" />
              <img className='mr-4 w-6' src={cross} onClick={handleClick} alt="" />
            </div>
              <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                <a className='hover:bg-purple-500 cursor-pointer px-4 py-2 rounded inline-block' onClick={handleClick} to='/'><p className='px-2 rounded inline-block'>HOME</p></a>
                <a href='#about'  onClick={handleClick} to='doctors'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>ABOUT ME</p></a>
                <a href='#services' onClick={handleClick} to='about'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>SERVICES</p></a>
                <a href='#works' onClick={handleClick} to='contact'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>PORTFOLIO</p></a>
                <a href='#connect' onClick={handleClick} to='login'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>CONTACT</p></a>
                <a href='#connect' onClick={handleClick} to='login'><p className='hover:bg-purple-500 px-4 py-2 rounded inline-block'>CONNECT</p></a>
              </ul>
        </div>
    </nav>
   
  )
}




