import React from 'react'
import "../Kilasbalik/kilasbalik.css"
import awan5 from "../../images/awan6.png"
import logo10 from"../../images/logo_10.png"
import logo11 from"../../images/logo_11.png"
import logo12 from"../../images/logo_12.png"
import logo13 from"../../images/logo_13.png"
import logo14 from"../../images/logo_14.png"

function Kilas () {
  return (
    <div className="Bg9"> 
       
    <div className='kotak4' id='kilasbalik'>
    <div className='Awan5'>
              <img src={awan5} />
        </div>
        <div className='kotak8'>
        <div className='logo10'>
              <img src={logo10} />
        </div>
        </div>
        <div className='kotak9'>
        <div className='logo11'>
              <img src={logo11} />
        </div>
        </div>
        <div className='kotak13'>
        <div className='logo12'>
              <img src={logo12} />
        </div>
        </div>
        <div className='kotak11'>
        <div className='logo13'>
              <img src={logo13} />
        </div>
        </div>
        <div className='kotak12'>
        <div className='logo14'>
              <img src={logo14} />
        </div>
        </div>
        <div className='kotak5'>
        
        <div className='kotak7'></div>
        <div className='kb'> Kilas Balik </div>
        </div>
    </div>

</div>
  )
}

export default Kilas 