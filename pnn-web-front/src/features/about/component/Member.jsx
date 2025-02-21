import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "./MemberCard";
import { memberApi } from "../../../shared/api/memberApi";

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

const GradeNavigation = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const GradeButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: ${props => props.active ? '#007bff' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : 'black'};
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;

  &:hover {
    background-color: ${props => props.active ? '#0056b3' : '#e9ecef'};
  }
`;

const ManagementTeam = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 30px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  
  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: stretch;
  }

  .slick-slide {
    > div {
      height: 100%;
      padding: 0 10px;
    }
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
    &::before {
      font-size: 30px;
      color: black;
    }
  }

  .slick-prev {
    left: -35px;
  }

  .slick-next {
    right: -35px;
  }

  /* 클론된 슬라이드를 위한 스타일 */
  .slick-slide.slick-cloned {
    display: flex !important;
  }
`;

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  swipe: true,
  touchMove: true,
  waitForAnimate: false,  // 애니메이션 대기 시간 제거
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        infinite: true,
        waitForAnimate: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        infinite: true,
        waitForAnimate: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: true,
        waitForAnimate: false
      }
    }
  ]
};

const StyledH1 = styled.h1`
  margin: 5% 0% 2% 0%;
`;

const MemberFrame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 80px;
  justify-items: center; 
`;

const Member = () => {
  const [members, setMembers] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const grades = [
    { id: null, label: "운영진" },
    { id: 1, label: "1학년" },
    { id: 2, label: "2학년" },
    { id: 3, label: "3학년" },
    { id: 4, label: "4학년" }
  ];
  const api = memberApi();

  const managementTeam = [
    { 
      name: "최준혁", 
      explain: "팀장을 맡고있는 최준혁이라고 합니다",
      email: "test1234@oasis.inje.ac.kr"
    },
    { 
      name: "이혁준", 
      explain: "부팀장을 맡고있는 이혁준이라고 합니다",
      email: "test1234@oasis.inje.ac.kr"
    }
  ];

  const headerMembers = [
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
    { 
      name: "이승훈", 
      explain: "안녕하세요 웹소켓은 제왕 박준수입니다",
      img: "https://avatars.githubusercontent.com/u/127470862?s=96&v=4"
    },
    { 
      name: "정주환", 
      explain: "안녕 나는 철찌 숫자단 벌쥐 호팔이다.",
      img: "https://avatars.githubusercontent.com/u/72590478?s=100&v=4"
    },
    { 
      name: "염정규", 
      explain: "공부는 왜 해야 하노",
      img: "https://avatars.githubusercontent.com/u/127940854?s=96&v=4"
    }
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    variableWidth: false,
    centerMode: false,
    centerPadding: '0px',
    draggable: false,    // 드래그 비활성화
    swipe: false,        // 스와이프 비활성화
    touchMove: false,    // 터치 이동 비활성화
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

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

  return (
    <Container>
      <GradeNavigation>
        {grades.map((grade) => (
          <GradeButton 
            key={grade.id ?? 'management'}
            active={selectedGrade === grade.id}
            onClick={() => setSelectedGrade(grade.id)}
          >
            {grade.label}
          </GradeButton>
        ))}
      </GradeNavigation>

      {(selectedGrade === null) && (
        <>
          <StyledH1>팀장 및 부팀장</StyledH1>
          <ManagementTeam>
            {managementTeam.map((member, index) => (
              <MemberCard 
                key={index}
                name={member.name}
                explain={member.explain}
                email={member.email}
              />
            ))}
          </ManagementTeam>

          <StyledH1>학년 헤더</StyledH1>
          <StyledSlider {...settings}>
            {headerMembers.map((member, index) => (
              <MemberCard 
                key={index}
                name={member.name}
                explain={member.explain}
                img={member.img}
              />
            ))}
          </StyledSlider>
        </>
      )}

      {(selectedGrade === 1 || selectedGrade === 2 || selectedGrade === 3 || selectedGrade === 4) && (
        <>
          <StyledH1>{selectedGrade}학년</StyledH1>
          <MemberFrame>
            {filterByGrade(selectedGrade).map((member) => (
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
        </>
      )}
    </Container>
  );
};

export default Member;