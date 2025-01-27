import React from "react";
import styled from "styled-components";
import symbolImg from "../../../assets/images/ui-logo.png";
import pnnlogo from "../../../assets/images/pnnlogo.png";
import instagram from "../../../assets/icons/instagram.png";
import kakaotalk from "../../../assets/icons/kakaotalk.png";
import youtube from "../../../assets/icons/youtube.png";

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2% 15% 5% 15%;
  border-top: 1px solid lightGray;
`;

const OnClickBannerFrame = styled.div`
  wdith: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const InfoFrame = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const CopyRightFrame = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SiteMapFrame = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const SymbolFrame = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  img {
    width: 150px;
    height: 150px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <OnClickBannerFrame>
        <ul>개인정보처리방침</ul>
        <ul>|</ul>
        <ul>찾아오시는길</ul>
        <ul>|</ul>
        <ul>대표자전화번호</ul>
        <ul>|</ul>
        <ul>대학정보공시</ul>
      </OnClickBannerFrame>
      <InfoFrame>
        <ul>(50834) 경남 김해시 인제로 197 장영실관(E) 122-B</ul>
        <ul>Tel : 010-3556-5945</ul>
        <ul>Fax : 010-3556-5945</ul>
      </InfoFrame>
      <CopyRightFrame>
        <ul>Copyright © 2025 Inje University Kimhae Campus, Department of Computer Engineering, Club P&N. All Rights Reserved</ul>
      </CopyRightFrame>
      <SiteMapFrame>
        <img src={instagram} />
        <ul>|</ul>
        <img src={kakaotalk} />
        <ul>|</ul>
        <img src={youtube} />
      </SiteMapFrame>
      <SymbolFrame>
        <img src={symbolImg} />
        <img src={pnnlogo} />
      </SymbolFrame>
    </Container>
  );
};

export default Footer;