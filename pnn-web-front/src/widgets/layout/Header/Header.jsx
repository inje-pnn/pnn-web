import React, { useState } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import pnnlogo from "../../../assets/images/pnnlogo.png";
import ModalMenu from "../Header/ModalMenu/ModalMenu";
import onClickMenuButton from "../../../features/onClickMenuButton/onClickMenuButton"

const Container = styled.div`
  width: 100vw;
  height: 8dvh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  color: black;
  border-bottom: 1px solid lightgray;
  padding: 0 3% 0 3%;

  @media (min-width: 768px) {
    width: 1920px;
    height: 8vh;
    position: relative;
    display: flex;
    border: 1px solid lightgray;
    border-bottom: none;
  }
`;

const Frame = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Ul = styled.ul`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    padding-left: 20px;
    color: black;
    cursor: pointer;
    font-size: 18px;
    font-weight: ;
  }
`;

const Logo = styled.img`
  width: 30%;
  height: 100%;

  @media (min-width: 768px) {
    width: 15%;
    height: 100%;
  }
`;

const MenuIcon = styled.h1`
  display: block;  
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 5%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [menuBarState, setMenuBarState] = useState(false);

  return (
    <>
      <Container>
        <Frame style={{justifyContent:"flex-start"}}> {/* 좌측 로고프레임 */} 
          <Logo src={pnnlogo} />
        </Frame>
        <Frame> {/* 우측 메뉴프레임 */} 
          <Ul>About Us</Ul>
          <Ul>프로젝트</Ul>
          <Ul>부원소개</Ul>
          <Ul>지원하기</Ul>
          <MenuIcon><IoIosMenu onClick={() => onClickMenuButton(menuBarState, setMenuBarState)}/></MenuIcon>
        </Frame>
      </Container>
      {menuBarState && <ModalMenu />}
    </>
  );
};

export default Header;