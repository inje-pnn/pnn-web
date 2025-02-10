import styled from "styled-components";
import { useState, useEffect } from "react";
import { projectApi } from "../../shared/api/projectApi";
import Cookies from "js-cookie";
import CardFrame from "../../features/Card/CardFrame";
import { Filter } from "../../features/platform/components/Filter";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";
import { UploadButton } from "../../features/platform/UploadButton";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  margin-top: 50px;
  background-color: #f2f5f8;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 8px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1238px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 16px;
    color: #666;
    margin-top: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ProjectNumber = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #bebec1;

  @media (max-width: 768px) {
    align-items: center;
    font-size: 14px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 50px 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px 30px;
    margin: 20px 0 50px 0px;
  }
`;

export const SharePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");
  const [isLogin, setIsLogin] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = Cookies.get("user");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await projectApi.getProjects();
        setProjects(projectData);
      } catch {}
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    selectedPlatform === "ALL"
      ? projects
      : projects.filter((project) => project.platform === selectedPlatform);

  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <h1>
            <FolderOpenOutlinedIcon fontSize="large" color="primary" />
            P&N에서 진행된 프로젝트 둘러보기
          </h1>
          <p>다양한 플랫폼에서 진행된 프로젝트를 확인하고, 영감을 얻어보세요.</p>
        </HeaderFrame>

        <Filter
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />

        <ProjectNumber>{filteredProjects.length}개의 프로젝트</ProjectNumber>

        <CardContainer>
          {filteredProjects.map((project) => (
            <CardFrame key={project.id} project={project} />
          ))}
        </CardContainer>
      </Frame>

      <ScrollToTopButton />
      {isLogin && <UploadButton />}
    </Container>
  );
};
