// src/components/GlitchText.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const GlitchText = ({ text, className }) => {
  return (
    <GlitchContainer className={className}>
      <GlitchLayer className="glitch-text">{text}</GlitchLayer>
      <GlitchLayerBefore className="glitch-text">{text}</GlitchLayerBefore>
      <GlitchLayerAfter className="glitch-text">{text}</GlitchLayerAfter>
    </GlitchContainer>
  );
};

// Keyframes for the glitch effect
const glitchAnim = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  100% {
    transform: translate(0);
  }
`;

const glitchAnimBefore = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(5px, -5px);
  }
  40% {
    transform: translate(5px, 5px);
  }
  60% {
    transform: translate(-5px, 5px);
  }
  80% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0);
  }
`;

const glitchAnimAfter = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, -3px);
  }
  40% {
    transform: translate(-3px, 3px);
  }
  60% {
    transform: translate(3px, -3px);
  }
  80% {
    transform: translate(3px, 3px);
  }
  100% {
    transform: translate(0);
  }
`;

// Styled Components
const GlitchContainer = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover .glitch-text {
    animation-play-state: running;
  }
`;

const GlitchLayer = styled.span`
  position: relative;
  display: inline-block;
  
  &:hover {
    animation: ${glitchAnim} 0.4s linear infinite;
    animation-play-state: paused;
  }
`;

const GlitchLayerBefore = styled.span`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -1px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: ${glitchAnimBefore} 0.4s linear infinite;
  animation-play-state: paused;
  background: transparent;
  overflow: hidden;
`;

const GlitchLayerAfter = styled.span`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: 1px 0 #00fff9;
  clip: rect(44px, 450px, 56px, 0);
  animation: ${glitchAnimAfter} 0.4s linear infinite;
  animation-play-state: paused;
  background: transparent;
  overflow: hidden;
`;

export default GlitchText;