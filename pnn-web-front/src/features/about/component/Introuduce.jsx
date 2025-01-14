import styled from "styled-components";
import { useIntersectionObserver } from "../../../shared/hooks/animation/useIntersectionObserver";
import pnn1 from '../../../assets/images/pnn1.jpeg';
import pnn2 from '../../../assets/images/pnn2.jpeg';
import pnn3 from '../../../assets/images/pnn3.jpeg';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 2300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2% 25% 0% 25%;
  text-align: center;
  background-color: white;
  h1 {
    color: black;
  }
  h2 {
    color: black;
    margin-top: 8%;
  }
  h3 {
    margin-top: 2%;
    color: gray;
  }
  img {
    width: 70%;
    margin-top: 5%;
    border-radius: 5px;
  }
`;

const AnimatedSection = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Introduce = () => {
  const [section1Ref, section1Visible] = useIntersectionObserver();
  const [section2Ref, section2Visible] = useIntersectionObserver();
  const [section3Ref, section3Visible] = useIntersectionObserver();

  return (
    <Container>
      <AnimatedSection ref={section1Ref} className={section1Visible ? 'visible' : ''}>
        <h1>인사말</h1>
        <h2>『 📖의미 🏫동아리 』</h2>
        <h3>" Programming을 즐기는네트워크라는 뜻을 가진
        인제대학교 컴퓨터공학부 학술동아리 입니다. "</h3>
        <img src={pnn2} alt="P&N 활동사진" />
      </AnimatedSection>

      <AnimatedSection ref={section2Ref} className={section2Visible ? 'visible' : ''}>
        <h2>『 📝목적 🧑‍🏫선후배 📚전공공부 』</h2>
        <h3>" 프로그래밍을 처음 접하는 후배들을 도와 전공 공부에 충실할 수 있도록 하며
        더불어 심화된 Programming을 공부하는 동아리입니다. "</h3>
        <img src={pnn3} alt="P&N 활동사진" />
      </AnimatedSection>

      <AnimatedSection ref={section3Ref} className={section3Visible ? 'visible' : ''}>
        <h2>『 🏆지향 💻Programming 』</h2>
        <h3>" Programming에 관심이 있는 사람이라면 누구나 첫발을 내딛을 수 있는 곳이며
        같은 지향점을 가지고 Programming 공부와 더불어 선후배간의 소중한 만남을 목적으로 하는 곳입니다. "</h3>
        <img src={pnn1} alt="P&N 활동사진" />
      </AnimatedSection>
    </Container>
  );
};

export default Introduce;