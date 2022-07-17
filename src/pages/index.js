import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Youtube from '../Components/Youtube';
import Jjt from '../Components/JJT';
import KilasFooter from './kilasfooter';
import Agenda from '../Components/Card';
import Calender from '../Components/Calender'
import { homeObjOne } from '../Components/About/Data';
import AboutSection from '../Components/About';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    
  
    return (
   <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Youtube />
        <AboutSection {...homeObjOne} />
        <Jjt />
        <Calender />
        <Agenda />
        <KilasFooter />
        
   </>
  )
  
 
}

export default Home