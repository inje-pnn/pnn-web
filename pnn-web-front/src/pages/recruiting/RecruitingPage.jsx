import styled from "styled-components";
import { steps } from "../../shared/data/stepsData";
import { FQABox } from "../../shared/components/fqa/FQABox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7vh 0 7vh 0;
  height: auto;
  background-color: #f4f6fc;
  
  @media (max-width: 768px) {
    padding: 7vh 0 7vh 0;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 92%;
  }
`;

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  font-size: 42px;
  
  span {
    font-size: 21px;
    padding-top: 20px;
    color: #525252;
  }
  
  @media (max-width: 768px) {
    height: 120px;
    font-size: 28px;
    
    span {
      font-size: 16px;
      padding-top: 10px;
    }
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 30px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 380px;
  }
`;

const StepCard = styled.div`
  width: 200px;
  height: 200px;
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
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 18px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StepText = styled.div`
  background: white;
  margin-top: 40px;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  height: 250px;
  text-align: left;
  
  span {
    font-size: 19px;
    color: #525252;
  }
  
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 20px;
    height: auto;
    min-height: 180px;
    border-radius: 12px;
    
    span {
      font-size: 15px;
    }
  }
`;

const StepTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const StepDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #667eea;
  margin: 15px 0 15px 0;
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const FQAContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 120px;
  font-size: 42px;
  
  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 28px;
  }
`;

export const RecruitingPage = () => {
  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <p>합류 여정</p>
          <span>P&N에 지원하면 다음과 같은 과정을 거쳐 선발돼요.</span>
        </HeaderFrame>

        <StepsContainer>
          {steps.map((step, index) => (
            <StepContainer key={index}>
              <StepCard>{step.subtitle}</StepCard>
              <StepText>
                <StepTitle>{step.title}</StepTitle>
                <StepDivider />
                <span>{step.description}</span>
              </StepText>
            </StepContainer>
          ))}
        </StepsContainer>

        <FQAContainer>
          <FQABox/>
        </FQAContainer>
      </Frame>
    </Container>
  );
};