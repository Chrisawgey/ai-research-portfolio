// src/components/CodeRainBackground.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CodeRainBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match parent container
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix/code rain effect
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the current y position of each column
    const drops = Array(columns).fill(1);
    
    // Draw the animation
    const draw = () => {
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the text style
      ctx.fillStyle = '#3b82f6';
      ctx.font = `${fontSize}px monospace`;
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Select a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomly reset a column if it's at the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };
    
    // Set up animation loop
    const interval = setInterval(draw, 40);
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <StyledCanvas ref={canvasRef} />;
};

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
`;

export default CodeRainBackground;