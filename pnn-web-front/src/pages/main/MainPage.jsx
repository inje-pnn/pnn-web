// MainPage.jsx - 모바일 최적화
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Section1 from "../../features/Main/Section1";
import Section2 from "../../features/Main/Section2";
import Section3 from "../../features/Main/Section3";
import Section4 from "../../features/Main/Section4";
import Footer from "../../widgets/layout/Footer/Footer";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  background-color: rgba(237, 235, 236, 1);

  /* 애니메이션 제거 */

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 모바일 뷰 최적화 */
  @media (max-width: 768px) {
    height: 100%; /* 모바일에서는 높이 제한 없애기 */
    overflow-x: hidden; /* 가로 스크롤 방지 */
    display: flex;
    flex-direction: column;
  }
`;

const Section = styled.section`
  width: 100%;
  position: relative;

  /* PC 환경에서는 이전 스타일 유지, Section4도 auto로 변경 */
  height: ${(props) =>
    props.id === "section3" || props.id === "section4" ? "auto" : "100vh"};
  min-height: ${(props) =>
    props.id === "section3" || props.id === "section4" ? "100vh" : "auto"};
  overflow: ${(props) =>
    props.id === "section3" || props.id === "section4" ? "visible" : "hidden"};

  /* 모바일 환경에서는 모든 섹션 높이 자동 조정 */
  @media (max-width: 768px) {
    height: auto;
    min-height: ${(props) =>
      props.id === "section1" || props.id === "section2" ? "100vh" : "auto"};
    padding: ${(props) =>
      props.id === "section3" || props.id === "section4" ? "40px 0" : "0"};
    overflow: visible; /* 모든 섹션에서 오버플로우 제거 */
    display: flex; /* 모바일에서 플렉스 레이아웃 사용 */
    flex-direction: column; /* 세로 방향으로 정렬 */
  }
`;

// 페이지 내비게이션
const PageNavigation = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    right: 10px;
    gap: 12px;
    /* 모바일에서 탭 영역 확대 */
    & > div {
      padding: 5px;
      margin: -5px;
    }
  }
`;

const NavDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    width: 15px;
    height: 15px;
  }

  /* 모바일에서는 더 작게 */
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

// 모바일에서 푸터 위치 조정
const FooterWrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    z-index: 10;
  }
`;

export const MainPage = () => {
  // 현재 활성화된 섹션
  const [activeSection, setActiveSection] = useState(0);
  // 모바일 감지
  const [isMobile, setIsMobile] = useState(false);

  // 페이지 컨테이너 ref
  const pageContainerRef = useRef(null);

  // 섹션 refs
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 스크롤 이벤트 핸들러 - 모바일 최적화
  useEffect(() => {
    const handleScroll = () => {
      if (!pageContainerRef.current) return;

      const scrollPosition = pageContainerRef.current.scrollTop;
      const windowHeight = window.innerHeight;

      // 현재 보이는 섹션 확인
      let currentSection = 0;

      // 모바일에서는 스크롤 위치에 따라 다르게 감지
      const threshold = isMobile ? windowHeight / 3 : windowHeight / 2;

      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return;

        const sectionTop = ref.current.offsetTop;

        // 모바일에서 섹션3과 섹션4는 높이가 가변적이므로 특별 처리
        if (isMobile && (index === 2 || index === 3)) {
          const sectionHeight = ref.current.offsetHeight;
          const sectionMiddle = sectionTop + sectionHeight / 2;

          // 스크롤 위치가 섹션 중간점 근처에 있으면 해당 섹션 활성화
          if (Math.abs(scrollPosition - sectionMiddle) < sectionHeight / 2) {
            currentSection = index;
          }
        } else if (scrollPosition >= sectionTop - threshold) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    const containerElement = pageContainerRef.current;
    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);

      // 초기 스크롤 위치에 따른 활성 섹션 설정
      setTimeout(handleScroll, 100);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]); // isMobile 의존성 추가

  // 섹션으로 스크롤하는 함수 - 모바일 최적화
  const scrollToSection = (index) => {
    if (sectionRefs[index]?.current && pageContainerRef.current) {
      // 모바일에서는 오프셋 약간 조정
      let offset = 0;
      if (isMobile && index > 0) {
        offset = -20; // 상단 여백 확보
      }

      pageContainerRef.current.scrollTo({
        top: sectionRefs[index].current.offsetTop + offset,
        behavior: "smooth", // 부드러운 스크롤링 적용
      });
    }
  };

  return (
    <PageContainer ref={pageContainerRef}>
      <Section ref={sectionRefs[0]} id="section1">
        <Section1 />
      </Section>

      <Section ref={sectionRefs[1]} id="section2">
        <Section2 />
      </Section>

      <Section ref={sectionRefs[2]} id="section3">
        <Section3 />
      </Section>

      <Section ref={sectionRefs[3]} id="section4">
        <Section4 />
      </Section>

      <PageNavigation>
        {[0, 1, 2, 3].map((index) => (
          <NavDot
            key={index}
            active={activeSection === index}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </PageNavigation>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainer>
  );
};

export default MainPage;
