import React from 'react';
import Button from '../Common/Button';

export default function Buttons() {
  return (
    <div className='bg-[#121212] pb-8'>
        <div className='grid md:flex gap-6 justify-center py-2'>
            <Button className='flex items-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 py-3 px-12 rounded-full text-white  cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-500'>Connect with me</Button>
            
            <Button className='border rounded-full px-12 py-3 text-white hover:bg-white/40 hover:scale-105 transition-all duration-500'>My resume</Button>
            </div>
    </div>
  )
}
