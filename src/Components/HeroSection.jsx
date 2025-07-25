import React from 'react'
// import profile from '../assets/profile_pic.png'
// import krispix2 from '../assets/chrispix2.jpg'
// import Button from '../Common/Button'
// import chrispix1 from '../assets/chrispix1.jpg'
import chrispix3 from '../assets/chrispix3.jpg'

export default function HeroSection() {
  return (
    <section id='/' className='hero'>
        <div className='flex m-auto justify-center items-center py-8'>
            <img className='rounded-xl w-72' src={chrispix3} alt="" />
        </div>
           <p className='text-white text-2xl font-bold md:text-3xl text-center'><span>Hi, I'm Ernest Christopher,</span> <br /> frontend developer based in Lagos, Nigeria.</p>
            <div className='text-white w-3/4 text-center md:w-2/4 mx-auto py-6'>
                <p className='text-white'>I love to work with codes to bring UI/UX Designs to life, ensuring a robust, fascinating and scalable UI - this results in an overwhelming User eXperience for potential clients. </p>
            </div>
    </section>
  )
}


// I am a frontend developer based in Nigeria with 3 years experience in frontend web development using react and wordpress.

