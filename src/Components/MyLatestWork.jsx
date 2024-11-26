import React from 'react'
// import servicesData from '../data'
import Button from '../Common/Button'
import mywork_data from '../works'

export default function MyLatestWork() {
  return (
    <div id='works' className='bg-[#121212] mx-[1px] md:mx-[10%]'>     
        <div className='text-center py-8'>
            <h1 className='font-semibold text-white text-3xl md:text-5xl'>My latest work</h1> 
        </div>  
        <div className='flex flex-col md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] mx-6 gap-4 pt-5 sm:px-0'>
            {mywork_data.map((item, index)=> (
                <div className='border border-blue-200 rounded-md overflow-hidden px-8 py-10 cursor-pointer hover:translate-y-[-10px] transition-all duration-500 text-white hover:bg-gradient-to-b from-red-500 via-orange-500 to-purple-500' key={index}>
                    <p className='font-bold text-xl'>0{item.no}</p>
                    <img className='font-bold text-xl' src={item.img} alt=''/>
                    {/* <p className='mt-4'>{item.body}</p>
                    <p className='mt-4 py-2 rounded-full md:w-1/2'>{item.btn}</p> */}
                </div>
            ))}
        </div>
        <div className='text-center pb-8'>
            <Button className='border rounded-full mt-8 px-8 py-3 text-white items-center justify-center hover:bg-white/40 hover:transition-all duration-500 hover:scale-105'>Show More</Button>
        </div>
    </div>
        
    
  )
}
