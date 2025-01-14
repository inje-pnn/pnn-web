import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import React from "../../../assets/icons/React.png";
import Next from "../../../assets/icons/Next.js.png";
import Redux from "../../../assets/icons/Redux.png";
import Tailwind from "../../../assets/icons/Tailwind CSS.png";
import Vite from "../../../assets/icons/Vite.js.png";
import FastAPI from "../../../assets/icons/FastAPI.png";
import JavaScript from "../../../assets/icons/JavaScript.png";
import MongoDB from "../../../assets/icons/MongoDB.png";
import Electron from "../../../assets/icons/Electron.png";
import PostgresSQL from "../../../assets/icons/PostgresSQL.png";
import Spring from "../../../assets/icons/Spring.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  overflow: hidden;
  h1 {
    color: #667EEA;
  }
  h2 {
    margin-top: 50px;
    color: gray;
  }
`;

const SlideFrame = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin-top: 80px;
`;

const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transform: translateX(${props => props.$position}px);
  transition: transform 0.5s ease;
`;

const IconContainer = styled.div`
  min-width: 250px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  h1 {
    color: white;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const TechStack = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    { icon: React, name: 'React' },
    { icon: Next, name: 'Next.js' },
    { icon: Redux, name: 'Redux' },
    { icon: Tailwind, name: 'Tailwind CSS' },
    { icon: Vite, name: 'Vite' },
    { icon: FastAPI, name: 'FastAPI' },
    { icon: JavaScript, name: 'JavaScript' },
    { icon: MongoDB, name: 'MongoDB' },
    { icon: Electron, name: 'Electron' },
    { icon: PostgresSQL, name: 'PostgreSQL' },
    { icon: Spring, name: 'Spring' }
  ];

  useEffect(() => {
    let animationFrameId;
    let speed = 1; 

    const animate = () => {
      if (!isHovered && trackRef.current) {
        setPosition(prev => {
          const newPosition = prev - speed;
          const trackWidth = trackRef.current.offsetWidth / 2;
          
          if (-newPosition >= trackWidth) {
            return 0;
          }
          return newPosition;
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <Container>
      <h1>FrameWork & TechStack</h1>
      <h2>저희는 능력 향상을 위해 프로젝트를 진행할때마다 늘 새로운 프레임워크와 기술을 도입하려
        노력합니다.
      </h2>
      <SlideFrame
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SlideTrack ref={trackRef} $position={position}>

          {techStack.map((tech, index) => (
            <IconContainer key={`first-${index}`}>
              <img src={tech.icon} alt={tech.name} />
              <h1>{tech.name}</h1>
            </IconContainer>
          ))}

          {techStack.map((tech, index) => (
            <IconContainer key={`second-${index}`}>
              <img src={tech.icon} alt={tech.name} />
              <h1>{tech.name}</h1>
            </IconContainer>
          ))}

          {techStack.map((tech, index) => (
            <IconContainer key={`third-${index}`}>
              <img src={tech.icon} alt={tech.name} />
              <h1>{tech.name}</h1>
            </IconContainer>
          ))}
        </SlideTrack>
      </SlideFrame>
    </Container>
  );
};

export default TechStack;