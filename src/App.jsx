import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Buttons from './Components/Buttons'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import MyServices from './Components/MyServices'
import MyLatestWork from './Components/MyLatestWork'
import GetInTouch from './Components/GetInTouch'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div className='bg-[#121212] h-screen'>        
        <Navbar />
        <HeroSection />
        <Buttons />
        <AboutMe />
        <Experience />
        <MyServices />
        <MyLatestWork />
        <GetInTouch />
        <Footer />
    </div>
  )
}
