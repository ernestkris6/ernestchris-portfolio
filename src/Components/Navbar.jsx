import React from 'react';
import chris from '../assets/chris.png';
import Button from '../Common/Button';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-6 mb-5 mx-2 sm:mx-[10%]'>
        <div>
            <img className='w-32 h-12 md:w-44 cursor-pointer' src={chris} alt="kris img" />
        </div>

            <ul className='hidden md:flex flex justify-around gap-8 cursor-pointer'>
                <li className='text-white hover:text-purple-500'>HOME</li>
                <li className='text-white hover:text-purple-500'>ABOUT ME</li>
                <li className='text-white hover:text-purple-500'>SERVICES</li>
                <li className='text-white hover:text-purple-500'>PORTFOLIO</li>
                <li className='text-white hover:text-purple-500'>CONTACT</li>
            </ul>
    
        <Button className='hidden md:flex items-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 py-3 px-12 rounded-full text-white  cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-500' >CONNECT</Button>

    </div>
  )
}

