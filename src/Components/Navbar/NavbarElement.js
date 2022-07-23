import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background:${({ scrollNav})  => (scrollNav ? '#FAFAFA' : '#FAFAFA')};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    overflow:hidden;
    top: -3px;
    z-index: 990;

    
    @media screen and (min-width: 280px) and (max-width: 700px) {
        width: auto;
    }

    @media screen and (min-width: 801px) and (max-width: 1000px) {
        width: auto;
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
    position: relative;
    left: 90px;
    align-items: center;
    text-decoration: none;

    @media screen and (min-width: 280px) and (max-width: 700px) {
       font-size: 1rem;
        
        position: relative;
        top: -5px;
    }

    @media screen and (max-width: 340px)
{
    display: none;
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


@media screen and (max-width: 1100px) {
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


    @media screen and (max-width: 1100px) {
        display: none;
    }
    @media screen and (min-width: 1001px) and (max-width: 1200px) {
        margin-right: -100px;
    }
    @media screen and (min-width: 1201px) and (max-width: 1280px) {
        margin-right: -50px;
    }

    @media screen and (min-width: 1280px) and (max-width: 1380px) {
        margin-right: -50px;
    }
    @media screen and (min-width: 1380px) and (max-width: 1495px) {
        margin-right: -50px;
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

    @media screen and (min-width: 1001px) and (max-width: 1200px) {
        padding: 0 1rem;
    }

    @media screen and (min-width: 1001px) and (max-width: 1495px) {
        padding: 0 1.3rem;
    }

    
  

`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1100px) {
        display: none;
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


