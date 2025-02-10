import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  z-index: 1000;
  display: flex; // 추가
  justify-content: center; // 추가
  align-items: center; // 추가
  color: white;
`;

const LogoText = styled.h1`
  margin: 0; 
  font-size: 0px; 
`;

const PnnLogo = () => {
  return (
    <Container>
      <LogoText>Pnn</LogoText>
    </Container>
  );
};

export default PnnLogo;