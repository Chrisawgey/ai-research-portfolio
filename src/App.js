// src/App.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #334155;
    background-color: #ffffff;
    line-height: 1.5;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  /* Add custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Footer />
    </>
  );
}

export default App;