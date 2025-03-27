import React from 'react';
// import profile from '../assets/profile_pic.png';
import krisnew3 from '../assets/krisnew3.png';
import theme from '../assets/theme.svg'



export default function AboutMe() {
  return (
    <section id='about' className='text-white mt-[-2px] pt-8'>
        <div className=''>
          <h1 className='relative text-center font-medium text-3xl md:text-5xl'>About Me</h1>
          <img className='w-24 z-[-1] my-[-24px] pb-8 mx-auto' src={theme} alt="" />
        </div>
        {/* z-[-1] left-0 bottom-0 top-0 right-0 */}
       <div className='flex justify-center pt-6 gap-4 pb-4'>
            <img className='hidden md:flex rounded-lg' src={krisnew3} alt="" />
            <div className='w-full md:w-2/4 ml-2 mr-2'>
               <p className='text-white md:text-medium lg:text-xl'></p> 
               <p>
                As a frontend developer I am driven by passion to deliver exceptional user experiences that leave a lasting impression. I believe that a good design and development should go hand in hand, and I strive to create solutions that are both aesthetically and technically sound.
                I'm excited to collaborate with like-minded individuals and companies that share my passion for innovative and user-centered designs.
               </p>
{/* 
  I am a software engineer with extensive knowledge in website design and development. Creating robust scalable and responsive user interfaces to meet clients' specification with exceptional 
                  results for web applications.  */}

{/* I develop responsive websites with quality user interface. With codes I bring your imaginations to life. If you can picture it I can capture it!!! */}
                <div className='flex pt-6 gap-[20px] items-center cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>
                  <p className='min-w-[120px] text-medium font-bold'>HTML & CSS </p>
                  <hr className='w-[50%] md:w-[90%] outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500' />
                </div>
                <div className='flex gap-[20px] items-center cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>
                  <p className='min-w-[120px] text-medium font-bold'>React JS</p>
                  <hr className='w-[43%] md:w-[68%] outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>

                <div className='flex gap-[20px] items-center cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>
                  <p className='min-w-[120px] text-medium font-bold'>Javascript</p>
                  <hr className='w-[45%] md:w-[70%] outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>

                <div className='flex gap-[20px] items-center cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>
                  <p className='min-w-[120px] text-medium font-bold'>Next JS</p>
                  <hr className='w-[30%] md:w-[60%] outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>
                <div className='flex gap-[20px] items-center cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>
                  <p className='min-w-[120px] text-medium font-bold cursor-pointer md:hover:translate-x-[30px] transition-all duration-500'>Wordpress</p>
                  <hr className='w-[50%] md:w-[84%] outline-none border-none rounded-lg h-1 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500'/>
                </div>          

            </div>
        </div>
    </section>
  )
}
