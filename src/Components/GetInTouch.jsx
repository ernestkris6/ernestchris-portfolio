import React, { useState } from 'react'
import Button from '../Common/Button'
import icon1 from '../assets/call_icon.svg';
import icon2 from '../assets/mail_icon.svg';
import icon3 from '../assets/location_icon.svg';

export default function GetInTouch() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")



  return (
    <div id='connect' className='pb-8 mt-[-4px] mx-[1px] md:mx-[10%]'>
        <div className='text-center mb-8'>
            <h1 className='text-white font-medium text-3xl md:text-5xl'>Get in touch</h1>
        </div>

        <div className='flex flex-col mx-6 md:flex-row md:gap-8'>          
            <div className='text-white w-full md:w-1/2'>
                <h1 className='text-white font-semibold text-3xl  md:text-5xl pb-6'><span>Let's talk...</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati assumenda rerum dicta sunt odit porro nam, velit veniam minus quaerat voluptatibus eaque itaque earum, provident nobis adipisci, placeat impedit harum!</p>

            <div className='text-white w-full md:w-1/2'>
                <div className='flex items-center gap-3 pt-2'>
                    <img className='w-6 my-4' src={icon1} alt="" />
                    <p>(+234) - 8103695088, <br/> (+234) - 7018472054</p>
                </div>
                <div  className='flex items-center gap-3 pt-2'>
                    <img className='w-6 my-4' src={icon2} alt="" />
                    <p>ernestchris6@gmail.com</p>
                </div>
                <div  className='flex items-center gap-3 pt-2'>
                    <img className='w-5 my-4' src={icon3} alt="" />
                    <p>91B, Blue Street, Jakande Estate, Isolo Lagos.</p>
                </div>
            </div>
            </div>


                    {/* form */}
        <div className='w-full md:w-1/2 pb-12'>
                <form action="">
                    <div className='flex flex-col'>
                        <label className='text-white my-2' htmlFor="name">Your Name</label>
                        <input value={name} onChange={(e)=> setName(e.target.value)} className='bg-[#ffffff1a] py-2 px-2 text-white' type="text" required placeholder='Enter your name' />
                    </div>

                <div className='flex flex-col'>
                    <label className='text-white my-2' htmlFor="email">Your Email</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-[#ffffff1a] py-2 px-2 text-white' type="email" required placeholder='Enter your email' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-white my-2' htmlFor="name">Write your messages here</label>
                    <textarea value={body} onChange={(e)=> setBody(e.target.value)} className='bg-[#ffffff1a] overflow-hidden pb-32 px-2 text-white' type="text" placeholder='Enter your message...' />  
                </div>
                    <Button type="submit" className='mt-4 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 px-8 py-3 rounded-full text-white font-medium hover:transition-all duration-500 hover:scale-105'>Submit here</Button>    
                </form>
            </div>
        </div>
    </div>
  )
}
