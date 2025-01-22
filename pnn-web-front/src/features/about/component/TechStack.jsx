import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactIcon from "../../../assets/icons/React.png";
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
  padding: 40px 0;

  h1 {
    color: #667EEA;
  }
  
  h2 {
    margin-top: 50px;
    color: gray;
    text-align: center;
    max-width: 800px;
  }
`;
const StyledSlider = styled(Slider)`
  width: 90%;
  margin-top: 80px;
`;

const IconContainer = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;

  img {
    display: inline; 
    width: 50%; 
    height: auto;
  }

  h1 {
    margin-top: 10px;
    font-size: 18px;
    color: white;
  }
`;



const TechStack = () => {
  const techStack = [
    { icon: ReactIcon, name: 'React' },
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
  };

  return (
    <Container>
      <h1>FrameWork & TechStack</h1>
      <h2>
        저희는 능력 향상을 위해 프로젝트를 진행할때마다 늘 새로운 프레임워크와 기술을 도입하려 노력합니다..
      </h2>
      <StyledSlider {...settings}>
        {techStack.map((tech, index) => (
          <IconContainer key={index}>
            <img src={tech.icon} alt={tech.name} />
            <h1>{tech.name}</h1>
          </IconContainer>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default TechStack;