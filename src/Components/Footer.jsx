import logo from '../assets/chris.png'
import Button from '../Common/Button';

export default function Footer() {
  return (
    <div className='mx-[1px] md:mx-[10%]'>
      <div className='flex justify-between'>
        <div className='flex flex-col mb-6'>
        <img className='h-12 w-24 md:w-32 mt-2 ml-6 mb-2' src={logo} alt="" />
         <p className='mx-6 text-white'>Building solutions, one line at a time, <br/>making your vision my code.</p>

          <div className='px-6'>
            <form className=''>
              <input className='bg-[#ffffff1a] mt-2 text-white py-2 px-2 rounded-full' type="text" placeholder='Enter your name'/>
              <Button className='mt-4 ml-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 px-8 py-2 rounded-full mb-8 text-white font-medium hover:transition-all duration-500 hover:scale-105'>Subscribe</Button>
            </form>
          </div>
        </div>
     
        
      
      </div>
        <hr className='h-4 mt-[-16px] mx-6' />

        <div className='flex flex-row text-white md:flex-row mx-6 pb-8 justify-between'>
          <p>&copy; 2025 Ernest Chris.</p>
          <div className='hidden md:flex md:flex-row gap-4'>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
          </div>
            <p className='bg-purple-700 rounded px-1 cursor-pointer' onClick={()=> scrollTo(0,0)}>Go up</p>
        </div>
    </div>
  )
}