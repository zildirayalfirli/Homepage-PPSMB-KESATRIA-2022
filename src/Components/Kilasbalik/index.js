import React from 'react'
import "../Kilasbalik/kilasbalik.css"
import awan5 from "../../images/awan6.png"
import logo10 from"../../images/logo_10.png"
import logo11 from"../../images/logo_11.png"
import logo12 from"../../images/logo_12.png"
import logo13 from"../../images/logo_13.png"
import logo14 from"../../images/logo_14.png"
import { youtube1Animation, jjtAnimation, kilasAnimasi } from "../../animation";
import { motion } from "framer-motion";
import { useScroll } from "../UseScroll/useScroll";
import { useSpring, animated } from 'react-spring'

function Kilas () {
const [element, controls] = useScroll();
const styles1 = useSpring({
      loop: { reverse: true },
      from: { x: -100 },
      to: { x: 500 },
      config: {duration: 2000}
    })

const styles2 = useSpring({
      loop: { reverse: true },
      from: { x: 100 },
      to: { x: -600 },
      config: {duration: 2500}
    })

const styles3 = useSpring({
      loop: { reverse: true },
      from: { x: 0 },
      to: { x: 400 },
      config: {duration: 1200}
    })

const styles4 = useSpring({
      loop: { reverse: true },
      from: { y: 0 },
      to: { y: -300 },
      config: {duration: 1200}
    })

    const styles5 = useSpring({
      loop: { reverse: true },
      from: { y: 0 },
      to: { y: 200 },
      config: {duration: 2000}
    })

return (
<div className="Bg9"> 
      <div className='kotak4' id='kilasbalik' ref={element}>
      <motion.div className='Awan5'
      variants={youtube1Animation}  
      animate={controls}
       transition={{
         delay: 0.3,
         type: "tween",
         duration: 1.8,
       }}
      >
              <img src={awan5} />
      </motion.div>
        
            <animated.div className='kotak8' style={styles1}>
            <div className='logo10' >
              <img src={logo10} />
            </div>
            </animated.div>

           
            <animated.div className='kotak9'style={styles5}>
            <div className='logo11'>
              <img src={logo11} />
            </div>
            </animated.div>

            <animated.div className='kotak13' style={styles2}>
            <div className='logo12'>
              <img src={logo12} />
            </div>
            </animated.div>
            
            <animated.div className='kotak11' style={styles4}>
            <div className='logo13'>
              <img src={logo13} />
            </div>
            </animated.div>

            <animated.div className='kotak12' style={styles3}>
            <div className='logo14'>
              <img src={logo14} />
            </div>
            </animated.div>

            <motion.div className='kotak5'
            variants={jjtAnimation}  
            animate={controls}
               transition={{
                 delay: 0.3,
                 type: "tween",
                 duration: 1.8
               }}
            >
            <div className='kotak7'>
            </div>
            <div className='kb'> Kilas Balik </div>
            </motion.div>
    </div>
</div>
  )
}

export default Kilas 