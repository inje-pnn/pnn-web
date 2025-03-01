// sections/Section1.jsx - 모바일 최적화
import styled from "styled-components";
import wire from "../../assets/images/wire.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(237, 235, 236, 1);
  position: relative;
  overflow: hidden;
  padding: 0 15px;

  /* 모바일에서 패딩 및 컨텐츠 정렬 조정 */
  @media (max-width: 768px) {
    height: auto;
    min-height: 100%;
    height: 100dvh;
    justify-content: flex-start;
  }
`;

const TitleText = styled.h1`
  position: relative; /* 모바일에서는 절대 위치 대신 상대 위치 사용 */
  top: 150px;
  left: 0;
  transform: none;
  font-size: 50px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  text-align: center;
  width: 90%;
  z-index: 1111;
  margin: 0 auto 50px auto; /* 상대 위치로 마진 추가 */
  color: #333;

  /* 모바일에서 위치 조정 */
  @media (max-width: 480px) {
    font-size: 42px;
    width: 95%;
    /* margin-bottom: 40px; */
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 50px;
    margin-bottom: 45px;
  }

  /* 태블릿 이상에서는 원래 절대 위치로 복원 */
  @media (min-width: 768px) {
    position: absolute;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }

  @media (min-width: 768px) {
    font-size: 90px;
    top: 30vh;
  }

  @media (min-width: 1024px) {
    font-size: 110px;
    top: 18vh;
  }

  @media (min-width: 1440px) {
    font-size: 130px;
  }
`;

const WireImage = styled.img`
  position: relative; /* 모바일에서는 절대 위치 대신 상대 위치 사용 */
  bottom: auto;
  left: auto;
  transform: none;
  width: 300px;
  height: auto;
  z-index: 5;
  margin-top: auto; /* 하단에 배치하기 위해 자동 마진 사용 */

  /* 모바일에서 크기 및 위치 조정 */
  @media (max-width: 480px) {
    width: 250px;
  }

  /* 태블릿 이상에서는 원래 절대 위치로 복원 */
  @media (min-width: 768px) {
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0;
  }

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
  -webkit-overflow-scrolling: touch; /* 모바일에서 부드러운 스크롤 */

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

const Film = styled.div`
  display: flex;
  position: absolute;
  z-index: 5555;
  background-color: white;
  opacity: 0.3;
  width: 100vw;
  height: 100vh;
`;
// 모바일 전용 상단 여백 컴포넌트
// 모바일 전용 상단 여백 제거 - 컨테이너에 패딩으로 대체

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
      {/* <IconSlider>
        <IconFrame>
          {icons.map((_, index) => (
            <IconItem key={index} />
          ))}
        </IconFrame>
      </IconSlider> */}
    </Container>
  );
};

export default Section1;
