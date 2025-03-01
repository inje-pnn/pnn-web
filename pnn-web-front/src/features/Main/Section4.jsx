import styled from "styled-components";
import { CoreValues } from "../about/component/CoreValues";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f6fc;
  position: relative;
  padding: 40px 20px;

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

const RecruitingButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4a90e2, #667eea);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 50px;
    font-size: 16px;
  }
`;

const Section4 = () => {
  const navigate = useNavigate();

  const handleRecruitingButtonClick = () => {
    navigate("/recruiting");
  };

  return (
    <Container>
      <SectionContent>
        <CoreValues />
      </SectionContent>
      <RecruitingButton onClick={handleRecruitingButtonClick}>
        지원하기
      </RecruitingButton>
    </Container>
  );
};

export default Section4;
