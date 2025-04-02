// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <LogoText>CV<span>.</span></LogoText>
          <LogoSubtext>AI Research</LogoSubtext>
        </FooterLogo>
        
        <FooterLinks>
          <LinkGroup>
            <LinkGroupTitle>Navigation</LinkGroupTitle>
            <FooterLink href="#research">Research</FooterLink>
            <FooterLink href="#videos">Videos</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </LinkGroup>
          
          <LinkGroup>
            <LinkGroupTitle>Connect</LinkGroupTitle>
            <FooterLink href="https://github.com/Chrisawgey" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/chrisvpopoca/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          </LinkGroup>
          
          <LinkGroup>
            <LinkGroupTitle>Resources</LinkGroupTitle>
            <FooterLink href="#">Publications</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </LinkGroup>
        </FooterLinks>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>&copy; {currentYear} AI Research Portfolio - Christopher Vargas</Copyright>
        <BottomLinks>
          <BottomLink href="#">Privacy</BottomLink>
          <BottomLink href="#">Terms</BottomLink>
        </BottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: #0f172a;
  color: #cbd5e1;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  min-width: 200px;
`;

const LogoText = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin: 0;
  
  span {
    color: #3b82f6;
  }
`;

const LogoSubtext = styled.p`
  margin-top: 0.5rem;
  opacity: 0.7;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkGroupTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem;
`;

const FooterLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottomLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3b82f6;
  }
`;

export default Footer;