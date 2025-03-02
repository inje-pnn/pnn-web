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

// 스켈레톤 UI 컴포넌트 스타일링
const SkeletonCard = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @keyframes pulse {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonText = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "16px"};
  margin: ${(props) => props.margin || "0"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

// 스켈레톤 카드 컴포넌트
const SkeletonCardFrame = () => {
  return <SkeletonCard />;
};

// 프로젝트 숫자 스켈레톤
const SkeletonProjectNumber = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SharePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("user");
    setIsLogin(!!token);
  }, []);

  const {
    projects,
    searchText,
    categoryList,
    selectedPlatform,
    selectedItemList,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  } = useCategoryFilter(projectApi.getProjects);
  useEffect(() => {
    if (projects)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, [projects]);
  // 스켈레톤 카드 배열 생성 (로딩 중일 때 표시할 개수)
  const skeletonCards = Array(8).fill(0);

  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <InnerHeaderFrame>
            <h1>
              <FolderOpenOutlinedIcon fontSize="large" color="primary" />
              P&N에서 진행된 프로젝트 둘러보기
            </h1>
            <p>
              다양한 플랫폼에서 진행된 프로젝트를 확인하고, 영감을 얻어보세요.
            </p>
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

        {loading ? (
          <SkeletonProjectNumber>
            <SkeletonText width="120px" height="20px" />
          </SkeletonProjectNumber>
        ) : (
          <ProjectNumber>{projects.length}개의 프로젝트</ProjectNumber>
        )}

        <CardContainer>
          {loading
            ? skeletonCards.map((_, index) => (
                <SkeletonCardFrame key={`skeleton-${index}`} />
              ))
            : projects.map((project) => (
                <CardFrame key={project.id} project={project} />
              ))}
        </CardContainer>
      </Frame>

      <ScrollToTopButton />
      {isLogin && <UploadButton path={"/share/upload"} />}
    </Container>
  );
};
