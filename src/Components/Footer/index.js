import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaLine } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems1,FooterLinkItems2, FooterLinkTitle, FooterLink, SocialIconLink,SocialIconLink1, SosialIcons, FooterLogo, FooterLink1, FooterLink2 } from './FooterElements'
import logo from '../../images/logo_9.png'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>  
	<FooterWrap>
    <FooterLogo to='/' onClick={toggleHome}> 
        <img src={logo} alt=""></img>
    </FooterLogo>
		<FooterLinksContainer>
			<FooterLinksWrapper>
				<FooterLinkItems1>
				<FooterLinkTitle> PPSMB Kesatria 2022 </FooterLinkTitle>
				<FooterLink to='/home'> Jalan Grafika Mlati, Yogyakarta 55281, ID</FooterLink>
				<FooterLink to='/home'> https://ppsmb.ft.ugm.ac.id </FooterLink>
				</FooterLinkItems1>

                <FooterLinkItems2>
				<FooterLinkTitle> Official Account : </FooterLinkTitle>
                <SosialIcons>
                <SocialIconLink1 href="/" target="_blank" arial-label="Twitter">
                    <FaTwitter />
                    <FooterLink1 to='/home'> Twitter </FooterLink1>
                </SocialIconLink1>
                <SocialIconLink1 href="/" target="_blank" arial-label="Tiktok">
                    <FaTiktok />
                    <FooterLink2 to='/home'> Tiktok </FooterLink2>
                </SocialIconLink1>
                <SocialIconLink1 href="/" target="_blank" arial-label="Line">
                    <FaLine />
                    <FooterLink1 to='/home'> Line </FooterLink1>
                </SocialIconLink1>
                <SocialIconLink1 href="/www.instagram.com/ppsmb_kesatria/?hl=id" target="_blank" arial-label="Instagram">
                    <FaInstagram />
                    <FooterLink2 to='/'> Instagram </FooterLink2>
                </SocialIconLink1>
                <SocialIconLink1 href="/" target="_blank" arial-label="YouTube">
                    <FaYoutube />
                    <FooterLink1 to='/home'> YouTube </FooterLink1>
                </SocialIconLink1>
				</SosialIcons>
                </FooterLinkItems2>
			</FooterLinksWrapper>
		</FooterLinksContainer>
	</FooterWrap>
</FooterContainer>
  )
}

export default Footer