//https://web.facebook.com/?_rdc=1&_rdr#
import Button from '../Common/Button';

export default function Buttons() {
  return (
    <div className='pb-8'>
        <div className='grid md:flex gap-6 justify-center py-2'>
          <a href="https://web.facebook.com/ernest.chris.503"
             target='_blank'
          >
            <Button className='flex items-center bg-gradient-to-r from-red-500 via-orange-500 to-purple-500 py-3 px-12 rounded-full text-white  cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-500'>Connect with me</Button>
          </a>
            
            <a href="https://drive.google.com/file/d/1S9yv_fn_v0PZ5WtsxQ1uqg_-vQFOGsIu/view?usp=drivesdk"
               target='_blank'
            >
               <Button className='border rounded-full py-3 text-white px-12 hover:bg-white/40 hover:scale-105 w-full transition-all duration-500'>My resume</Button>
            </a>
            </div>
    </div>
  )
}
