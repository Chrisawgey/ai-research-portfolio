// src/components/Home.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactSection from './ContactSection';
import ProjectCard from './ProjectCard';
import TypingEffect from './TypingEffect';
import CodeRainBackground from './CodeRainBackground';
import GlitchText from './GlitchText';

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const terminalRef = useRef(null);
  
  useEffect(() => {
    // Lazy load videos when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === videoRef1.current) {
            videoRef1.current.src = "/output_video.mp4";
            videoRef1.current.load();
          } else if (entry.target === videoRef2.current) {
            videoRef2.current.src = "/output_videotennis.mp4";
            videoRef2.current.load();
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Store references to DOM nodes
    const video1Element = videoRef1.current;
    const video2Element = videoRef2.current;
    
    if (video1Element) observer.observe(video1Element);
    if (video2Element) observer.observe(video2Element);
    
    return () => {
      if (video1Element) observer.unobserve(video1Element);
      if (video2Element) observer.unobserve(video2Element);
    };
  }, []);
  
  // Terminal effect
  useEffect(() => {
    const showTerminal = setTimeout(() => {
      setIsTerminalVisible(true);
    }, 1000);
    
    return () => clearTimeout(showTerminal);
  }, []);
  
  const terminalLines = [
    { text: "> Initializing AI research interface...", delay: 500 },
    { text: "> Loading neural network modules...", delay: 1200 },
    { text: "> Connecting to sports analytics database...", delay: 2000 },
    { text: "> Processing visual recognition algorithms...", delay: 2800 },
    { text: "> System ready.", delay: 3600 }
  ];

  return (
    <>
      <HeroSection ref={targetRef}>
        <motion.div
          style={{ opacity, scale }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Terminal visible={isTerminalVisible} ref={terminalRef}>
              {terminalLines.map((line, index) => (
                <TerminalLine 
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: line.delay / 1000, duration: 0.3 }}
                >
                  {line.text}
                </TerminalLine>
              ))}
            </Terminal>
            
            <GlitchHeading>
              Future of AI in <GradientText>Lip Reading</GradientText> & <GradientText>Sports Analytics</GradientText>
            </GlitchHeading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="typing-container"
          >
            <TypingText>
              <TypingEffect 
                texts={[
                  "Pioneering AI solutions to enhance communication.",
                  "Decoding speech through visual lip patterns.",
                  "Redefining sports performance analytics.",
                  "Building the future of computer vision."
                ]} 
                speed={50}
              />
            </TypingText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <ScrollButton 
              href="#research"
              aria-label="Scroll to research section"
            >
              <span>Explore Research</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ScrollButton>
          </motion.div>
        </motion.div>
        <CodeRainBackground />
      </HeroSection>

      <ProjectsSection id="research">
        <SectionTitleWithGlitch>
          <GlitchText text="Research Projects" />
        </SectionTitleWithGlitch>
        
        <ProjectsGrid>
          <ProjectCard 
            title="Lip Reading AI"
            description="Advanced AI model that interprets speech through lip movements, enhancing accessibility & communication."
            tech={["Python", "TensorFlow", "Computer Vision"]}
            image="/gif.gif"
          />
          <ProjectCard 
            title="Soccer Analytics"
            description="Real-time tracking system for soccer that identifies players, ball movement, and strategic patterns."
            tech={["YOLOv8", "Object Detection", "Python"]}
            image="/soccer-placeholder.jpg"
          />
          <ProjectCard 
            title="Tennis Analysis"
            description="Automated tennis analytics platform that tracks player movements, ball trajectory, and shot analysis."
            tech={["Computer Vision", "Object Tracking", "React"]}
            image="/tennis-placeholder.jpg"
          />
        </ProjectsGrid>
      </ProjectsSection>

      <ResearchSection>
        <SectionTitle>Research <GradientSpan>Methodology</GradientSpan></SectionTitle>
        <ResearchContent>
          <ResearchText>
            <h3>Data Collection & Preparation</h3>
            <p>
              Our AI models were developed using meticulously curated datasets comprising lip-reading videos and sports footage. Each frame was annotated to synchronize spoken words with lip movements and identify key objects and players.
            </p>
            
            <h3>Model Architecture</h3>
            <p>
              We selected YOLOv8 for its exceptional real-time performance and accuracy, making it ideal for high-demand applications in both lip-reading and sports analytics. Custom modifications were implemented to enhance performance for specific use cases.
            </p>
            
            <h3>Technology Stack</h3>
            <p>
              Python was our primary language, supported by TensorFlow for deep learning. The front-end interface was built with React to provide a responsive and interactive user experience for uploading videos and viewing real-time detection results.
            </p>
            
            <ButtonLink href="#videos">See AI in Action</ButtonLink>
          </ResearchText>
          <TechStackVisual>
            <TechItem>
              <TechIcon>🧠</TechIcon>
              <TechName>Neural Networks</TechName>
            </TechItem>
            <TechItem>
              <TechIcon>🔍</TechIcon>
              <TechName>Computer Vision</TechName>
            </TechItem>
            <TechItem>
              <TechIcon>🐍</TechIcon>
              <TechName>Python</TechName>
            </TechItem>
            <TechItem>
              <TechIcon>⚛️</TechIcon>
              <TechName>React</TechName>
            </TechItem>
            <TechItem>
              <TechIcon>📊</TechIcon>
              <TechName>TensorFlow</TechName>
            </TechItem>
            <TechItem>
              <TechIcon>🎯</TechIcon>
              <TechName>YOLOv8</TechName>
            </TechItem>
          </TechStackVisual>
        </ResearchContent>
      </ResearchSection>

      <VideoSection id="videos">
        <SectionTitle>AI in <GradientSpan>Action</GradientSpan></SectionTitle>
        <p className="section-description">
          See how our AI models detect and track objects in real-time across different sports scenarios
        </p>
        
        <VideoGrid>
          <VideoCard>
            <VideoWrapper>
              <video ref={videoRef1} controls preload="none" poster="/soccer-video-poster.jpg">
                <source type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoWrapper>
            <VideoInfo>
              <h3>Soccer Analysis</h3>
              <p>Object detection tracking players and ball movement in real-time during a soccer match</p>
            </VideoInfo>
          </VideoCard>
          
          <VideoCard>
            <VideoWrapper>
              <video ref={videoRef2} controls preload="none" poster="/tennis-video-poster.jpg">
                <source type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoWrapper>
            <VideoInfo>
              <h3>Tennis Analysis</h3>
              <p>AI-powered tracking of player positioning, ball trajectory, and court positioning</p>
            </VideoInfo>
          </VideoCard>
        </VideoGrid>
      </VideoSection>

      <TechnicalSection>
        <SectionTitle>Technical <GradientSpan>Breakdown</GradientSpan></SectionTitle>
        
        <TechBlocks>
          <TechBlock>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3><span>01</span> Bounding Boxes</h3>
              <p>
                Rectangular identifiers that isolate specific regions of interest. In lip-reading, they focus on mouth movements; in sports, they track players and ball trajectories with precision.
              </p>
            </motion.div>
          </TechBlock>
          
          <TechBlock>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3><span>02</span> Pixel Clustering</h3>
              <p>
                Groups similar pixels to identify distinct objects. This technique helps distinguish subtle lip movements and differentiate players by team jersey in complex sports environments.
              </p>
            </motion.div>
          </TechBlock>
          
          <TechBlock>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3><span>03</span> Neural Networks</h3>
              <p>
                Multi-layered learning systems that process visual data, recognize patterns, and make predictions with increasing accuracy through continuous training.
              </p>
            </motion.div>
          </TechBlock>
          
          <TechBlock>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3><span>04</span> Real-time Processing</h3>
              <p>
                Algorithms optimized for speed and efficiency, enabling instant analysis of video feeds for immediate feedback in both lip-reading and sports applications.
              </p>
            </motion.div>
          </TechBlock>
        </TechBlocks>
      </TechnicalSection>

      <ContactSection />
    </>
  );
};

// Styled Components
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 0 2rem;
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    color: white;
  }
  
  .typing-container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
`;

const GradientSpan = styled.span`
  color: #3b82f6;
`;

const Terminal = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 1rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  text-align: left;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  border: 1px solid rgba(59, 130, 246, 0.3);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const TerminalLine = styled(motion.div)`
  color: #9fef00;
  margin-bottom: 0.5rem;
`;

const GlitchHeading = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

const TypingText = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
`;

const ScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  color: white;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  svg {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-6px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SectionTitleWithGlitch = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
  position: relative;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ResearchSection = styled.section`
  padding: 5rem 2rem;
  background: #fff;
`;

const ResearchContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResearchText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1e293b;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #475569;
    line-height: 1.6;
  }
`;

const ButtonLink = styled.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
`;

const TechStackVisual = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-content: center;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TechIcon = styled.span`
  font-size: 2rem;
`;

const TechName = styled.span`
  font-weight: 500;
  color: #334155;
`;

const VideoSection = styled.section`
  padding: 5rem 2rem;
  background: #0f172a;
  color: white;
  
  .section-description {
    text-align: center;
    max-width: 800px;
    margin: -1rem auto 3rem;
    color: #cbd5e1;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #cbd5e1;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const TechnicalSection = styled.section`
  padding: 5rem 2rem;
  background: #f1f5f9;
`;

const TechBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TechBlock = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background: #3b82f6;
      color: white;
      border-radius: 0.5rem;
      margin-right: 0.75rem;
      font-size: 0.9rem;
      font-weight: 700;
    }
  }
  
  p {
    color: #64748b;
    line-height: 1.6;
  }
`;

export default Home;