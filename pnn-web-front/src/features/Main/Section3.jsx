import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import pnn1 from "../../assets/images/pnn1.jpeg";
import pnn2 from "../../assets/images/pnn2.jpeg";
import pnn3 from "../../assets/images/pnn3.jpeg";
import pnn4 from "../../assets/images/pnn4.jpeg";
import pnn5 from "../../assets/images/pnn5.jpeg";
import pnn6 from "../../assets/images/pnn6.jpeg";

// IntersectionObserver 훅 구현
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* center 대신 flex-start 사용 */
  background-color: white;
  position: relative;
  padding: 40px 20px; /* 상하 패딩 추가 */
  /* overflow-y 스크롤 제거 */
  overflow: visible;
  margin-top: -40px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }

  @media (min-width: 1200px) {
    padding: 80px 60px;
  }
`;

const AnimatedSection = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
  margin-bottom: 100px;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:last-child {
    margin-bottom: 40px; /* 마지막 섹션 마진 조정 */
  }
`;

const SectionTitle = styled.h2`
  color: #2d3748;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionDescription = styled.p`
  color: #718096;
  font-size: 1rem;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  word-break: keep-all;
  padding: 0 20px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 0;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

// 나머지 스타일 컴포넌트는 동일
const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  @media (min-width: 1200px) {
    height: 220px;
  }
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

const CardTitle = styled.h3`
  color: #2d3748;
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CardText = styled.p`
  color: #718096;
  font-size: 1rem;
  line-height: 1.6;
  word-break: keep-all;
`;

const ImageBox = ({ img, title, text }) => {
  return (
    <Card>
      <CardImage>
        <img src={img} alt={title} />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContent>
    </Card>
  );
};

const Section3 = () => {
  const [section1Ref, section1Visible] = useIntersectionObserver({
    threshold: 0.1, // 10%만 보여도 활성화
  });
  const [section2Ref, section2Visible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <Container>
      <ContentContainer>
        <AnimatedSection
          ref={section1Ref}
          className={section1Visible ? "visible" : ""}
        >
          <SectionTitle>🥳 연례행사</SectionTitle>
          <SectionDescription>
            매 학기 MT를 통해 신입 부원들과 기존 부원들이 하나 되는 시간을
            가지며, 매년 말 학술제에서는 우리의 성장을 뽐내고 있습니다. 더불어
            자체 해커톤을 개최하여 다양한 팀 프로젝트를 진행하며, 서로의 기술과
            아이디어를 나누는 즐거운 개발 문화를 만들어가고 있습니다.
          </SectionDescription>
          <CardGrid>
            <ImageBox
              img={pnn2}
              title="MT"
              text="매 학기 초 진행되는 MT에서는 선배들과 신입 부원들이 함께 어울리며 끈끈한 동아리 문화를 만들어갑니다."
            />
            <ImageBox
              img={pnn3}
              title="학술제"
              text="매년 말 컴퓨터공학부 동아리들의 축제! 1년간의 성과를 공유하고 서로의 발전을 평가하는 뜻깊은 연례행사입니다."
            />
            <ImageBox
              img={"src/assets/icons/framworks/hackerton.png"}
              title="해커톤"
              text="동아리가 주최하는 해커톤에서는 밤새 코딩하며 아이디어를 현실로 만드는 열정 가득한 순간을 경험할 수 있습니다."
            />
          </CardGrid>
        </AnimatedSection>

        <AnimatedSection
          ref={section2Ref}
          className={section2Visible ? "visible" : ""}
        >
          <SectionTitle>📖 학습</SectionTitle>
          <SectionDescription>
            세미나, 스터디, 튜터링을 통해 체계적인 성장을 이뤄갑니다. 관심
            분야의 전문성을 키우고 싶은 분들에게 최적의 환경을 제공하며, 서로
            배우고 가르치며 함께 성장하는 학습 문화를 만들어가고 있습니다.
          </SectionDescription>
          <CardGrid>
            <ImageBox
              img={pnn1}
              title="세미나"
              text="프론트엔드, 백엔드부터 전공 심화 지식까지, 다양한 분야의 전문 지식을 공유하는 정기 세미나를 진행합니다."
            />
            <ImageBox
              img={pnn6}
              title="튜터링"
              text="매 학기 진행되는 튜터링에서는 선배들의 노하우와 실전 경험을 바탕으로 체계적인 학습 가이드를 제공합니다."
            />
            <ImageBox
              img={pnn4}
              title="스터디"
              text="특정 기술이나 프로젝트에 관심 있는 부원들이 모여 함께 공부하고 성장하는 소규모 스터디를 운영합니다."
            />
          </CardGrid>
        </AnimatedSection>
      </ContentContainer>
    </Container>
  );
};

export default Section3;
