import React from 'react';
import profile from '../assets/profile_pic.png';
import theme from '../assets/theme.svg'



export default function AboutMe() {
  return (
    <div id='about' className='bg-[#121212] text-white mt-[-2px] pt-8'>
        <h1 className='text-center font-medium text-3xl md:text-5xl'>About Me</h1>
        <img className='z-[-1] left-0 bottom-0 top-0 right-0' src={theme} alt="" />

       <div className='flex justify-center pt-6 gap-4 pb-4'>
            <img className='hidden md:flex rounded-lg' src={profile} alt="" />
            <div className='w-full md:w-2/4 ml-2 mr-2'>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Mollitia repudiandae iusto quia 
                earum doloremque quos, veritatis atque! Qui cupiditate 
                fuga modi. Explicabo 
                cum enim ipsam tenetur 
                distinctio debitis saepe incidunt?</p> 

                <div className='flex pt-12 gap-[20px] items-center'>
                  <p className='min-w-[150px] text-medium font-bold'>HTML & CSS </p>
                  <hr className='w-[90%] cursor-pointer hover:translate-x-[30px] transition-all duration-500 outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500' />
                </div>
                <div className='flex gap-[20px] items-center'>
                  <p className='min-w-[150px] text-medium font-bold'>React JS</p>
                  <hr className='w-[80%] cursor-pointer hover:translate-x-[30px] transition-all duration-500 outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>

                <div className='flex gap-[20px] items-center'>
                  <p className='min-w-[150px] text-medium font-bold'>Javascript</p>
                  <hr className='w-[70%] cursor-pointer hover:translate-x-[30px] transition-all duration-500 outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>

                <div className='flex gap-[20px] items-center'>
                  <p className='min-w-[150px] text-medium font-bold'>Next JS</p>
                  <hr className='w-[60%] cursor-pointer hover:translate-x-[30px] transition-all duration-500 outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>
                <div className='flex gap-[20px] items-center'>
                  <p className='min-w-[150px] text-medium font-bold'>Wordpress</p>
                  <hr className='w-[84%] cursor-pointer hover:translate-x-[30px] transition-all duration-500 outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>          

            </div>
        </div>
    </div>
  )
}
