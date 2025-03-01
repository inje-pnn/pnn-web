import React from "react";
import styled from "styled-components";
import map from "../../assets/images/map.png";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;
  color: black;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }

  @media (min-width: 1200px) {
    padding: 80px 60px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

const Icon = styled.span`
  font-size: 24px;
  color: #e53935;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #333;
`;

const Contact = () => {
  return (
    <Container>
      <Title>찾아오시는 길</Title>

      <MapContainer>
        <img
          src={map}
          alt="지도"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </MapContainer>

      <InfoContainer>
        <InfoItem>
          <Icon>📍</Icon>
          <div>
            <strong>주소:</strong> 경상남도 김해시 어방동 산65 E동 장영실관
            122-A
          </div>
        </InfoItem>

        <InfoItem>
          <Icon>📞</Icon>
          <div>
            <strong>팀장 전화번호:</strong> 010-3671-3392
          </div>
        </InfoItem>

        <InfoItem>
          <Icon>🚇</Icon>
          <div>
            <strong>교통:</strong> 인제대 경전철 순환버스
          </div>
        </InfoItem>

        <InfoItem>
          <Icon>⏰</Icon>
          <div>
            <strong>문의하기:</strong>
          </div>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default Contact;
