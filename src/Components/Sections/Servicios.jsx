import React from 'react'
import styled from 'styled-components';
import { servicios } from '../../data/constants'
import { Tilt } from 'react-tilt';

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
    max-width: 1100px;
    gap: 12px;

    @media (max-width: 968px) {
        flex-direction: column;
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

const ServiciosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 50px;
    justify-content: center;
`;

const Servicio = styled.div`
    width: 100%;
    max-width: 500px;
    background-color:${({ theme }) => theme.secondary};
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: ${({ theme }) => theme.text_primary} 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }

    @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;



const ServicioTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.primary};
    
    `;

const ServicioList = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;

`;

const ServicioItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
    @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
    
    `;

const ServicioImg = styled.img`
    width: 24px;
    height: 24px;
`;


const Servicios = () => {
    return (
        <Container id="Servicos">
            <Wrapper>
                <Title>Servicios</Title>
                <Desc   
                >
                    Somos un grupo de desarrolladores web y diseñadores creativos en diferentes áreas y un poco mas allá! Entre nuestras habilidades destacamos en:
                </Desc>

                <ServiciosContainer>
                    {servicios.map((servicio, index) => (
                        <Tilt>
                            <Servicio key={`servicio-${index}`}>
                                <ServicioTitle>{servicio.title}</ServicioTitle>
                                <ServicioList>
                                    {servicio.servicios.map((item, index_x) => (
                                        <ServicioItem key={`servicio-x-${index}`}>
                                            <ServicioImg src={item.image} />
                                            {item.name}
                                        </ServicioItem>
                                    ))}</ServicioList>
                            </Servicio>
                        </Tilt>
                    ))}
                </ServiciosContainer>
            </Wrapper>
        </Container>
    )
}

export default Servicios