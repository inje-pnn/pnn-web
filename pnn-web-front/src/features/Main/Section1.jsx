// sections/Section1.jsx
import styled, { keyframes } from "styled-components";
import wire from "../../assets/images/wire.png";
import { useEffect, useState } from "react";

// 애니메이션 효과
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100px);
  }
  70% {
    opacity: 1;
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

// 모바일용 애니메이션
const fadeInUpMobile = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  70% {
    opacity: 1;
    transform: translateX(-50%) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(237, 235, 236, 1);
  position: relative;
  overflow: hidden;
`;

const TitleText = styled.h1`
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  text-align: center;
  opacity: 0;
  animation: ${fadeInUpMobile} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  width: 90%;
  z-index: 10;

  @media (min-width: 480px) {
    font-size: 70px;
  }

  @media (min-width: 768px) {
    font-size: 90px;
    top: 30vh;
    animation: ${fadeInUp} 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  @media (min-width: 1024px) {
    font-size: 110px;
    top: 25vh;
  }

  @media (min-width: 1440px) {
    font-size: 130px;
  }
`;

const WireImage = styled.img`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: auto;
  z-index: 5;

  @media (min-width: 768px) {
    width: 500px;
    bottom: -100px;
  }

  @media (min-width: 1024px) {
    width: 600px;
    bottom: -100px;
  }

  @media (min-width: 2500px) {
    width: 800px;
    bottom: -100px;
  }
`;

const IconSlider = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 5;

  @media (min-width: 768px) {
    height: 70px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

const IconFrame = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 80%;
    gap: 30px;
  }

  @media (min-width: 1024px) {
    width: 70%;
    gap: 40px;
  }
`;

// 예시 아이콘 아이템
const IconItem = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    min-width: 50px;
    height: 50px;
  }
`;

const Section1 = () => {
  // 화면 크기에 따른 동적 처리를 위한 상태
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 실행
    handleResize();

    // 리사이즈 이벤트 리스너
    window.addEventListener("resize", handleResize);

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 아이콘 예시 데이터
  const icons = Array(10).fill(null);

  return (
    <Container>
      <TitleText>
        P&N에 오신걸
        <br />
        환영합니다
      </TitleText>
      <WireImage src={wire} alt="와이어 이미지" />
      <IconSlider>
        <IconFrame>
          {icons.map((_, index) => (
            <IconItem key={index} />
          ))}
        </IconFrame>
      </IconSlider>
    </Container>
  );
};

export default Section1;
