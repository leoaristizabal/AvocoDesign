import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link as LinkR } from "react-router-dom"
import { Bio } from '../data/constants.js';
import { MenuRounded } from "@mui/icons-material";
import Logo from "../images/LogoNegroOMG.svg";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 190px; /* Tamaño por defecto */
    height: auto;

    @media screen and (max-width: 768px) {
      width: 150px; /* Tamaño para pantallas medianas */
    }

    @media screen and (max-width: 480px) {
      width: 120px; /* Tamaño para pantallas pequeñas */
    }
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 835px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 835px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.text_primary};
  color: ${({ theme }) => theme.text_primary};
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: ${({ theme }) => theme.primary} 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      ${({ theme }) => theme.primary} 0px -2px 6px 0px inset;
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;

  @media screen and (max-width: 835px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  list-style: none;
  background: ${({ theme }) => theme.bg + 99};
  position: absolute;
  top: 80px;
  right: 0;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={Logo} alt="Logo" />
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: 'inherit' }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#Nosotros">Inicio</NavLink>
          <NavLink href="#Servicios">Servicios</NavLink>
          <NavLink href="#Experiencia">Nosotros</NavLink>
          <NavLink href="#Clientes">Clientes</NavLink>
          <NavLink href="#Otros">Otros</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton href={Bio.github} target='_blank'>
            Cotización
          </GithubButton>
        </ButtonContainer>

        <MobileMenu isOpen={isOpen}>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Nosotros">Inicio</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Servicios">Servicios</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experiencia">Nosotros</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Clientes">Clientes</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Otros">Otros</NavLink>
          <GithubButton href={Bio.github} target='_blank'>
            Cotización
          </GithubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
