
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
	height: 250px;
	display: flex;
	position: relative;
	top: 770px;
	width: 100%;
	overflow: hidden;

	@media screen and (min-width: 280px) and (max-width: 380px) {
		height: 300px;
		width: 400px;
		left: 20px;
		top: 500px;
		
		}
	

	@media screen and (min-width: 380px) and (max-width: 470px) {
	height: 300px;
	top: 490px;
	}

	@media screen and (min-width: 470px) and (max-width: 550px) {
		height: 300px;
		top: 540px;
		}

		@media screen and (min-width: 550px) and (max-width: 650px) {
			height: 300px;
			top: 480px;
			
		}

		@media screen and (min-width: 650px) and (max-width: 700px) {
			height: 300px;
			top: 480px;
		}

	@media screen and (min-width: 700px) and (max-width: 800px) {
		height: 250px;
		top: 860px;
	  }

	  @media screen and (min-width: 800px) and (max-width: 915px) {
		height: 250px;
		top: 860px;
	  }

	  @media screen and (min-width: 915px) and (max-width: 1000px) {
		height: 250px;
		top: 960px;
		
	  }

	  @media screen and (min-width: 1000px) and (max-width: 1280px) {
		height: 250px;
		top: 660px;
	  }

	  @media screen and (min-width: 1280px) and (max-width: 1400px) {
		height: 250px;
		top: 700px;
	  }

	  @media screen and (min-width: 1400px) and (max-width: 1450px) {
		height: 250px;
		top: 700px;
	  }

	  @media screen and (min-width: 1450px) and (max-width: 1500px) {
		height: 250px;
		top: 750px;
	  }



	
`

export const FooterWrap = styled.div`
	padding: 48px 24px;
	display: flex;
	position: relative;
	top: 0px;
	left: 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	margin: 0 auto;

	

	
`

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (min-width: 280px) and (max-width: 700px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		}

`

export const FooterLogo = styled.image`
	position: absolute;
	width: 250px;
	height: 50px;
	right: 935px;
	bottom: 190px;

	@media screen and (min-width: 280px) and (max-width: 700px) {
		display: none;
	}

	@media screen and (min-width: 700px) and (max-width: 1000px) {
		display: none;
	}

	@media screen and (min-width: 1001px) and (max-width: 1280px) {
		left: 20px
	}
`

export const FooterLinkItems1 = styled.div`
	flex-direction: column;
	margin: 0px 210px;
	text-align: left;
	width: 220px;
	position: relative;
	right: -20px;
	box-sizing: border-box;
	color: #FAFAFA;
	top: 25px;

	
	@media screen and (min-width: 280px) and (max-width: 400px) {
		left: -60px;
		margin-bottom: 80px;
	}

	
	@media screen and (min-width: 400px) and (max-width: 470px) {
		left: -60px;
		top: -20px;
	}
	@media screen and (min-width: 470px) and (max-width: 530px) {
		left: -70px;
		top: 0px;
	}

	@media screen and (min-width: 530px) and (max-width: 650px) {
		left: -100px;
		top: -20px;
	}
	@media screen and (min-width: 650px) and (max-width: 700px) {
		left: -140px;
		top: -20px;
	}

	@media screen and (min-width: 700px) and (max-width: 1000px) {
		left: 50px;
		top: 50px;
	  }

	  @media screen and (min-width: 700px) and (max-width: 800px) {
		left: 50px;
		top: -10px;
	  }

	  @media screen and (min-width: 1000px) and (max-width: 1280px) {
		left: 120px
	}
`

export const FooterLinkTitle = styled.h1`
	font-size: 20px;
	margin-bottom: 2rem;
	display: flex;
	text-align: left;

	
	@media screen and (min-width: 280px) and (max-width: 700px) {
		margin-bottom: 0.5rem;
		font-size: 16px;
	}
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
	@media screen and (min-width: 280px) and (max-width: 700px) {
			margin-bottom: 0.5rem;
	}

	@media screen and (min-width: 280px) and (max-width: 700px) {
		font-size: 16px;
	}
`

export const FooterLinkItems2 = styled.div`
	flex-direction: column;
	margin: 0px 130px;
	text-align: left;
	position: relative;
	left: -100px;
	width: 180px;
	box-sizing: border-box;
	color: #FAFAFA;
	top: 25px;

	@media screen and (min-width: 400px) and (max-width: 470px) {
		left: 20px;
		top: -10px;
	}
	@media screen and (min-width: 470px) and (max-width: 530px) {
		left: 10px;
		top: 10px;
	}
	@media screen and (min-width: 530px) and (max-width: 650px) {
		left: -20px;
		top: 0px;
	}
	@media screen and (min-width: 650px) and (max-width: 700px) {
		left: -60px;
		top: 0px;
	}


	@media screen and (min-width: 280px) and (max-width: 400px) {
		left: 20px;
		top: -50px;
	}

	@media screen and (min-width: 800px) and (max-width: 1000px) {
		left: -140px;
		top: 50px;
	  }

	  @media screen and (min-width: 700px) and (max-width: 800px) {
		left: -140px;
		top: -10px;
	  }

	  @media screen and (min-width: 1000px) and (max-width: 1280px) {
		left: -120px
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

	@media screen and (min-width: 280px) and (max-width: 530px) {
		grid-gap: 0;
		grid-template-columns: 1fr 1fr 1fr 1fr ;
		top: 0px;
	}

	@media screen and (min-width: 530px) and (max-width: 700px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		top: 0px;
	}

	
	@media screen and (min-width: 280px) and (max-width: 380px) {
		grid-template-columns: 1fr 1fr 1fr ;
	}

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
