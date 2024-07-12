import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCard';
import StarCanvas from "../Canvas/Stars"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 50px;
  padding: 0 16px;
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
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.white };
    padding: 0 32px;
    @media (max-width:640px){/**?????????????? */
    font-size: 16px;
    text-align: center;
    padding: 0 18px;
    line-height: 28px;
  }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.text_primary + 40};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
    border-radius: 4px;
    }
    ${({ active, theme }) => active &&
        `
    background: ${theme.text_primary + 20}
    `}
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.text_primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {
    const [toggle, setToggle] = useState("Todos")
    return (
        <Container id="Projects">
            <Wrapper>
            <StarCanvas/>
                <Title>Proyectos</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus, distinctio esse sequi iure vel voluptates ullam laudantium sit mollitia.</Desc>

                <ToggleButtonGroup>
                    <ToggleButton active={toggle === "Todos"}
                        onClick={() => setToggle("Todos")}
                    > Todos
                    </ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "Branding"}
                        onClick={() => setToggle("Branding")}
                    > Branding
                    </ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "Web"}
                        onClick={() => setToggle("Web")}
                    > Web
                    </ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === "Logos"}
                        onClick={() => setToggle("Logos")}
                    > Logos
                    </ToggleButton>
                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === "Todos" && 
                    projects.map((project) => <ProjectCard project={project} />)}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} />
                        ))}
        </CardContainer>

            </Wrapper>

        </Container>
    )
}

export default Projects