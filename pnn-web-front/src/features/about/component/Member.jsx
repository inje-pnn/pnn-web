import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "./MemberCard";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 20px;
`;


const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Member = () => {
  const memberArray = [
    { 
      name: "이승훈", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
    { 
      name: "김재민", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
    { 
      name: "현지훈", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
    { 
      name: "박준수", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
    { 
      name: "김호팔", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
    { 
      name: "정주환", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다."
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed : 1500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,
  };

  return (
    <Container>
    <StyledSlider {...settings}>
      {memberArray.map((member, index) => (
        <MemberCard 
          key={index}
          name={member.name}
          explain={member.explain}
        />
      ))}
    </StyledSlider>
  </Container>
  );
};

export default Member;