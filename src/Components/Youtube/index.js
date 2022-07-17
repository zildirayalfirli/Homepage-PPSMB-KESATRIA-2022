import React from 'react'
import "../Youtube/youtube.css"
import awan1 from '../../images/awan1.png'
import awan2 from '../../images/awan2.png'
import awan20 from '../../images/awan3.png'

function Youtube() {
  return (
    <div className="Bg2" id='youtube' >
       <div className='max-width'>
      
      <div className='box5'>
      <div className='Awan20'>
              <img src={awan20} />
        </div>
      </div>

      <div className='box'>
      
      <div className='Awan2'>
              <img src={awan2} />
        </div>
        <div className='Awan1'>
              <img src={awan1} />
        </div>
        
        <div className='box2'>
        </div>
        <div className='box3'>
          <div className='video'>
            <iframe iframe width="560" height="315" src="https://www.youtube.com/embed/M4ZoCHID9GI" title="YouTube video player" frameborder="0" border-radius="20px"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"gesture="media"allowfullscreen></iframe>
              <div className='teks1'>
                ANTHEM
              </div>
              <div className='teks2'>
                PPSMB KESATRIA 2022
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Youtube