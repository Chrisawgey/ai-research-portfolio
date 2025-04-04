// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterLogo>
            <LogoText>RESEARCH 24'</LogoText>
            <LogoTagline>AI Research Portfolio</LogoTagline>
          </FooterLogo>

          <FooterLinks>
            <FooterColumn>
              <h3>Navigate</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#demos">Demos</a></li>
                <li><a href="#publications">Publications</a></li>
              </ul>
            </FooterColumn>
            
            <FooterColumn>
              <h3>Resources</h3>
              <ul>
                <li><a href="#datasets">Datasets</a></li>
                <li><a href="#code">Code</a></li>
                <li><a href="#models">Models</a></li>
                <li><a href="#documentation">Documentation</a></li>
              </ul>
            </FooterColumn>

            <FooterColumn>
              <h3>Connect</h3>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </FooterColumn>
          </FooterLinks>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <Copyright>&copy; 2025 AI Research Portfolio - Christopher Vargas</Copyright>
          <SocialLinks>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 22.28C11.063 22.394 11.25 22.008 11.25 21.669C11.25 21.359 11.231 20.165 11.231 19.168C8 19.835 7.188 18.22 7 17.6C6.875 17.284 6.25 16.3 5.75 15.99C5.375 15.745 4.75 15.078 5.734 15.059C6.625 15.04 7.25 16.19 7.5 16.5C8.5 18.2 10.188 17.655 11.266 17.315C11.375 16.6 11.75 16.1 12.125 15.814C9.25 15.515 6.25 14.6 6.25 10.25C6.25 9.105 6.734 8.155 7.5 7.39C7.375 7.06 7 5.915 7.75 4.395C7.75 4.395 8.562 4.065 11.25 5.75C12.156 5.46 13.125 5.32 14.094 5.32C15.063 5.32 16.031 5.47 16.938 5.75C19.625 4.055 20.438 4.395 20.438 4.395C21.188 5.915 20.813 7.06 20.688 7.39C21.453 8.155 21.938 9.095 21.938 10.25C21.938 14.615 18.938 15.515 16.063 15.814C16.563 16.19 16.938 16.908 16.938 18.03C16.938 19.61 16.906 21.225 16.906 21.659C16.906 22.008 17.094 22.394 17.719 22.27C22.344 21.128 26 16.981 26 12C26 6.477 20.523 2 15 2H12Z" fill="currentColor"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.643 4.937C22.808 5.307 21.911 5.557 20.968 5.67C21.941 5.084 22.669 4.171 23.016 3.092C22.116 3.621 21.119 4.001 20.058 4.205C19.208 3.299 17.998 2.75 16.658 2.75C14.086 2.75 12 4.836 12 7.407C12 7.77 12.042 8.123 12.12 8.463C8.247 8.26 4.816 6.419 2.518 3.621C2.118 4.307 1.888 5.084 1.888 5.909C1.888 7.477 2.667 8.854 3.862 9.653C3.085 9.634 2.35 9.434 1.694 9.09V9.15C1.694 11.407 3.254 13.288 5.352 13.714C4.963 13.82 4.554 13.879 4.132 13.879C3.832 13.879 3.542 13.849 3.256 13.797C3.832 15.648 5.497 17.006 7.482 17.042C5.914 18.316 3.978 19.073 1.889 19.073C1.515 19.073 1.151 19.052 0.789 19.009C2.775 20.349 5.176 21.129 7.76 21.129C16.648 21.129 21.508 13.954 21.508 7.75C21.508 7.55 21.503 7.35 21.493 7.15C22.403 6.48 23.195 5.656 23.831 4.716L23.643 4.937Z" fill="currentColor"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM5 8H0v16h5V8zM12.982 8H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" fill="currentColor"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components for Footer
const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterLogo = styled.div`
  margin-right: 2rem;
`;

const LogoText = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(90deg, #4A90E2 0%, #a166ff 50%, #5271ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LogoTagline = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  min-width: 120px;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.7rem;
  }
  
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
    
    &:hover {
      color: #4A90E2;
    }
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 0 2rem;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s;
  
  &:hover {
    background-color: #4A90E2;
    color: white;
    transform: translateY(-3px);
  }
`;

export default Footer;