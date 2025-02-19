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

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  margin-top: 50px;
  background-color: #f2f5f8;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 8vh;
    padding: 8px;
  }
`;
const BoardTitleContainer = styled.div`
  display: flex;
  height: 420px;
  width: 100%;

  padding-left: 20%;
  padding-right: 20%;
  align-items: center;
  justify-content: space-between;
`;
const BoardContainer = styled.div`
  display: flex;
  padding-top: 35px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* 한 줄에 3개씩 */
    gap: 16px; /* 카드 간격 */
    width: 60%; /* 내부 그리드 컨테이너 너비 */
    height: auto; /* 높이는 카드 내용에 따라 자동 조절 */
    justify-items: center;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  width: 60%;
  height: auto;

  align-self: center;
`;
const TitleImg = styled.img`
  width: 250px;
  height: 250px;
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

export const CommunityPage = () => {
  const user = useUserStore((state) => state.user);

  const [page, setPage] = useState(0);
  const { getStudyBoardList } = communityApi();
  const {
    projets,
    searchText,
    categoryList,
    selectedPlatform,
    selectedItemList,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  } = useCategoryFilter(getStudyBoardList);
  const [paginationList, setPaginationList] = useState(projets);
  useEffect(() => {
    setPaginationList(projets?.slice(0, 6));
  }, [projets]);
  const handlePageNation = (e, v) => {
    const arr = projets?.slice((v - 1) * 6, (v - 1) * 6 + 6);
    setPaginationList(arr);
  };
  return (
    <Container>
      <FloatingMenuBar />
      {user.authority === 0 || user.authority === 1 ? (
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
        <h1>IT 스터디 둘러보기</h1>
        <p>IT의 다양한 지식을 공유하고, 지식을 얻어가세요.</p>
      </HeaderFrame>
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
          {paginationList?.map((v, index) => {
            if (index < 6) {
              return <CardBoardItem item={v} key={`${v.serial_number}card`} />;
            }
          })}
        </div>
      </BoardContainer>
      <PageContainer>
        <Pagination count={projets?.length / 6} onChange={handlePageNation} />
      </PageContainer>
    </Container>
  );
};
