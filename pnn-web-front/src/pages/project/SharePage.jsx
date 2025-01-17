import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardFrame from "../../features/Card/CardFrame";
import Filter from "../../features/platform/Filter";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  margin-top: 50px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1238px;
`;

const HeaderFrame = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
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
  gap: 50px 60px;
`;

const UploadCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 374px;
  height: 405px;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
  background-color: #f4f4f4;
  border: 2px dashed #667eea;
  color: #667eea;
`;


const UploadText = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #667eea;
`;

export const SharePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");
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

  const projects = [
    { id: 1, title: "Project 1", platform: "WEB", description: "설명 1" },
    { id: 2, title: "Project 2", platform: "APP", description: "설명 2" },
    { id: 3, title: "Project 3", platform: "WEB", description: "설명 3" },
    { id: 4, title: "Project 4", platform: "GAME", description: "설명 4" },
    { id: 5, title: "Project 5", platform: "AI", description: "설명 5" },
  ];

  const filteredProjects =
    selectedPlatform === "ALL"
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

        <ProjectNumber>{filteredProjects.length}개의 프로젝트</ProjectNumber>

        <CardContainer>
          {/*{isLogin && (
                <UploadCardWrapper onClick={handleUploadClick}>
                  <UploadText>프로젝트 업로드</UploadText>
                </UploadCardWrapper>
              )}*/}

          <UploadCardWrapper onClick={handleUploadClick}>
            <UploadText>+</UploadText>
          </UploadCardWrapper>

          {filteredProjects.map((project) => (
            <CardFrame key={project.id} project={project} />
          ))}
        </CardContainer>
      </Frame>
      <ScrollToTopButton />
    </Container>
  );
};