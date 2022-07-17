import React from 'react'
import "../HeroSection/HeroSection.css"
import maskot from "../../images/mascot.png"
import logo2 from "../../images/logo_2.png"
import { FaAngleDown } from 'react-icons/fa';


function HeroSection() {
  return (
    
    <div className="Bg1" id='home'>
      <div class="max-width">
      
      <div className='sizing'>

      
      <div className="mascot">
        <img src={maskot} />
      </div>
      

      
      <div className="logo2">
        <img src={logo2} />
      </div>
      

      
        <div className="brand">
        PPSMB KESATRIA 2022
        </div>
        <div className="brand1">
        PPSMB KESATRIA 2022
        </div>
      

      
      
        <div className="scroll">
          Scroll Down
        </div>

      <div className= "top-to-btm">
      <a href="#youtube">
      <FaAngleDown className="icon-position icon-style">
      </FaAngleDown>
      </a>
      </div>        
      </div>
      </div>
    </div>
    
    
  )
}

export default HeroSection