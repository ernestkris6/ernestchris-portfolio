import React from 'react'
import profile from '../assets/profile_pic.png'
import Button from '../Common/Button'

export default function HeroSection() {
  return (
    <div className='bg-[#121212]'>
        <div className='flex m-auto justify-center items-center py-8'>
            <img className='rounded-full' src={profile} alt="" />
        </div>
           <p className='text-white text-2xl font-bold md:text-3xl text-center'>I am Ernest Christopher, <br /> frontend developer based in Lagos, Nigeria.</p>
            <div className='text-white w-3/4 text-center md:w-2/4 mx-auto py-6'>
                <p className='text-white'>I am a frontend developer based in Nigeria with 3 years experience in frontend web development using react and wordpress.</p>
            </div>
    </div>
  )
}

<p className='hidden md:'>
CONNECT
</p>
