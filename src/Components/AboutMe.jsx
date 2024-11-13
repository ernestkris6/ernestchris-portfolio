import React from 'react';
import profile from '../assets/profile_pic.png';

export default function AboutMe() {
  return (
    <div className='bg-[#121212] text-white pt-8'>
        <h1 className='text-center font-medium text-2xl md:text-5xl'>About Me</h1>
       <div className='flex justify-center pt-6 gap-4 pb-4'>
            <img className='hidden md:flex rounded-lg' src={profile} alt="" />
            <div className='w-full md:w-2/4 ml-2 mr-2'>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Mollitia repudiandae iusto quia 
                earum doloremque quos, veritatis atque! Qui cupiditate 
                fuga modi. Explicabo 
                cum enim ipsam tenetur 
                distinctio debitis saepe incidunt?</p> 
            </div>
        </div>
    </div>
  )
}
