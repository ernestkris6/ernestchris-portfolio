import React from 'react'
import servicesData from '../data'

export default function MyServices() {
  return (
    <div className='bg-[#121212]'>     
        <div className='text-center py-8 text-4xl'>
            <h1 className='font-semibold text-white'>My Services</h1> 
        </div>  
        <div className='flex flex-col md:grid md:grid-cols-3 mx-6 gap-4 pt-5 sm:px-0'>
            {servicesData.map((item, index)=> (
                <div className='border border-blue-200 rounded-md overflow-hidden px-8 py-10 cursor-pointer hover:translate-y-[-10px] transition-all duration-500 text-white hover:bg-gradient-to-b from-red-500 via-orange-500 to-purple-500' key={index}>
                    <p className='font-bold text-xl'>0{item.id}</p>
                    <h1 className='font-bold text-xl'>{item.header}</h1>
                    <p className='mt-4'>{item.body}</p>
                    <p className='mt-4 px-2 py-2 rounded-full md:w-1/2'>{item.btn}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
