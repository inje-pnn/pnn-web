import styled from "styled-components";
import { FaLightbulb, FaRocket, FaHeart } from "react-icons/fa"; // 아이콘 추가

const PeopleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  margin-top: 60px;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  width: 25%;
  padding: 30px 20px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    font-size: 22px;
    text-align: center;
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
    left: -50px;
    top: 10%;
    height: 80%;
    width: 3px;
    background-color: #a8a4e0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    align-items: center;

    &::before {
      left: 10%;
      width: 80%;
      height: 2px;
      top: 0;
    }
  }
`;

const TypeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TypeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 130px;
  font-size: 24px;
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
    width: auto;
    font-size: 16px;
    margin-bottom: 8px;
    justify-content: center;
  }
`;

const TypeDescription = styled.div`
  font-size: 17px;
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
  margin: 50px 0 170px 0;
  border-radius: 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 12px;
    margin-top: 25px;
  }
`;

export const CoreValues = () => {
  return (
    <>
      <PeopleContainer>
        <LeftColumn>
          이런 사람을<br />지향해요
        </LeftColumn>

        <RightColumn>
          <TypeRow>
            <TypeTitle>
              <FaLightbulb size={20} color="#6b5ad1" /> 창의적
            </TypeTitle>
            <TypeDescription>
            새로운 아이디어를 탐색하고, 웹/앱/게임 개발을 통해 창의력을 발휘하는 것을 좋아해요.
            </TypeDescription>
          </TypeRow>

          <TypeRow>
            <TypeTitle>
              <FaRocket size={20} color="#6b5ad1" /> 성장형
            </TypeTitle>
            <TypeDescription>
            최신 기술을 배우고, 프로젝트를 통해 실력을 쌓으며 성장하는 개발자를 지향해요.
            </TypeDescription>
          </TypeRow>

          <TypeRow>
            <TypeTitle>
              <FaHeart size={20} color="#6b5ad1" /> 팀워크
            </TypeTitle>
            <TypeDescription>
            함께 개발하고 토론하며 더 나은 결과를 만들어내는 문화를 중요하게 생각해요.
            </TypeDescription>
          </TypeRow>
        </RightColumn>
      </PeopleContainer>

      <MessageBox>"컴퓨터를 사랑하시는 여러분, 환영합니다."</MessageBox>
    </>
  );
};
