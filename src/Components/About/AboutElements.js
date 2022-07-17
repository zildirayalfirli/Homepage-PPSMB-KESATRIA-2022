import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    background: #FAFAFA;
    background-size: cover;
    height: 100vh;
    z-index: -1;
    position: relative;

    @media screen and (max-width: 436px) {
        display: flex;
        position: relative;
        max-width:100%;
        background: #FAFAFA;
        background-size: cover;
        height: 89vh;
        z-index: -1;
      }

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (max-width: 1025px) {
          position: relative;
          width:0;
          max-width:100%;
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

  @media screen and (max-width: 1025px) {
    position: relative;
    width:170%;
    left:50px;
    background: #000;
    max-width:100%;
}
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    padding: 0 24px;
    overflow-x: hidden;
    overFlow-y: visible;

    @media screen and (max-width: 480px) {
        display: flex;
        position: relative;
        max-width:100%;
        
        background-size: cover;
        height: 95vh;
        z-index: -1;
        bottom: 82px
      }
`

export const AboutRow = styled.div`
display: grid;
position: relative;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
justify-content: flex-end;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1 col3'` : `'col3 col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3'`)};
}
`

export const Column1 = styled.div`
margin-top: 45px;
padding: 0 30px;
grid-area: col1;
position: relative;
top: 20px;

@media screen and (max-width: 480px) {
    position: relative;
    max-width:100%;
    width: 370px;
    height: 300px;
    top: 280px;

    
  }
`

export const Column2 = styled.div`
margin-top: 45px;
padding: 0 10px 0 ;
grid-area: col2;
position: relative;
top: 20px;

@media screen and (max-width: 480px) {
    position: relative;
    max-width:100%;
    height: 200px;
    top: -380px;
  }
`

export const Column3 = styled.div`
max-width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
grid-area: col3;

@media screen and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    grid-area: col3;
  }

  

`

export const TextWrapper = styled.div`
max-width: 100%;
margin-left: 100px;
right: 350px;
padding-top: 0;
padding-right: 120px;
padding-bottom: 50px;
height: 400px;
width: 100%;
position:relative;

@media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;
    height: 300px;
    bottom: 20px;
    top: -50px;
    width: 370px;
    position: relative;
    right: 100px;
    
  }

`

export const TopLine = styled.p`
color: #000;
font-size: 20px;
line-height: 20px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
text-align: left;

@media screen and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 300px;
    position: relative;
    right: -5px;
    bottom: -20px;
    
  }
`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.5;
font-weight: 600;
color: #000;
text-align: left;

@media screen and (max-width: 480px) {
  font-size: 18px;
  text-align: center;
  display: flex;
  line-height: 1.2;
  position: relative;
    bottom: -25px;
    display:flex;
    justify-content: center;
    align-items: center;
    left: 5px;
    width: 300px;
    
}
`
export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    text-align: left;


    @media screen and (max-width: 480px) {
        font-size: 16px;
        height: 0px;
        width: 300px;
        position: relative;
        bottom: -20px;
        left: 5px;
        line-height: 18px;
        text-align: justify;
        display:flex;
        justify-content: center;
      }
`

export const ImgWrap = styled.div`
height: 300px;
width: 300px;
left: 280px;

@media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;
    height: 200px;
    
    width: 320px;
    position: relative;
    left: 20px;
    
  }



`

export const ImgDep = styled.div`
max-width: 100%;
height: 200px;
width: 100%;
position: absolute;

@media screen and (max-width: 480px) {
    position: relative;
    max-width:100%;
    height: 100px;
    top: -20px;
    
    width:400px;
    left: -80px;
  }

  @media screen and (max-width:1440px) {
    left: 550px;
    width: auto;
    float: none;
    bottom: -50px;
}
`

export const ImgDep1 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 750px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 60px;

    @media screen and (max-width: 480px) {
        position: relative;
        max-width:100%;
        height: 50px;
        top: 20px;
        background: #FAFAFA;
        box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
        width:50px;
        left: 20px;
      }
`
export const ImgDep2 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 650px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 60px;

    @media screen and (max-width: 480px) {
        position: relative;
        max-width:100%;
        height: 50px;
        top: -30px;
        background: #FAFAFA;
        box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
        width:50px;
        left: 100px;
      }
`
export const ImgDep3 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 550px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 60px;

    @media screen and (max-width: 480px) {
        position: relative;
        max-width:100%;
        height: 50px;
        top: -80px;
        background: #FAFAFA;
        box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
        width:50px;
        left: 180px;
      }
`
export const ImgDep4 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 450px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 60px;

    @media screen and (max-width: 480px) {
        position: relative;
        max-width:100%;
        height: 50px;
        top: -130px;
        background: #FAFAFA;
        box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
        width:50px;
        left: 260px;
      }
`
export const ImgDep5 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 350px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 60px;

    @media screen and (max-width: 480px) {
        position: relative;
        max-width:100%;
        height: 50px;
        top: -180px;
        background: #FAFAFA;
        box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
        width:50px;
        left: 340px;
      }
`

export const Img = styled.img`
width:100%;
position: relative;
right: 240px;
bottom:50px;
margin: 0 0 100px 0;
padding-right: 0;

@media screen and (max-width: 480px) {
    text-align: center;
    width: 150px;
    height: 150px;
    position: relative;
    left: 20px;
    top:20px;
  }

  @media screen and (max-width:1440px) {
    left: -150px;
    width: auto;
    float: none;
    bottom: 78px;
}


`
export const Img11 = styled.img`
position: absolute;
top: 16px;
left: 12px;


@media screen and (max-width: 480px) {
    position: relative;
    left: 1px;
    top: 8px;
    width:40px;
  }
`

export const Img12 = styled.img`
position: absolute;
   top: 16px;
   left: 12px;

   @media screen and (max-width: 480px) {
    position: relative;
    left: 1px;
    top: 8px;
    width:40px;
  }
`
export const Img13 = styled.img`
position: absolute;
   top: 15px;
   left: 16px;

   @media screen and (max-width: 480px) {
    position: relative;
    left: 1px;
    top: 5px;
    width:40px;
  }
`

export const Img14 = styled.img`
position: absolute;
   top: 8px;
   left: 15px;

   @media screen and (max-width: 480px) {
    position: relative;
    left: 1px;
    width: 40px;
    top: 0px;
`

export const Img15 = styled.img`
position: absolute;
   top: 8px;
   left: 20px;

   @media screen and (max-width: 480px) {
    position: relative;
    left: 1px;
    width: 30px;
    top: 0px;
`
export const Img4 = styled.img`
width:100%;
width: 389px;
height: 206px;
position: relative;
left: 1180px;
top: 240px;

@media screen and (max-width: 480px) {
  position: relative;
  max-width:100%;
  height: 200px;
  top: 0px;
  
  @media screen and (max-width:1440px) {
    left:200px;
  }
`


export const Column4 = styled.div`
position: relative;

@media screen and (max-width: 480px) {
  position: relative;
  max-width:100%;
  height: 200px;
  top: -180px;
  left: 230px;
  
}

@media screen and (max-width:1440px) {
  left: -25px;
  top: 20px;
}

@media screen and (max-width: 1280px) {
  left: -100px;
 
`