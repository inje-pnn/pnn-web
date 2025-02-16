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
  position: relative;
  width: 100%;
  flex-direction: column;
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
    grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개씩 */
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
    setPaginationList(projets.slice(0, 12));
  }, [projets]);
  const handlePageNation = (e, v) => {
    const arr = projets.slice((v - 1) * 12, (v - 1) * 12 + 12);
    setPaginationList(arr);
  };
  return (
    <Container>
      <FloatingMenuBar />
      <UploadButton path={"/community/study/upload"} />
      <ScrollToTopButton />
      <BoardTitleContainer>
        <h1>
          커뮤니티 페이지입니다.
          <br />
          개발 이야기를 공유해보세요.
        </h1>
        <TitleImg src="src/assets/images/community_test.png" />
      </BoardTitleContainer>
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
            if (index < 12) {
              return <CardBoardItem item={v} key={`${v.serial_number}card`} />;
            }
          })}
        </div>
      </BoardContainer>
      <Pagination count={projets?.length / 12} onChange={handlePageNation} />
    </Container>
  );
};
