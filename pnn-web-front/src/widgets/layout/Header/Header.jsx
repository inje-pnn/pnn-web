import React, { useState } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import ModalMenu from "../Header/ModalMenu/ModalMenu";
import onClickMenuButton from "../../../features/onClickMenuButton/onClickMenuButton"

const Container = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  background-color: black;
  color: white;

  @media (min-width: 768px) {
    height: 6%;
    display: flex;
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
    padding: 0 5% 0 5%;
    color: white;
  }
`;

const Ul = styled.ul`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    padding-left: 20px;
    color: white;
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  margin-left: 5%;

  @media (min-width: 768px) {
    font-size: 40px;  
    padding-left: 0px;
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
          <Logo>Logo</Logo>
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