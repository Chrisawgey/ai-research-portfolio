// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <HomeContainer>
      {/* Hero Section with Video Background */}
      <HeroSection ref={headerRef}>
        <VideoBackground autoPlay muted loop playsInline>
          <source src="/output_video.mp4" type="video/mp4" />
        </VideoBackground>
        <motion.div 
          style={{ opacity, scale }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Redefining <GradientText>AI</GradientText> in
            <br />
            <GradientText>Lip Reading</GradientText> & <GradientText>Sports Analytics</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Pioneering computer vision solutions to enhance communication and redefine sports performance analysis
          </motion.p>
          <ButtonContainer>
            <PrimaryButton 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Research
            </PrimaryButton>
            <SecondaryButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              See Demo
            </SecondaryButton>
          </ButtonContainer>
        </motion.div>
        <HeroOverlay />
      </HeroSection>

      {/* Research Overview Section */}
      <Section>
        <SectionHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionNumber>01</SectionNumber>
          <h2>Research Overview</h2>
          <SectionDivider />
        </SectionHeader>
        
        <ResearchGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <ResearchCard variants={fadeInUpVariants}>
            <CardIcon>🧠</CardIcon>
            <h3>AI Technology</h3>
            <p>Advanced machine learning models built on YOLOv8 architecture for real-time object detection and tracking in video streams.</p>
          </ResearchCard>
          
          <ResearchCard variants={fadeInUpVariants}>
            <CardIcon>👄</CardIcon>
            <h3>Lip Reading</h3>
            <p>State-of-the-art deep learning systems that analyze lip movements to enhance accessibility and communication.</p>
          </ResearchCard>
          
          <ResearchCard variants={fadeInUpVariants}>
            <CardIcon>⚽</CardIcon>
            <h3>Sports Analysis</h3>
            <p>Advanced computer vision algorithms for player tracking, movement analysis, and performance enhancement in tennis and soccer.</p>
          </ResearchCard>
        </ResearchGrid>
      </Section>

      {/* Methodology Section */}
      <SectionAlt>
        <SectionHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionNumber>02</SectionNumber>
          <h2>Materials & Methodology</h2>
          <SectionDivider />
        </SectionHeader>

        <MethodologyContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <MethodologyCard variants={fadeInUpVariants}>
            <h3>Dataset Preparation</h3>
            <p>
              Our AI models were trained using meticulously curated datasets comprising lip-reading videos and sports footage. 
              The data was professionally annotated to synchronize spoken words with lip movements and identify key objects and players in sports scenarios.
            </p>
          </MethodologyCard>
          
          <MethodologyCard variants={fadeInUpVariants}>
            <h3>Model Architecture</h3>
            <p>
              YOLOv8, an advanced object detection architecture, was selected for its efficiency and real-time performance capabilities. 
              Python served as our primary programming language, complemented by TensorFlow for deep learning model implementation and training.
            </p>
          </MethodologyCard>
          
          <MethodologyCard variants={fadeInUpVariants}>
            <h3>Data Processing</h3>
            <p>
              We leveraged platforms like Roboflow to manage and annotate data, gathering diverse datasets from soccer, tennis matches, and lip-reading videos. 
              Roboflow streamlined the preprocessing of these datasets, ensuring high-quality input for our models.
            </p>
          </MethodologyCard>
        </MethodologyContent>
      </SectionAlt>

      {/* Video Section */}
      <Section>
        <SectionHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionNumber>03</SectionNumber>
          <h2>AI in Action</h2>
          <SectionDivider />
        </SectionHeader>

        <VideoGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <VideoCard variants={fadeInUpVariants}>
            <VideoWrapper>
              <video controls>
                <source src="/output_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoWrapper>
            <VideoCaption>
              <h3>Soccer Analysis</h3>
              <p>Real-time player tracking and movement analysis in soccer matches</p>
            </VideoCaption>
          </VideoCard>

          <VideoCard variants={fadeInUpVariants}>
            <VideoWrapper>
              <video controls>
                <source src="/output_videotennis.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoWrapper>
            <VideoCaption>
              <h3>Tennis Analysis</h3>
              <p>Ball trajectory tracking and player movement detection in tennis</p>
            </VideoCaption>
          </VideoCard>
        </VideoGrid>
      </Section>

      {/* Technical Section */}
      <SectionAlt>
        <SectionHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <SectionNumber>04</SectionNumber>
          <h2>Technical Insights</h2>
          <SectionDivider />
        </SectionHeader>

        <TechnicalContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <TechCard variants={fadeInUpVariants}>
            <TechIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="8" cy="8" r="2" fill="currentColor"/>
                <circle cx="16" cy="8" r="2" fill="currentColor"/>
                <circle cx="8" cy="16" r="2" fill="currentColor"/>
                <circle cx="16" cy="16" r="2" fill="currentColor"/>
              </svg>
            </TechIcon>
            <h3>Bounding Boxes</h3>
            <p>
              Precision rectangular boxes that isolate key areas—mouth regions for lip-reading 
              and player/ball positioning for sports analytics—enabling targeted analysis and real-time tracking.
            </p>
          </TechCard>

          <TechCard variants={fadeInUpVariants}>
            <TechIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
                <circle cx="8" cy="12" r="1" fill="currentColor"/>
                <circle cx="16" cy="12" r="1" fill="currentColor"/>
              </svg>
            </TechIcon>
            <h3>Pixel Clustering</h3>
            <p>
              Sophisticated algorithms that group similar pixels to identify distinct objects or regions,
              distinguishing subtle lip movements and differentiating team jerseys in sports footage.
            </p>
          </TechCard>

          <TechCard variants={fadeInUpVariants}>
            <TechIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="6" r="2" fill="currentColor"/>
                <circle cx="15" cy="12" r="2" fill="currentColor"/>
                <circle cx="6" cy="18" r="2" fill="currentColor"/>
              </svg>
            </TechIcon>
            <h3>Projection Transformation</h3>
            <p>
              Mathematical techniques that convert 3D real-world coordinates into 2D image spaces,
              critical for accurate spatial analysis in dynamic sports environments.
            </p>
          </TechCard>
        </TechnicalContent>
      </SectionAlt>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  text-align: center;
  overflow: hidden;
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    width: 100%;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    max-width: 650px;
    margin: 0 auto 2rem;
    font-weight: 300;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(10, 15, 30, 0.85)
  );
  z-index: 1;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #4A90E2 0%, #a166ff 50%, #5271ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(90deg, #4A90E2 0%, #5271ff 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Section = styled.section`
  padding: 100px 2rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 1.5rem;
  }
`;

const SectionAlt = styled.section`
  padding: 100px 2rem;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 60px 1.5rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    margin: 0.5rem 0;
    color: #1a1a1a;
  }
`;

const SectionNumber = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #4A90E2;
  margin-bottom: 0.5rem;
`;

const SectionDivider = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4A90E2 0%, #5271ff 100%);
  margin: 1.5rem auto 0;
  border-radius: 4px;
`;

const ResearchGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ResearchCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    color: #1a1a1a;
  }
  
  p {
    color: #555;
    line-height: 1.6;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
`;

const MethodologyContent = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MethodologyCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    color: #555;
    line-height: 1.7;
  }
`;

const VideoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled(motion.div)`
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  
  video {
    width: 100%;
    display: block;
  }
`;

const VideoCaption = styled.div`
  padding: 1.5rem 0.5rem;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }
  
  p {
    color: #555;
    font-size: 1rem;
  }
`;

const TechnicalContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TechCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 1rem 0;
    color: #1a1a1a;
  }
  
  p {
    color: #555;
    line-height: 1.7;
  }
`;

const TechIcon = styled.div`
  width: 48px;
  height: 48px;
  color: #4A90E2;
`;

export default Home;