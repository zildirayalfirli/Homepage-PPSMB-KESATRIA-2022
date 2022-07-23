import React, { useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Nav, NavbarContainer, NavLogo, NavBrand, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,ImgNav } from './NavbarElement';
import logo from '../../images/logo_1.png'
import {animateScroll as scroll} from 'react-scroll'
import { useScroll } from "../UseScroll/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "../../animation";


const Navbar = ({ toggle }) => {

  const [ scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  

  useEffect(() =>  {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const [element, controls] = useScroll();

  return ( 
    <>
        {/* <Nav scrollNav={scrollNav}>  */}
        <Nav ref={element}
            variants={navAnimation}
            transition={{ delay: 0.1 }}
            animate={controls} 
        >
            <NavbarContainer>
                <NavLogo> 
                  <img src={logo} alt=""></img>
                </NavLogo>
                <NavBrand to='/' onClick={toggleHome}>  PPSMB KESATRIA 2022 </NavBrand>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                  <NavMenu>
                  <NavItem>
                      <NavLinks to='home' smooth={true} duration={200} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='about' smooth={true} duration={200} spy={true} exact='true' offset={-50}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='jelajahteknik' smooth={true} duration={200} spy={true} exact='true' offset={50}>Jelajah Teknik</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='calender' smooth={true} duration={200} spy={true} exact='true' offset={-60} >Time Line</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='kilasbalik' smooth={true} duration={200} spy={true} exact='true' offset={-80} >Kilas Balik</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks to='teknikstore' smooth={true} duration={200} spy={true} exact='true' offset={-80} >Teknik Store</NavLinks>
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                      <NavBtnLink to='/absen'>Absen</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
  }

export default Navbar