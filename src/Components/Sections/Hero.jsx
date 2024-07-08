import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect"
import HeroImg from "../../images/ICONOAVOCOOMG.svg"
import HeroBgAnimation from '../HeroBgAnimation'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion"
import { headContainerAnimation, headTextAnimation, headContentAnimation } from "../../utils/motion"
import HeroLogo from "../../images/AvocoNameCortado.svg";
import StarCanvas from "../Canvas/Stars"

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index:1;
  color: #fff;

  @media(max-width:960px){
    padding: 66px 16px;
  }
  @media(max-width:640px){
    padding: 32px 16px0;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  width: 100%;
  max-width: 1150px;

  @media(max-width:960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom:30px;
    display:flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
  `;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px){
    margin-bottom: 30px;
  }
  
  `;

const Title = styled.div`
  font-weight:700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};


  @media (max-width:960px){
    text-align: center;
  }

  @media (max-width:960px){
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  `;
const TextLoop = styled.div`
  font-weight:600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.white};
  line-height: 68px;

  @media (max-width:960px){
    text-align: center;
  }

  @media (max-width:640px){/**?????????????? */
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  `;
const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  `;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.white};
  text-align: justify;
  @media (max-width:960px){
    text-align: justify;
  }

  @media (max-width:960px){/**?????????????? */
    font-size: 16px;
    line-height: 30px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
 /* Color base en HSLA: hsla(29, 83%, 42%, 1) similar al marron del primary */
background: hsla(29, 83%, 42%, 1);
background: linear-gradient(
  225deg,
  hsla(29, 83%, 42%, 1) 0%,
  hsla(40, 83%, 42%, 1) 100%
);
background: -moz-linear-gradient(
  225deg,
  hsla(29, 83%, 42%, 1) 0%,
  hsla(40, 83%, 42%, 1) 100%
);
background: -webkit-linear-gradient(
  225deg,
  hsla(29, 83%, 42%, 1) 0%,
  hsla(40, 83%, 42%, 1) 100%
);
box-shadow: 20px 20px 60px rgba(200, 106, 18, 0.25), -20px -20px 60px rgba(200, 106, 18, 0.25);
border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.06);
    transition: all 0.4s ease-in-out;
    box-shadow:  10px 10px 30px #e5ff7f;
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;

    @media (max-width: 768px) {
      max-width: 280px;
      max-height: 280px;
    } 
`;

const HeroBg = styled.div`
  position: absolute;
  display:flex;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);


  @media (max-width: 640px){
  
  justify-content: center; 
  padding: 0 0px;

  }
  
  `
const ImgHero = styled.img`
  width: 100%;
  margin-left: -20px;

  @media (max-width: 768px) {
      margin-left: 0;
    } 
`;




const Hero = () => {
  return <div id="about">
    <HeroContainer>

      <HeroBg>
        <StarCanvas/>
        <HeroBgAnimation />
      </HeroBg>

      <motion.div {...headContainerAnimation}>

        <HeroInnerContainer>
          <HeroLeftContainer>
            <motion.div {...headTextAnimation}>

              <Title><ImgHero src={HeroLogo} alt="Avoco Deisgn Logo"></ImgHero></Title>
              <TextLoop>Tu agencia de
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
            </motion.div>

            <motion.div {...headContentAnimation}>

              <SubTitle>{Bio.description}</SubTitle>

            </motion.div>

            <ResumeButton href={Bio.resume} target="_blank">
              Empieza Tu Proyecto
            </ResumeButton>

          </HeroLeftContainer>

          <HeroRightContainer>
            <motion.div {...headContentAnimation}>

              <Tilt>
                <Img src={HeroImg} alt="Avoco Desing"></Img>
              </Tilt>

            </motion.div>
          </HeroRightContainer>




        </HeroInnerContainer>
      </motion.div>
    </HeroContainer>
  </div>

}

export default Hero