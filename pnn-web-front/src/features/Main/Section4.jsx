// sections/Section4.jsx - 합류 여정 컨텐츠 통합
import styled from "styled-components";
import { steps } from "../../shared/data/stepsData";
import { FQABox } from "../../shared/components/fqa/FQABox";

const Container = styled.div`
  width: 100%;
  height: auto; // 높이를 자동으로 조정하여 컨텐츠가 모두 표시되도록 함
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f6fc;
  position: relative;
  padding: 40px 20px;
  overflow: visible; // overflow-x: hidden에서 visible로 변경

  @media (max-width: 768px) {
    padding: 30px 15px;
    height: auto;
  }
`;

const SectionContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.span`
  font-size: 21px;
  color: #525252;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
  text-align: center;

  @media (max-width: 992px) {
    width: 90%;
    max-width: 450px;
  }
`;

const StepCard = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2, #667eea);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    width: 160px;
    height: 160px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 18px;
  }
`;

const StepText = styled.div`
  background: white;
  margin-top: 30px;
  padding: 25px;
  border-radius: 16px;
  width: 100%;
  min-height: 230px;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 1200px) {
    padding: 20px;
    min-height: 200px;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const StepDescription = styled.span`
  font-size: 16px;
  color: #525252;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StepTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StepDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #667eea;
  margin: 15px 0;
`;

const FQAContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px; // 하단 여백 추가
  overflow: visible; // 오버플로우 문제 해결

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 30px;
    width: 100%; // 너비 확실히 지정
  }
`;

// FQABox를 감싸는 래퍼 추가
const FQAWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  overflow: visible;
`;

const Section4 = () => {
  return (
    <Container>
      <SectionContent>
        <HeaderFrame>
          <Title>합류 여정</Title>
          <Subtitle>P&N에 지원하면 다음과 같은 과정을 거쳐 선발돼요.</Subtitle>
        </HeaderFrame>

        <StepsContainer>
          {steps.map((step, index) => (
            <StepContainer key={index}>
              <StepCard>{step.subtitle}</StepCard>
              <StepText>
                <StepTitle>{step.title}</StepTitle>
                <StepDivider />
                <StepDescription>{step.description}</StepDescription>
              </StepText>
            </StepContainer>
          ))}
        </StepsContainer>

        <FQAContainer>
          <FQAWrapper>
            <FQABox />
          </FQAWrapper>
        </FQAContainer>
      </SectionContent>
    </Container>
  );
};

export default Section4;
