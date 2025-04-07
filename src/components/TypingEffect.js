// src/components/TypingEffect.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const TypingEffect = ({ texts, speed = 20, delay = 1000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    // Handle typing and deleting effect
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing mode
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          const randomSpeed = speed - Math.random() * 10;
          timeout = setTimeout(handleTyping, randomSpeed);
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, delay);
        }
      } else {
        // Deleting mode
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          const randomSpeed = speed / 2 - Math.random() * 5;
          timeout = setTimeout(handleTyping, randomSpeed);
        } else {
          setIsDeleting(false);
          // Move to next text
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          timeout = setTimeout(handleTyping, 300);
        }
      }
    };
    
    // Start the typing effect
    timeout = setTimeout(handleTyping, 300);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay]);

  return (
    <TypingContainer>
      <TypingText>{currentText}</TypingText>
      <Cursor />
    </TypingContainer>
  );
};

// Animations and Styled Components
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const TypingContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const TypingText = styled.span`
  display: inline-block;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: currentColor;
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

export default TypingEffect;