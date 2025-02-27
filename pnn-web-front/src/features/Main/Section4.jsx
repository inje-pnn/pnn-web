// sections/Section3.jsx
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

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
  background-color: #f0f0f0;
  position: relative;
  padding: 0 20px;
`;

const SectionContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
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

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 50px 0;
  width: 100%;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  width: 100%;
  max-width: 260px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${(props) => 0.4 + props.index * 0.15}s;

  @media (min-width: 480px) {
    width: calc(50% - 15px);
  }

  @media (min-width: 1024px) {
    width: calc(25% - 23px);
  }
`;

const StatValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: #555;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin-top: 20px;
  padding: 20px 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #ddd;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${(props) => 0.6 + props.index * 0.2}s;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #667eea;
  position: absolute;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 45%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineYear = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 8px;
`;

const TimelineTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const TimelineDesc = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const Section4 = () => {
  // 성과 통계 데이터
  const stats = [
    { value: "10K+", label: "사용자" },
    { value: "50+", label: "프로젝트" },
    { value: "99%", label: "만족도" },
    { value: "24/7", label: "고객지원" },
  ];

  // 타임라인 데이터
  const timeline = [
    {
      year: "2020",
      title: "P&N 설립",
      description: "혁신적인 서비스를 제공하기 위해 P&N이 설립되었습니다..",
      position: "right",
    },
    {
      year: "2021",
      title: "주요 서비스 출시",
      description:
        "첫 번째 주요 서비스를 성공적으로 출시하여 사용자들의 호평을 받았습니다.",
      position: "left",
    },
    {
      year: "2022",
      title: "사업 확장",
      description:
        "새로운 분야로 사업을 확장하며 더 다양한 서비스를 제공하기 시작했습니다.",
      position: "right",
    },
    {
      year: "2023",
      title: "글로벌 진출",
      description:
        "국내를 넘어 글로벌 시장으로 진출하여 세계적인 기업으로 성장하고 있습니다.",
      position: "left",
    },
  ];

  return (
    <Container>
      <SectionContent>
        <Title>P&N의 성과</Title>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard key={index} index={index}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>

        <TimelineContainer>
          {timeline.map((item, index) => (
            <TimelineItem key={index} position={item.position} index={index}>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDesc>{item.description}</TimelineDesc>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </SectionContent>
    </Container>
  );
};

export default Section4;
