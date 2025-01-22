import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "./MemberCard";
import test1 from "../../../assets/testImages/test1.jpg";
import test2 from "../../../assets/testImages/test2.jpg";
import test3 from "../../../assets/testImages/test3.jpg";
import test4 from "../../../assets/testImages/test4.jpg";
import test5 from "../../../assets/testImages/test5.jpg";
import test6 from "../../../assets/testImages/test6.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5% 5% 5% 5%;
`;


const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }

  .slick-prev {
    left: -35px;
    &::before {
      font-size: 30px;
      color: black;
    }
  }

  .slick-next {
    right: -35px;
    &::before {
      font-size: 30px;
      color: black;
    }
  }
`;

const Member = () => {
  const memberArray = [
    { 
      name: "이승훈", 
      explain: "# 프론트엔드 개발자" ,
      img: test1
    },
    { 
      name: "김재민", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다.",
      img: test2
    },
    { 
      name: "현지훈", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다.",
      img: test3
    },
    { 
      name: "박준수", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다.",
      img: test4
    },
    { 
      name: "김호팔", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다.",
      img: test5
    },
    { 
      name: "조우주", 
      explain: "안녕하세요 프론트엔드를 사랑하는 이승훈입니다.",
      img: test6
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
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
          img={member.img}
        />
      ))}
    </StyledSlider>
  </Container>
  );
};

export default Member;