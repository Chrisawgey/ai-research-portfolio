// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the Future of AI <br /> <span>Lip Reading & Sports Analytics</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Pioneering AI solutions to enhance communication and redefine sports performance.
        </motion.p>
      </Header>

      <GifSection>
        <motion.img
          src="/gif.gif"
          alt="Moving Lips GIF"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
      </GifSection>

      <ResearchSection>
        <h2>Materials and Methodology</h2>
        <p>
          Our AI object detection model was developed using a comprehensive dataset comprising lip-reading videos and sports footage. The dataset was meticulously annotated to synchronize spoken words with lip movements and identify key objects and players in sports. YOLOv8, an advanced object detection architecture, was selected for its efficiency and real-time performance, making it ideal for high-demand applications in both lip-reading and sports analytics.
        </p>
        <p>
          Python was chosen as the primary programming language due to its flexibility and extensive library support, while TensorFlow was utilized for deep learning model training. For a seamless user experience, a React-based front-end interface allows users to interact with the AI models, upload videos, and view real-time detection results.
        </p>
        <p>
          We leveraged platforms like Roboflow to manage and annotate data, gathering diverse datasets from soccer, tennis matches, and lip-reading videos. Roboflow streamlined the preprocessing of these datasets, ensuring high-quality input for our models.
        </p>
      </ResearchSection>

      {/* Video Section */}
      <VideoSection>
        <h2>AI in Action: Soccer and Tennis Analysis</h2>
        <VideoWrapper>
          <div>
            <video controls>
              <source src="/output_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <VideoCaption>Soccer Analysis using AI Object Detection</VideoCaption>
          </div>
          <div>
            <video controls>
              <source src="/output_videotennis.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <VideoCaption>Tennis Analysis using AI Object Detection</VideoCaption>
          </div>
        </VideoWrapper>
      </VideoSection>

      {/* Technical Info Section */}
      <TechnicalSection>
        <h2>Technical Processes in Lip-Reading and Sports Analysis</h2>
        <p>
          Developing an object detection AI for lip-reading and real-time sports analytics in tennis and soccer involves several intricate technical processes. Key techniques include understanding and implementing bounding boxes, pixel clustering, projection transformation, and pixel counting.
        </p>
        <p>
          <strong>Bounding Boxes:</strong> These rectangular boxes are essential for object detection tasks. In lip-reading, bounding boxes isolate the mouth region from the rest of the face, improving accuracy by focusing on the relevant lip movements. In sports analytics, bounding boxes track the ball, players, and other critical elements in real time. For example, in tennis, bounding boxes help identify the ball’s trajectory, while in soccer, they assist in tracking player movements and ball possession.
        </p>
        <p>
          <strong>Pixel Clustering:</strong> This technique groups pixels with similar characteristics (e.g., color and intensity) to identify distinct objects or regions. By clustering pixels that represent the lips, the AI distinguishes subtle lip movements from other facial expressions. This is also applied in sports analytics, where pixel clustering helps the AI differentiate team jerseys during soccer matches, making it easier to track players.
        </p>
      </TechnicalSection>

    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Header = styled.div`
  h1 {
    font-size: 3rem;
    color: #1a1a1a;
    span {
      color: #4a90e2;
    }
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #555;
  }
`;

const GifSection = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
    }
  }
`;

const ResearchSection = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  margin: 3rem 0;
  border-radius: 10px;
  text-align: left;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const VideoSection = styled.div`
  padding: 2rem;
  text-align: center;
  margin: 3rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;

  div {
    flex: 1;
    min-width: 300px;
  }

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const VideoCaption = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #666;
`;

const TechnicalSection = styled.div`
  padding: 2rem;
  background-color: #e6f7ff;
  border-radius: 10px;
  text-align: left;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  strong {
    color: #1a73e8;
  }
`;

export default Home;
