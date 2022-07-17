import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, Column3, Column4, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrap, ImgDep,ImgDep1, ImgDep2, ImgDep3, ImgDep4, ImgDep5,Img11, Img14, Img12, Img13, Img4, Img15} from './AboutElements'

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img,img2, img3, img4, img5, img6,img7,img8, alt}) => {
  return (
    <div>
      <AboutContainer lightBg={lightBg} id={id}>
          <AboutWrapper>
            <AboutRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText} > {headLine}</Heading>
                <Subtitle darkText={darkText} > {description} </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              <Column3>
                <ImgDep>
                  <ImgDep1>
                  <Img11 src={img2} alt={alt} />
                  </ImgDep1>
                  <ImgDep2>
                  <Img12 src={img3} alt={alt} />
                  </ImgDep2>
                  <ImgDep3>
                  <Img13 src={img4} alt={alt} />
                  </ImgDep3>
                  <ImgDep4>
                  <Img14 src={img5} alt={alt} />
                  </ImgDep4>
                  <ImgDep5>
                  <Img15 src={img6} alt={alt} />
                  </ImgDep5>
                </ImgDep>
              </Column3>
              </Column2>
              <Column4>
              <Img4 src={img8} alt={alt} />
              </Column4>
            </AboutRow>
          </AboutWrapper>
      </AboutContainer>
    </div>
  )
}

export default AboutSection