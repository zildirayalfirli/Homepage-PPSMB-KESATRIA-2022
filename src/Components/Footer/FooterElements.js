
import styled from "styled-components";
import { Link } from "react-router-dom";



export const FooterContainer = styled.div`

height: 200px;
display: flex;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
position: relative;
top: 760px;
left: 180px;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
	padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
	flex-direction: column;
  }
`

export const FooterLogo = styled.image`
position: absolute;
width: 250px;
height: 50px;
right: 935px;
bottom: 150px;
`

export const FooterLinkItems1 = styled.div`
flex-direction: column;
margin: 30px 170px;
text-align: left;
width: 220px;
position: relative;
right: 40px;
box-sizing: border-box;
color: #FAFAFA;
top: 45px;


@media screen and (max-width: 420px) {
	margin: 0;
	padding: 10px;
	width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
font-size: 20px;
margin-bottom: 2rem;
display: flex;
text-align: left;
`
export const FooterLink = styled(Link)`
color: #FAFAFA;
display: flex;
text-align: left;
text-decoration: none;
margin-bottom: 2rem;
font-size: 20px;
&:hover {
	color: #95DACB;
	transition: 0.3s ease-out;
}
`

export const FooterLinkItems2 = styled.div`
flex-direction: column;
margin: 30px 130px;
text-align: left;
position: relative;
left: 20px;
width: 180px;
box-sizing: border-box;
color: #FAFAFA;
top: 45px;

@media screen and (max-width: 420px) {
	margin: 0;
	padding: 10px;
	width: 100%;
  }
`

export const SosialIcons = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 5px;
width: 100px;
position: relative;
right: 10px;
bottom: 20px;
`

export const SocialIconLink1 = styled.a`
color: #FAFAFA;
font-size: 16px;
display: flex;
flex-direction: row;
text-decoration: none;
margin: 7px;
padding: 0 0px 0 0px;
`
export const FooterLink1 = styled(Link)`
color: #FAFAFA;
display: flex;
text-align: center;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 16px;
padding: 0 10px;

&:hover {
	color: #95DACB;
	transition: 0.3s ease-out;
}
`
export const FooterLink2 = styled(Link)`
color: #FAFAFA;
display: flex;
text-align: right;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 16px;
padding: 0 10px;

&:hover {
	color: #95DACB;
	transition: 0.3s ease-out;
}
`
