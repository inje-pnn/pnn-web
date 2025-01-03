import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 250px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;  // 가운데 정렬을 위해
  top: 50%;   // 가운데 정렬을 위해
  transform: translate(-50%, -50%); // 정확한 중앙 정렬을 위한 변환
  z-index: 1;
  h1 {
    font-size: 80px;
  }
`;

const NFrame = styled.div`
  width: 120px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #677eea;
  border-radius: 20px;
  color: white;
  font-size: 80px;
  font-weight: bold;
`;

const PnnLogo = () => {
  return (
    <Container>
      <h1>P &</h1>
      <NFrame><span>N</span></NFrame>
    </Container>
  );
};

export default PnnLogo;