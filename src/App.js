// src/App.js
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Home from './components/Home';
import Footer from './components/Footer';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <NavContainer className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <NavLogo href="#home">
          <LogoText>RESEARCH 24'</LogoText>
        </NavLogo>
        <NavLinks>
          <NavLink href="#research">Research</NavLink>
          <NavLink href="#methodology">Methodology</NavLink>
          <NavLink href="#demos">Demos</NavLink>
          <NavLink href="#technology">Technology</NavLink>
          <NavButton href="#contact">Contact</NavButton>
        </NavLinks>
        <MobileMenuButton>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </NavContent>
    </NavContainer>
  );
};

// Styled Components for Navbar
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.2rem 2rem;
  transition: all 0.3s ease;
  background-color: transparent;
  
  &.scrolled {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0.8rem 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    
    &.scrolled {
      padding: 0.8rem 1.5rem;
    }
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLogo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #4A90E2 0%, #a166ff 50%, #5271ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    left: 0;
    background: linear-gradient(90deg, #4A90E2 0%, #5271ff 100%);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavButton = styled.a`
  background: linear-gradient(90deg, #4A90E2 0%, #5271ff 100%);
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  span {
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;