import styled from "styled-components";
import { useState, useEffect } from "react";
import { projectApi } from "../../shared/api/projectApi";
import Cookies from "js-cookie";
import CardFrame from "../../features/Card/CardFrame";
import { Filter } from "../../features/platform/components/Filter";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";
import { UploadButton } from "../../features/platform/UploadButton";
import { CommunityFilter } from "../../features/community/CommunityFilter";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { useCategoryFilter } from "../../shared/hooks/useCategoryFilter";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 8vh;
    padding: 8px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1238px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderFrame = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #f2f5f8;
  padding: 40px 0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const InnerHeaderFrame = styled.div`
  width: 100%;
  max-width: 1238px;
  height: 120px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      font-size: 20px;
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
  margin-bottom: 20px;

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
    justify-items: center;
  }
`;


export const SharePage = () => {
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
      } catch (error) {
        console.error("프로젝트 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchProjects();
  }, []);

  const {
    searchText,
    categoryList,
    selectedPlatform,
    selectedItemList,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  } = useCategoryFilter(projects);

  return (
    <Container>
      <Frame>
      <HeaderFrame>
  <InnerHeaderFrame>
    <h1>
      <FolderOpenOutlinedIcon fontSize="large" color="primary" />
      P&N에서 진행된 프로젝트 둘러보기
    </h1>
    <p>다양한 플랫폼에서 진행된 프로젝트를 확인하고, 영감을 얻어보세요.</p>
  </InnerHeaderFrame>
</HeaderFrame>
        <CommunityFilter
          title={"프로젝트"}
          searchText={searchText}
          categoryList={categoryList}
          selectedPlatform={selectedPlatform}
          selectedItemList={selectedItemList}
          onChangeSearchText={onChangeSearchText}
          addSelectedItemList={addSelectedItemList}
          removeSelectedItemList={removeSelectedItemList}
          handleSelectedPlatform={handleSelectedPlatform}
        />

        <ProjectNumber>{projects.length}개의 프로젝트</ProjectNumber>

        <CardContainer>
          {projects.map((project) => (
            <CardFrame key={project.id} project={project} />
          ))}
        </CardContainer>
      </Frame>

      <ScrollToTopButton />
      {isLogin && <UploadButton />}
    </Container>
  );
};
