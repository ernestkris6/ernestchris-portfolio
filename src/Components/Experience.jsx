import React from 'react'

export default function Experience() {
  return (
    <div id='experience' className='w-full flex flex-col md:flex-row bg-[#121212] gap-2 items-center mb-[-4px] justify-center text-center pt-12 pb-8 mt-[-2px] sm:space-x-[-8px]'>
        <div className='md:border-r pr-8 text-white'>
            <p className='text-xl md:text-3xl font-semibold mb-4'><span>03+</span></p>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className='md:border-r md:pl-8 pr-8 text-white'>
            <p className='text-xl md:text-3xl font-semibold mb-4'><span>20+</span></p>
            <p>PROJECTS COMPLETED</p>
        </div>
        <div className='md:pl-8 pr-8 text-white'>
            <p className='text-xl md:text-3xl font-semibold mb-4'><span>10+</span></p>
            <p>HAPPY CLIENTS</p>
        </div>
        
    </div>
  )
}



