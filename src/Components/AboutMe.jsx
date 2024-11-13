import React from 'react';
import profile from '../assets/profile_pic.png';

export default function AboutMe() {
  return (
    <div className='bg-[#121212] text-white mt-[-2px] pt-8'>
        <h1 className='text-center font-medium text-3xl md:text-5xl'>About Me</h1>
       <div className='flex justify-center pt-6 gap-4 pb-4'>
            <img className='hidden md:flex rounded-lg' src={profile} alt="" />
            <div className='w-full md:w-2/4 ml-2 mr-2'>
               <p className='text-white'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Mollitia repudiandae iusto quia 
                earum doloremque quos, veritatis atque! Qui cupiditate 
                fuga modi. Explicabo 
                cum enim ipsam tenetur 
                distinctio debitis saepe incidunt?</p> 
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Vero, aspernatur expedita delectus beatae nobis tempore 
                  aliquid omnis voluptatem repellat reprehenderit distinctio commodi aut incidunt harum, 
                  repudiandae ipsam quam assumenda exercitationem?
                </p>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit omnis laborum architecto nulla dignissimos 
                  assumenda minus iusto, rem veniam repellat explicabo repudiandae quis vero 
                  praesentium, odio accusamus, quae perspiciatis.</p>
            </div>
        </div>
    </div>
  )
}
