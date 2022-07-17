import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #FAFAFA; 
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    top: 0;
    z-index: 990;


@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}

@media screen and (max-width: 1025px) {
    transition: 0.8s all ease;
        width: auto;
        float: none;
        width: 120%; 
}

@media screen and (max-width: 1281px) {
    transition: 0.8s all ease;
    width: 100%;
    display: flex;
}


@media screen and (max-width: 1440px) {
    transition: 0.8s all ease;
    width: 102%;
    display: flex;
}
`;

export const NavbarContainer =styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 100%;
    
`

export const NavBrand = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 200;
    display: flex;
    margin-left: 85px;
    align-items: center;
    text-decoration: none;
    
    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        margin-left: 75px;
    }


`

export const NavLogo = styled.image`
position: absolute;
width: 64px;
height: 64px;
left: 35px;
top: 6px;
`

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -400px;


@media screen and (max-width: 885px) {
    display: none;
}

@media screen and (max-width: 1280px) {
    margin-right: -230px;

}
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #95DACB;
}

@media screen and (max-width: 1280px) {
    padding: 0 1.5rem;

}
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 885px){
        display: none;
    }

    @media screen and (max-width: 1280px) {
        margin-right: 20px;
    
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #305D7A;
    white-space: nowrap;
    padding: 10px 20px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: auto;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`