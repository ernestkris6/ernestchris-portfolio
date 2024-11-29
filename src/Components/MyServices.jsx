import React from 'react'
import servicesData from '../data'
import arrowicon from '../assets/arrow.svg'

export default function MyServices() {
    
  return (
    <div id='services' className='mx-[1px] md:mx-[10%]'>     
        <div className='text-center py-8 text-3xl md:text-5xl'>
            <h1 className='font-semibold text-white pt-12'>My Services</h1> 
        </div>  
        <div className='flex flex-col md:grid md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] mx-6 gap-4 pt-5 sm:px-0'>
            {servicesData.map((item, index)=> (
                <div 
                key={index} 
                className='services border rounded-md overflow-hidden px-4 py-6 cursor-pointer transition-all duration-500 text-white'>
                    <p className='font-bold text-xl'>0{item.id}</p>
                    <h1 className='font-bold text-xl'><span>{item.header}</span></h1>
                    <p className='mt-4 max-w-[300px]'>{item.body}</p>
                    <p className='flex mt-4 py-2 gap-2 rounded-full items-center md:w-1/2'>{item.btn}<span><img className='w-4' src={arrowicon} alt="" /></span></p>
                </div>
            ))}
        </div>
    </div>
  )
}
