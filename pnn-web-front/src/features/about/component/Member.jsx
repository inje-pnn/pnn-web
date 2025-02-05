import { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "./MemberCard";
import { memberApi } from "../../../shared/api/memberApi";
import { filterMemberGrade } from "../../../shared/util/memberUtil";
import { filterMemberAuthority } from "../../../shared/util/memberUtil";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0% 5% 5% 5%;
  color: black;
`;

const ManageMentTeam = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slick-list {
    padding: 0 !important;
    overflow: hidden;
  }

  .slick-track {
    display: flex;  
    align-items: center; 
    justify-content: center; 
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;
    }
  }

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

const MemberFrame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 깔끔하게 좌우 여백 없이 7개의 카드만 넣기 위해
  gap: 10px;
  justify-items: center; 
`;

const StyledH1 = styled.h1`
  margin: 5% 0% 2% 0%;
`;

const Member = () => {
  const [members, setMembers] = useState([]);
  const api = memberApi();

  const memberArray = [
    { 
      name: "김재민", 
      explain: "4학년 헤더 김재민입니다.",
      img: "https://avatars.githubusercontent.com/u/50660458?s=100&v=4"
    },
    { 
      name: "현지훈", 
      explain: "프론트의 제왕 현지훈입니다. 반갑습니다.",
      img: "https://avatars.githubusercontent.com/u/126228828?s=96&v=4"
    },
    { 
      name: "박준수", 
      explain: "안녕하세요 웹소켓은 제왕 박준수입니다",
      img: "https://avatars.githubusercontent.com/u/127470862?s=96&v=4"
    },
    { 
      name: "김호팔", 
      explain: "안녕 나는 철찌 숫자단 벌쥐 호팔이다.",
      img: "https://avatars.githubusercontent.com/u/72590478?s=100&v=4"
    },
    { 
      name: "조우주", 
      explain: "공부는 왜 해야 하노",
      img: "https://avatars.githubusercontent.com/u/127940854?s=96&v=4"
    },
  ];

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.getAllMembers();
        console.log('받아온 데이터:', response);
        setMembers(response);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchMembers();
  }, []);

  const filterByGrade = (grade) => {
    return members.filter(member => member.student_grade === grade);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // 아래 설정들을 추가
    variableWidth: true, // 슬라이드 너비를 자동으로 조정
    centerMode: true, // 현재 슬라이드를 중앙에 위치
    centerPadding: '0px', // 중앙 모드 패딩 제거
  };

  return (
    <Container>
      <StyledH1>운영진</StyledH1>
      <ManageMentTeam>
        <MemberCard 
          name={"최준혁"}
          explain={"팀장을 맡고있는 최준혁이라고 합니다"}
          email="test1234@oasis.inje.ac.kr"
        />
        <MemberCard 
          name={"이혁준"}
          explain={"부팀장을 맡고있는 이혁준이라고 합니다"}
          email="test1234@oasis.inje.ac.kr"
        />
      </ManageMentTeam>

      <StyledH1>헤더</StyledH1>
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

      <StyledH1>4학년</StyledH1>
      <MemberFrame>
        {filterByGrade(4).map((member) => (
          <MemberCard 
            key={member.id}
            name={member.name}
            explain={member.student_number}
            email={member.email}
            github={member.github_url}
            enableHover={false}
          />
        ))}
      </MemberFrame>

      <StyledH1>3학년</StyledH1>
      <MemberFrame>
        {filterByGrade(3).map((member) => (
          <MemberCard 
            key={member.id}
            name={member.name}
            explain={member.student_number}
            email={member.email}
            github={member.github_url}
            enableHover={false}
          />
        ))}
      </MemberFrame>

      <StyledH1>2학년</StyledH1>
      <MemberFrame>
        {filterByGrade(2).map((member) => (
          <MemberCard 
            key={member.id}
            name={member.name}
            explain={member.student_number}
            email={member.email}
            github={member.github_url}
            enableHover={false}
          />
        ))}
      </MemberFrame>

      <StyledH1>1학년</StyledH1>
      <MemberFrame>
        {filterByGrade(1).map((member) => (
          <MemberCard 
            key={member.id}
            name={member.name}
            explain={member.student_number}
            email={member.email}
            github={member.github_url}
            enableHover={false}
          />
        ))}
      </MemberFrame>
    </Container>
  );
};

export default Member;