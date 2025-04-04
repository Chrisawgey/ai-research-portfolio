// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, image }) => {
  return (
    <Card
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <CardImage>
        <img src={image} alt={title} />
        <ImageOverlay />
      </CardImage>
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        <TechTags>
          {tech.map((item, index) => (
            <TechTag key={index}>{item}</TechTag>
          ))}
        </TechTags>
        
        <CardButton>
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </CardButton>
      </CardContent>
    </Card>
  );
};

// Styled Components
const Card = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Card}:hover img {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%);
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1e293b;
`;

const CardDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #f1f5f9;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 1rem;
`;

const CardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #3b82f6;
  font-weight: 600;
  padding: 0.5rem 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #2563eb;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

export default ProjectCard;