import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 AI Research Portfolio - Christopher Vargas</p>
      <div>
        <a href="#contact">Contact</a> | <a href="#about">About</a>
      </div>
    </FooterContainer>
  );
};

// Styled Components for Footer
const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #1a1a1a;
  color: white;
  text-align: center;

  a {
    color: #4a90e2;
    margin: 0 0.5rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Footer;
