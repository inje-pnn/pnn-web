import styled from "styled-components";
import { FQABox } from "../../shared/components/fqa/FQABox";
import { Journey } from "../../shared/components/fqa/Journey";
import { FaClock, FaPhone, FaCalendarCheck } from "react-icons/fa";

const TopInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px;
  background: linear-gradient(135deg, #4a90e2, #6b50ff);
  color: white;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    margin-top: 4vh;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    padding: 15px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QRCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

const QRTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
`;

const QRCodeContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const QRImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7vh 0;
  height: auto;
  background-color: #eef2ff;
  
  @media (max-width: 768px) {
    padding: 7vh 0;
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
      <TopInfoContainer>
        <InfoText>
          <InfoItem><FaClock /> 지원 기간: 2025년 3월 1일 ~ 2025년 3월 8일</InfoItem>
          <InfoItem><FaCalendarCheck /> 면접 일정: 2025년 3월 10일 ~ 2025년 3월 12일</InfoItem>
          <InfoItem><FaPhone /> 지원방법: 010-3671-3392 (학번/이름 문자 전송)</InfoItem>
        </InfoText>
        <QRCodeWrapper>
          <QRTitle>문의사항</QRTitle>
          <QRCodeContainer>
            <QRImage src="/src/assets/images/QR.png" alt="QR 코드" />
          </QRCodeContainer>
        </QRCodeWrapper>
      </TopInfoContainer>

      <Frame>
        <Journey/>
        <FQAContainer>
          <FQABox />
        </FQAContainer>
      </Frame>
    </Container>
  );
};
