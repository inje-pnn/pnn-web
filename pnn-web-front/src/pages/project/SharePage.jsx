// app/pages/SharePage/SharePage.tsx
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardFrame from "../../features/Card/CardFrame";
import Filter from "../../features/filter/Filter";

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
  width: 1145px;
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
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px 18px;
  flex-wrap: wrap;
`;

export const SharePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("전체");

  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/share/upload");
  }

  const projects = [
    { id: 1, title: "Project 1", platform: "Web", description: "간단한 프로젝트 설명 1" },
    { id: 2, title: "Project 2", platform: "Mobile", description: "간단한 프로젝트 설명 2" },
    { id: 3, title: "Project 3", platform: "Web", description: "간단한 프로젝트 설명 3" },
    { id: 4, title: "Project 4", platform: "Web", description: "간단한 프로젝트 설명 4" },
    { id: 5, title: "Project 5", platform: "Mobile", description: "간단한 프로젝트 설명 5" },
  ];

  // 플랫폼에 맞게 프로젝트 필터링
  const filteredProjects = selectedPlatform === "전체" 
    ? projects 
    : projects.filter(project => project.platform === selectedPlatform);

  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <h1>P&N에서 진행된 프로젝트 둘러보기</h1>
        </HeaderFrame>
        
        <Filter selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
        <h3 style={{cursor:"pointer"}} onClick={handleUploadClick}>임시 업로드 버튼</h3>
        <ProjectNumber>{filteredProjects.length}개의 프로젝트</ProjectNumber>
        <CardContainer>
          {filteredProjects.map((project) => (
            <CardFrame key={project.id} project={project} />
          ))}
        </CardContainer>
      </Frame>
    </Container>
  );
};
