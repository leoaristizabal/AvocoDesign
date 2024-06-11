import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; //estilos de la pelotica
import styled from 'styled-components'
import { nosotros } from '../../data/constants';
import NosotrosCard from '../Cards/NosotrosCard';

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
  font-size: 24px;
  line-height: 32px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.primary };
  text-align: justify;
  font-weight: 600;
  @media (max-width:960px){
    text-align: justify;
  }

  
`;

const Nosotros = () => {
    return (
        <Container id="Nosotros">
            <Wrapper>
                <Title>Nostros</Title>
                <Desc
                >
                    En AvocoDesign, nos apasiona transformar ideas en realidades digitales impactantes. Desde nuestra fundación, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos mediante soluciones creativas y efectivas en desarrollo web, diseño gráfico, gestión de redes sociales y creación de contenido.
                </Desc>
                <SubTitle>
                    ¡Conoce nuestro equipo!
                </SubTitle>

                <VerticalTimeline>
                    {nosotros.map((nosotros, index) => (
                        <NosotrosCard key={`nosotros-${index}`} nosotros={nosotros}/>
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Nosotros