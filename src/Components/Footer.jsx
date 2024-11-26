import React from 'react'
import logo from '../assets/chris.png'
import Button from '../Common/Button';

export default function Footer() {
  return (
    <div className='mt-[-4px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col mb-6'>
        <img className='h-12 w-32 mt-2 ml-6 mb-2' src={logo} alt="" />
         <p className='mx-6 text-white'>Lorem ipsum dolor, sit <br/> amet consectetur adipisicing elit. Quam esse vitae rem,</p>

        </div>
     
        <div className='mx-6'>
          <form>
            <input className='bg-[#ffffff1a] py-2 px-4 rounded-full' type="text" placeholder='Enter your name'/>
            <Button className='mt-4 ml-2 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 px-8 py-2 rounded-full mb-8 text-white font-medium hover:transition-all duration-500 hover:scale-105'>Subscribe</Button>
          </form>
        </div>
      
      </div>
        <hr className='h-4 mt-[-16px] mx-6' />

        <div className='flex flex-row text-white mx-6 pb-8 justify-between'>
          <p>&copy; 2024 Ernest Chris. All rights reserved.</p>
          <div className='flex flex-row gap-3'>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
          </div>
            <p className='bg-purple-700 rounded px-2 cursor-pointer' onClick={()=> scrollTo(0,0)}>Back to top</p>
        </div>
        <div>
        
        </div>
    </div>
  )
}