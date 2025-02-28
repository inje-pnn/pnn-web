// sections/Section4.jsx - 합류 여정 컨텐츠 통합
import styled from "styled-components";
import { steps } from "../../shared/data/stepsData";
import { FQABox } from "../../shared/components/fqa/FQABox";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f6fc;
  position: relative;
  padding: 40px 20px;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 20px 15px;
    height: auto;
  }
`;

const SectionContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
  }
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
    margin-bottom: 25px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.span`
  font-size: 21px;
  color: #525252;
  text-align: center;

  @media (max-width: 768px) {
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
    gap: 35px;
  }

  @media (max-width: 768px) {
    gap: 25px;
    margin-top: 15px;
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

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
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

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 16px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
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

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 18px;
    min-height: auto;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
  }
`;

const StepDescription = styled.span`
  font-size: 16px;
  color: #525252;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const StepTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

const StepDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #667eea;
  margin: 15px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const FQAContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
  overflow: visible;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const FQAWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  overflow: visible;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// 수정된 "이런 사람을 지향해요" 섹션을 위한 스타일 컴포넌트
const PeopleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #f8f8fa;
  border-radius: 8px;
  margin-top: 60px;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 25%;
  padding: 30px 20px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    font-size: 20px;
  }
`;

const RightColumn = styled.div`
  width: 75%;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    background-color: #a8a4e0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;

    &::before {
      top: 0;
      left: 10%;
      width: 80%;
      height: 1px;
    }
  }
`;

const TypeRow = styled.div`
  display: flex;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const TypeTitle = styled.div`
  width: 130px;
  font-size: 18px;
  font-weight: bold;
  color: #6b5ad1;
  position: relative;
  flex-shrink: 0;

  ${(props) =>
    props.highlighted &&
    `
    background-color: #e8e7f5;
    padding: 5px 10px;
    border-radius: 4px;
  `}

  @media (max-width: 768px) {
    width: 100px;
    font-size: 16px;
  }
`;

const TypeDescription = styled.div`
  font-size: 16px;
  color: #525252;
  line-height: 1.5;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const MessageBox = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 15px;
  margin: 30px auto 0;
  border-radius: 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
    margin-top: 25px;
  }
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

        <PeopleContainer>
          <LeftColumn>
            이런 사람을
            <br />
            지향해요
          </LeftColumn>

          <RightColumn>
            <TypeRow>
              <TypeTitle>자발적인</TypeTitle>
              <TypeDescription>
                학생들이 함께 만들어가는 서비스인 만큼 스스로 일을 찾아서 해야
                해요. 본인이 필요한 능력을 직접 배우고 진행하고 싶은 부분을
                알아서 제안해요.
              </TypeDescription>
            </TypeRow>

            <TypeRow>
              <TypeTitle>도전적인</TypeTitle>
              <TypeDescription>
                P&N에서 하는 일이 처음에는 어려워 보일 수 있어요. 하지만
                도전하고 배우는 과정에서 성장한 자기 모습을 찾을 수 있을 거예요.
              </TypeDescription>
            </TypeRow>

            <TypeRow>
              <TypeTitle>공감하는</TypeTitle>
              <TypeDescription>
                P&N는 '음식대 학생들을 공감하며 최고의 서비스를 공임'하다는
                한가지 미션을 바탕으로 팀원들과 함께 공부하고, 성장해요.
              </TypeDescription>
            </TypeRow>
          </RightColumn>
        </PeopleContainer>

        <MessageBox>"함께하를 사랑하시는 여러분, 환영합니다."</MessageBox>

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