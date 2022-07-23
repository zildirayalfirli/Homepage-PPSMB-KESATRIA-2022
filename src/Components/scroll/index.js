
import React, {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';
import '../scroll/style.css';


const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <div className='kotak10'>
        <FaChevronUp className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
        </div>
  );
}

export default ScrollArrow;