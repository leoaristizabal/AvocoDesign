import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; //estilos de la pelotica
import styled from 'styled-components'
import { testimonio } from '../../data/constants';
import TestimonioCard from '../Cards/TestimonioCard';
import EarthCanvas from '../Canvas/Earth';
import Typewriter from "typewriter-effect"

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 12px;

    @media (max-width: 968px) {
        flex-direction: column;
        padding: 0 0px;
    }
    

`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 95};
    padding: 0 32px;
    @media (max-width:640px){/**?????????????? */
    font-size: 16px;
    text-align: center;
    padding: 0 18px;
    line-height: 28px;
  }
`;

const SubTitle = styled.div`
  font-size: 20 px;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.primary };
  text-align: justify;
  font-weight: 600;
  @media (max-width:960px){
    text-align: justify;
  }`;

const Span = styled.div`
  font-size: 20 px;
  margin-top: 2px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.primary };
  text-align: justify;
  font-weight: 600;
  @media (max-width:960px){
    text-align: justify;
  }

  
`;

const Testimonio = () => {
    return (
        <Container id="Testimonio">
            <Wrapper>
                <Title>Testimonios</Title>
                <Desc
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolores repellat nisi obcaecati. Voluptatibus, cum laudantium. Explicabo, doloribus? Saepe, reprehenderit.
                </Desc>
                <SubTitle>
                    ¿Qué dicen nuestros clientes?
                </SubTitle>

                <VerticalTimeline>
                    {testimonio.map((item, index) => (
                        <TestimonioCard key={`testimonio-${index}`} testimonio={item}/>
                    ))}
                </VerticalTimeline>
                <EarthCanvas/>
                <Span>
                  <Typewriter
                    options={{
                      strings: "¡GÍRAME :D!",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
            </Wrapper>
        </Container>
    )
}

export default Testimonio