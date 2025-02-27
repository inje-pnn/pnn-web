import styled from "styled-components";
import { useState } from "react";
import Introduce from "../features/about/component/Introuduce";
import Learning from "../features/about/Learning";
import Member from "../features/about/component/Member";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: white;

  @media (max-width: 768px) {
    min-height: 100vh;
  }

  @media (min-width: 768px) {
    min-height: 95vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    max-width: 1920px;
    margin: 0 auto;
    border: 3px solid red;
  }

  @media (min-width: 2560px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: 5vh;
  background-color: #f2f5f8;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 5% 20px 5%;

  @media (min-width: 768px) {
    padding: 40px 60px 20px 260px;
  }

  @media (min-width: 1440px) {
    padding: 40px 10% 20px 10%;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid green;
  }

  @media (min-width: 2560px) {
    padding: 60px 15% 30px 15%;
    min-height: 300px;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;

  h1 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 28px;
    }

    @media (min-width: 1440px) {
      font-size: 32px;
    }

    @media (min-width: 2560px) {
      font-size: 40px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 1440px) {
    gap: 30px;
  }

  @media (min-width: 2560px) {
    gap: 40px;
  }
`;

const RouteButton = styled.button`
  padding: 12px 24px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#667EEA" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.active ? "#667EEA" : "#e0e0e0")};
  }

  @media (min-width: 1440px) {
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 25px;
  }

  @media (min-width: 2560px) {
    padding: 20px 40px;
    font-size: 22px;
    border-radius: 30px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 1440px) {
    max-width: 1920px;
  }

  @media (min-width: 2560px) {
    max-width: 2300px;
  }
`;

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "인사말" },
    { id: 1, label: "행사/활동" },
    { id: 2, label: "팀원소개" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Introduce />;
      case 1:
        return <Learning />;
      case 2:
        return <Member />;
      default:
        return <Introduce />;
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          <h1>P&N Info</h1>
        </Title>
        <ButtonContainer>
          {tabs.map((tab) => (
            <RouteButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </RouteButton>
          ))}
        </ButtonContainer>
      </Header>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </Container>
  );
};

export default AboutUs;
