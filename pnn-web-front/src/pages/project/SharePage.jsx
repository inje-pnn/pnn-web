import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardFrame from "../../features/Card/CardFrame";
import Filter from "../../features/filter/Filter";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  background-color: lightgreen;
  margin-top: 50px;
`;

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1238px;
`;

const HeaderFrame = styled.div`
  width: 100%;
  height: 70px;
  color: white;
`;

const ProjectNumber = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #bebec1;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 50px 42px;
`;

export const SharePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("전체");
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleUploadClick = () => {
    navigate("/share/upload");
  };

  // 임시 더미 데이터
  const projects = [
    {
      id: 1,
      title: "Project 1",
      platform: "WEB",
      description: "간단한 프로젝트 설명 1 (서브 타이틀)",
    },
    {
      id: 2,
      title: "Project 2",
      platform: "APP",
      description: "간단한 프로젝트 설명 2 (서브 타이틀)",
    },
    {
      id: 3,
      title: "Project 3",
      platform: "WEB",
      description: "간단한 프로젝트 설명 3 (서브 타이틀)",
    },
    {
      id: 4,
      title: "Project 4",
      platform: "WEB",
      description: "간단한 프로젝트 설명 4 (서브 타이틀)",
    },
    {
      id: 5,
      title: "Project 5",
      platform: "APP",
      description: "간단한 프로젝트 설명 5 (서브 타이틀)",
    },
  ];

  const filteredProjects =
    selectedPlatform === "전체"
      ? projects
      : projects.filter((project) => project.platform === selectedPlatform);

  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <h1>P&N에서 진행된 프로젝트 둘러보기</h1>
        </HeaderFrame>

        <Filter
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />

        <h3 onClick={handleUploadClick}>임시 업로드 버튼</h3>

        <ProjectNumber>{filteredProjects.length}개의 프로젝트</ProjectNumber>

        <CardContainer>
          {filteredProjects.map((project) => (
            <CardFrame key={project.id} project={project} />
          ))}
        </CardContainer>
      </Frame>
      <ScrollToTopButton />
    </Container>
  );
};
