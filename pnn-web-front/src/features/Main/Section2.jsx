// sections/Section2.jsx
import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import sectionCardImage from "../../assets/images/main_section_card.png";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  padding: 20px 20px;
`;

const SectionContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.2s;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
  color: #666;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.4s;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${(props) => 0.6 + props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 24px;
`;

const FeatureTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const FeatureDesc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-position-y: center;
  background-repeat: no-repeat;
  flex-direction: column;
  background-color: white;
  border-color: #ddd;
  border-width: 0.2px solid black;
  border-radius: 20px;
  flex-direction: row;
  position: relative;
  background-image: ${(prop) => `url("${prop.src}")`};
  background-size: 100%;
  @media (min-width: 1024px) {
    width: 70%;
    height: 400px;
  }
`;

const Section2 = () => {
  // 예시 데이터
  const features = [
    {
      icon: "💻",
      title: "Programming",
      description:
        "코드를 작성하며 프로젝트를 진행하여 개발자로서 역량을 키웁니다.",
    },
    {
      icon: "🚀",
      title: "Network",
      description: "함께 어울리며 즐거운 대학 생활을 함께 이루어 갑니다.",
    },
  ];

  const ImageCard = () => {
    return <CardContainer src={sectionCardImage}></CardContainer>;
  };
  return (
    <Container>
      <SectionContent>
        <Title>P&N</Title>
        <Subtitle>
          함께 어울리며 성장해나가는 인제대학교 학술동아리입니다.
        </Subtitle>
        <ImageCard />
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDesc>{feature.description}</FeatureDesc>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </SectionContent>
    </Container>
  );
};

export default Section2;
