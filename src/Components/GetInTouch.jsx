import React from 'react'
import Button from '../Common/Button'

export default function GetInTouch() {
  return (
    <div className='bg-[#121212] pb-8'>
        <div className='text-center'>
            <h1 className='text-white font-bold text-2xl md:text-4xl'>Get in touch</h1>
        </div>

        <div className='flex flex-col md:flex-row'>        
        <div>
            <h1 className='text-white'>Let's talk</h1>
        </div>
        <div className='text-white'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati assumenda rerum dicta sunt odit porro nam, velit veniam minus quaerat voluptatibus eaque itaque earum, provident nobis adipisci, placeat impedit harum!</p>
        </div>


                    {/* form */}
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" required placeholder='Enter your name' />
                </div>

                <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" required placeholder='Enter your email' />

                </div>
                <div>
                <label htmlFor="name">Write your messages here</label>
                <textarea type="text" placeholder='Enter your message...' />  
                </div>

                <Button className='bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 px-8 py-3 rounded-full text-white font-medium'>Submit here</Button>
            </form>
        </div>
        </div>
    </div>
  )
}
