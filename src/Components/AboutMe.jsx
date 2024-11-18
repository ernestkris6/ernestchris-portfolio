import React from 'react';
import profile from '../assets/profile_pic.png';
import theme from '../assets/theme.svg;';



export default function AboutMe() {
  return (
    <div className='bg-[#121212] text-white mt-[-2px] pt-8'>
        <h1 className='text-center font-medium text-3xl md:text-5xl'>About Me</h1>
        <img src={theme} alt="" />

       <div className='flex justify-center pt-6 gap-4 pb-4'>
            <img className='hidden md:flex rounded-lg' src={profile} alt="" />
            <div className='w-full md:w-2/4 ml-2 mr-2'>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Mollitia repudiandae iusto quia 
                earum doloremque quos, veritatis atque! Qui cupiditate 
                fuga modi. Explicabo 
                cum enim ipsam tenetur 
                distinctio debitis saepe incidunt?</p> 
                <div className=''>
                  <p>HTML & CSS <hr className='w-[90%]' /></p>
                  
                </div>
                <div>
                  <p>React JS <hr className='w-[85%]'/></p>
                  
                </div>

                <div>
                  <p>Javascript</p>
                  <hr className='w-[80%]'/>
                </div>

                <div>
                  <p>Next JS</p>
                  <hr className='w-[60%]'/>
                </div>
                <div>
                  <p>Wordpress</p>
                  <hr className='w-[84%]'/>
                </div>          

            </div>
        </div>
    </div>
  )
}
