import React from 'react'

export default function Experience() {
  return (
    <div className='flex flex-row bg-[#121212] gap-2 items-center justify-center text-center pt-12 pb-8 mt-[-2px]'>
        <div className='md:border-r pr-8 text-white'>
            <p className='text-xl md:text-3xl mb-4'>3+</p>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className='md:border-r pl-8 pr-8 text-white'>
            <p className='text-xl md:text-3xl mb-4'>20+</p>
            <p>PROJECTS COMPLETED</p>
        </div>
        <div className='pl-8 text-white'>
            <p className='text-xl md:text-3xl mb-4'>10+</p>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
  )
}
