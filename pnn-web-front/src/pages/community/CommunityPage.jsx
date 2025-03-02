import useUserStore from "../../shared/store/useUserStroe";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardBoardItem } from "../../features/Card/CardBoardItem";
import { FloatingMenuBar } from "../../features/community/FloatingMenuBar";
import { CommunityFilter } from "../../features/community/CommunityFilter";
import { UploadButton } from "../../features/platform/UploadButton";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";
import { useCategoryFilter } from "../../shared/hooks/useCategoryFilter";
import { communityApi } from "../../shared/api/communityApi";
import { Pagination } from "@mui/material";
import { CardBoardSkeleton } from "../../features/Card/CardBoardSkelecton";
import ComputerIcon from "@mui/icons-material/Computer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;

  margin-top: 50px;
  background-color: #f2f5f8;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 8px;
    height: auto;
  }
`;
const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: white;
  padding-top: 16px;
  @media (max-width: 768px) {
    height: auto;
    min-height: 0px;
  }
`;
const BoardContainer = styled.div`
  display: flex;
  padding-top: 35px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* 한 줄에 1개씩 */
    gap: 16px; /* 카드 간격 */
    width: 60%; /* 내부 그리드 컨테이너 너비 */
    height: auto; /* 높이는 카드 내용에 따라 자동 조절 */
    justify-items: center;
    @media (max-width: 768px) {
      flex: 1;
      width: 90%;
      height: 100%;
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  height: auto;
  align-self: center;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const HeaderFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 20%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 20px 0px;
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

export const CommunityPage = () => {
  const user = useUserStore((state) => state.user);

  const { getStudyBoardList } = communityApi();
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
  } = useCategoryFilter(getStudyBoardList);
  const [paginationList, setPaginationList] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (projects)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    setPaginationList(projects?.slice(0, 6));
  }, [projects]);
  const handlePageNation = (e, v) => {
    const arr = projects?.slice((v - 1) * 6, (v - 1) * 6 + 6);
    setPaginationList(arr);
  };
  return (
    <Container>
      {/* <FloatingMenuBar /> */}
      {user?.authority === 0 || user?.authority === 1 ? (
        <UploadButton path={"/community/study/upload"} />
      ) : null}

      <ScrollToTopButton />
      {/* <BoardTitleContainer>
        <h1>
          커뮤니티 페이지입니다.
          <br />
          개발 이야기를 공유해보세요.
        </h1>
        <TitleImg src="src/assets/images/community_test.png" />
      </BoardTitleContainer> */}
      <HeaderFrame>
        <h1>
          <ComputerIcon fontSize="large" color="primary" />
          IT 스터디 둘러보기
        </h1>
        <p>IT의 다양한 지식을 공유하고, 지식을 얻어가세요.</p>
      </HeaderFrame>
      <BodyContainer>
        <FilterContainer>
          <CommunityFilter
            title={"스터디"}
            searchText={searchText}
            categoryList={categoryList}
            selectedPlatform={selectedPlatform}
            selectedItemList={selectedItemList}
            onChangeSearchText={onChangeSearchText}
            addSelectedItemList={addSelectedItemList}
            removeSelectedItemList={removeSelectedItemList}
            handleSelectedPlatform={handleSelectedPlatform}
          />
        </FilterContainer>
        <BoardContainer>
          <div className="grid-container">
            {isLoading
              ? [...new Array(6)].map(() => <CardBoardSkeleton />)
              : paginationList?.map((v, index) => {
                  if (index < 6) {
                    return (
                      <CardBoardItem item={v} key={`${v.serial_number}card`} />
                    );
                  }
                })}
            {}
          </div>
        </BoardContainer>
        <PageContainer>
          <Pagination
            count={Math.round(projects?.length / 6) + 1}
            onChange={handlePageNation}
          />
        </PageContainer>
      </BodyContainer>
    </Container>
  );
};
