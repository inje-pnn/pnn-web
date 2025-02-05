import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 30%;
  position: fixed;
  top: 6dvh;
  left: 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 15px;
  color: black;
  background-color: white;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ModalMenu = () => {
  return (
    <Container>
      <MenuItem>About Us</MenuItem>
      <MenuItem>프로젝트</MenuItem>
      <MenuItem>부원소개</MenuItem>
      <MenuItem>지원하기</MenuItem>      
    </Container>
  );
};

export default ModalMenu;