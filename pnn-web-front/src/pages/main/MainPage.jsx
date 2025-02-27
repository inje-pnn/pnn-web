// MainPage.jsx
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Section1 from "../../features/Main/Section1";
import Section2 from "../../features/Main/Section2";
import Section3 from "../../features/Main/Section3";
import Section4 from "../../features/Main/Section4";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
  background-color: rgba(237, 235, 236, 1);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
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
  }
`;

const NavDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;

export const MainPage = () => {
  // 현재 활성화된 섹션
  const [activeSection, setActiveSection] = useState(0);

  // 페이지 컨테이너 ref
  const pageContainerRef = useRef(null);

  // 섹션 refs
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (!pageContainerRef.current) return;

      const scrollPosition = pageContainerRef.current.scrollTop;
      const windowHeight = window.innerHeight;

      // 현재 보이는 섹션 확인
      let currentSection = 0;
      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return;

        const sectionTop = ref.current.offsetTop;
        if (scrollPosition >= sectionTop - windowHeight / 3) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    const containerElement = pageContainerRef.current;
    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (index) => {
    if (sectionRefs[index]?.current && pageContainerRef.current) {
      pageContainerRef.current.scrollTo({
        top: sectionRefs[index].current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageContainer ref={pageContainerRef}>
      <Section ref={sectionRefs[0]}>
        <Section1 />
      </Section>

      <Section ref={sectionRefs[1]}>
        <Section2 />
      </Section>

      <Section ref={sectionRefs[2]}>
        <Section3 />
      </Section>

      <Section ref={sectionRefs[3]}>
        <Section4 />
      </Section>

      {/* <Section ref={sectionRefs[4]}>
        <Section5 />
      </Section> */}

      <PageNavigation>
        {[0, 1, 2, 3, 4].map((index) => (
          <NavDot
            key={index}
            active={activeSection === index}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </PageNavigation>
    </PageContainer>
  );
};

export default MainPage;
