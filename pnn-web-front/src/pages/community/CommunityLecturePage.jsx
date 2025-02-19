import styled from "styled-components";
import { FloatingMenuBar } from "../../features/community/FloatingMenuBar";
import { UploadButton } from "../../features/platform/UploadButton";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";
import { CommunityAccordianCard } from "../../features/community/CommunityAccordianCard";
import { communityApi } from "../../shared/api/communityApi";
import { useEffect, useState } from "react";
import useUserStore from "../../shared/store/useUserStroe";

const Container = styled.div`
  display: flex;

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

const TitleImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const CommunityLecturePage = () => {
  const { getAccountBoardList } = communityApi();
  const [boardList, setBoardList] = useState([]);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    getAccountBoardList().then((res) => {
      setBoardList(res);
    });
  }, []);
  return (
    <Container>
      {user.authority === 0 || user.authority === 1 ? (
        <UploadButton path={"/community/study/upload"} />
      ) : null}
      <ScrollToTopButton />
      <BoardTitleContainer>
        <h1>
          강의 페이지입니다.
          <br />
          정보를 공유 해봐요.
        </h1>
        <TitleImg src="src/assets/images/community_test.png" />
      </BoardTitleContainer>

      <BoardContainer>
        <FloatingMenuBar />
        {boardList?.map(() => (
          <CommunityAccordianCard />
        ))}
      </BoardContainer>
    </Container>
  );
};
