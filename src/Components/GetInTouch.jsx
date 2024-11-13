import React from 'react'
import Button from '../Common/Button'

export default function GetInTouch() {
  return (
    <div className='bg-[#121212] pb-8'>
        <div className='text-center mb-8'>
            <h1 className='text-white font-medium text-3xl md:text-5xl'>Get in touch</h1>
        </div>

        <div className='flex flex-col mx-6 md:flex-row md:gap-8'>          
            <div className='text-white w-full md:w-1/2'>
                <h1 className='text-white font-semibold text-3xl  md:text-5xl pb-6'>Let's talk...</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati assumenda rerum dicta sunt odit porro nam, velit veniam minus quaerat voluptatibus eaque itaque earum, provident nobis adipisci, placeat impedit harum!</p>

            <div className='text-white w-full md:w-1/2'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            </div>


                    {/* form */}
        <div className='w-full md:w-1/2'>
                <form action="">
                    <div className='flex flex-col'>
                        <label className='text-white my-2' htmlFor="name">Your Name</label>
                        <input className='bg-[#ffffff1a] py-2 px-2 text-white' type="text" required placeholder='Enter your name' />
                    </div>

                <div className='flex flex-col'>
                    <label className='text-white my-2' htmlFor="email">Your Email</label>
                    <input className='bg-[#ffffff1a] py-2 px-2 text-white' type="email" required placeholder='Enter your email' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white my-2' htmlFor="name">Write your messages here</label>
                    <textarea className='bg-[#ffffff1a] pb-32 px-2 text-white' type="text" placeholder='Enter your message...' />  
                </div>
                    <Button className='mt-4 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 px-8 py-3 rounded-full text-white font-medium hover:transition-all duration-500 hover:scale-105'>Submit here</Button>    
                </form>
            </div>
        </div>
    </div>
  )
}
