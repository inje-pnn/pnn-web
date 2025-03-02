import React from "react";
import styled from "styled-components";
import symbolImg from "../../../assets/images/ui-logo.png";
import pnnlogo from "../../../assets/images/pnnlogo.png";
import instagram from "../../../assets/icons/instagram.png";
import kakaotalk from "../../../assets/icons/kakaotalk.png";
import youtube from "../../../assets/icons/youtube.png";

const Container = styled.div`
  width: 100%;
  height: auto; // 고정 높이 제거하고 컨텐츠에 맞게 조절
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-top: 1px solid lightGray;
  background-color: white;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const OnClickBannerFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;

    ul:nth-child(even) {
      // 구분선 모바일에서 숨김
      display: none;
    }
  }
`;

const InfoFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
    flex-direction: column;

    ul {
      width: 100%;
    }
  }
`;

const CopyRightFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;

    ul {
      padding: 0 1rem;
    }
  }
`;

const SiteMapFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 1rem 0;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    gap: 15px;

    ul {
      // 인스타 아이콘이랑 카톡, 유튜브 아이콘 사이 구분선 삭제
      display: none;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const SymbolFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 1rem 0;
  margin-top: 1rem;

  img {
    width: 150px;
    height: 150px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;

    img {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <OnClickBannerFrame></OnClickBannerFrame>
      <InfoFrame>
        <ul>(50834) 경남 김해시 인제로 197 장영실관(E) 122-B</ul>
        <ul>Tel : 010-3556-5945</ul>
        <ul>Fax : 010-3556-5945</ul>
      </InfoFrame>
      <CopyRightFrame>
        <ul>
          Copyright © 2025 Inje University Kimhae Campus, Department of Computer
          Engineering, Club P&N. All Rights Reserved
        </ul>
      </CopyRightFrame>
      {/* <SiteMapFrame>
        <img src={instagram} alt="instagram" />
        <ul>|</ul>
        <img src={kakaotalk} alt="kakaotalk" />
        <ul>|</ul>
        <img src={youtube} alt="youtube" />
      </SiteMapFrame> */}
      <SymbolFrame>
        <img src={symbolImg} alt="UI logo" />
        <img src={pnnlogo} alt="PNN logo" />
      </SymbolFrame>
    </Container>
  );
};

export default Footer;
