// import servicesData from '../data'
import Button from '../Common/Button'
import mywork_data from '../works'



export default function MyLatestWork() {
  return (
    <div id='works' className='mx-[1px] md:mx-[10%]'>     
        <div className='text-center py-8'>
            <h1 className='font-semibold pt-12 text-white text-3xl md:text-5xl'>My latest work</h1> 
        </div>  
        <div className='flex flex-col md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] mx-6 gap-4 pt-5 sm:px-0'>
            {mywork_data.map((item, index)=> (
                <div className='overflow-hidden px-8 cursor-pointer hover:translate-y-[-10px] transition-all duration-500 text-white' key={index}>
                    {/* <p className='font-bold text-xl'>0{item.no}</p> */}
                    <a href={item.url} target='_blank'>
                        <img className='font-bold w-[520px] text-xl' src={item.img} alt=''/>
                    </a>                   
                </div>
            ))}
        </div>
        
        <div className='text-center pb-8'>
            <a href="https://www.github.com/ernestkris6"
               target='_blank'
            >
                    <Button className='border rounded-full mt-8 px-8 py-3 text-white items-center justify-center hover:bg-white/40 hover:transition-all duration-500 hover:scale-105'>Show More</Button>
             </a>      

                      
        </div>

    </div>
        
    
  )
}
