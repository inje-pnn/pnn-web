import styled from "styled-components";
import { FloatingMenuBar } from "../../features/community/FloatingMenuBar";
import { UploadButton } from "../../features/platform/UploadButton";
import { ScrollToTopButton } from "../../features/ScrollToTop/ScrollToTopButton";
import { CommunityAccordianCard } from "../../features/community/CommunityAccordianCard";
import { communityApi } from "../../shared/api/communityApi";
import { useEffect, useState } from "react";
import useUserStore from "../../shared/store/useUserStroe";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  display: flex;
  padding: 16px;
  margin-top: 50px;
  width: 100%;
  flex-direction: column;
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
  const { getAccountBoardList, updateLectureBoard } = communityApi();
  const [boardList, setBoardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    getAccountBoardList().then((res) => {
      setBoardList(res);
      setTimeout(() => {
        // setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <Container>
      {user.authority === 0 || user.authority === 1 ? (
        <UploadButton path={"/community/lecture/upload"} />
      ) : null}
      <ScrollToTopButton />

      <HeaderFrame>
        <h1>IT 강의 계정 </h1>
        <p>IT의 다양한 지식을 공유하고, 지식을 얻어가세요.</p>
      </HeaderFrame>

      <BoardContainer>
        <FloatingMenuBar />
        {isLoading ? (
          <CircularProgress style={{ marginTop: 50 }} />
        ) : (
          boardList?.map((v) => (
            <CommunityAccordianCard
              data={v}
              user={user}
              updateLectureBoard={updateLectureBoard}
            />
          ))
        )}
      </BoardContainer>
    </Container>
  );
};
