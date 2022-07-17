import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const AgendaContainer = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;



@media screen and (max-width: 768px) {
height: 1100px;
}

@media screen and (max-width: 480px) {
height: 1300px;
}

@media screen and (max-width:1280px) {
    width: auto;
    float: none;
    width: 102%;
  }


@media screen and (max-width:1440px) {
    width: auto;
    float: none;
    width: 102%;
  }
`
export const AgendaWrapper = styled.div`
max-width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 10000x) {
grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
grid-template-columns:1fr;
padding: 0 20px;
}
`


export const AgendaCard1 = styled.div`
background: #fff;
display: flex;
flex-direction: column;
position: relative;
left: 48%;
justify-content: flex-start;
align-items: center;
border-radius: 20px;
margin-left: 50px;
max-height: 100%;
padding: 30px;
border: 1px solid;
box-shadow: 5px 2px 0px 5px #224860;
transition: all 0.2s ease-in-out;

&:hover {
transform: scale(1.02) ;
transition: all 0.2s ease-in-out;
cursor: pointer;
}


@media screen and (max-width:1280px) {
   left: 110px;
    
}
`
export const AgendaCard2 = styled.div`
background: #224860;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
height: 200px;
width: 200px;
padding: 70px;
line-height: 50px;

@media screen and (max-width:1440px) {
    height: 200px;
    width: 200px;
    
}
`
export const AgendaCard3 = styled.div`
display: flex;
align-items: center;
position: relative;
`

export const AgendaCard3Link = styled(LinkR)`
border-radius: 50px;
background: #F26628;
white-space: nowrap;
margin-top: 20px;
padding: 10px 25px;
color: #010606;
font-size: 16px;
line-height:20px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: auto;

&:hover {
    transform: scale(1.22) ;
    transition: all 0.2s ease-in-out;
    color: #010606;
    cursor: pointer;
}
`

export const AgendaIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 20px;
margin-left: 10px;
`

export const AgendaH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom:64px;

@media screen and (max-width: 480px) {
font-size: 2rem;
}
`
export const AgendaH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const AgendaP = styled.p`
    font-size: 1rem;
    text-align: center;
`