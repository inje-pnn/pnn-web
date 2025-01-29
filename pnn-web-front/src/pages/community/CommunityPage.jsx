import useUserStore from "../../shared/store/useUserStroe";
import { useEffect } from "react";
import styled from "styled-components";
import { boardData } from "../../shared/data/boardData";
import CardFrame from "../../features/Card/CardFrame";
import { CardBoardItem } from "../../features/Card/CardBoardItem";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const BoardTitleContainer = styled.div`
  display: flex;
  flex: 0.2;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;
const BoardContainer = styled.div`
  display: flex;
  flex: 0.8;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개씩 */
    gap: 16px; /* 카드 간격 */
    width: 90%; /* 내부 그리드 컨테이너 너비 */
    height: auto; /* 높이는 카드 내용에 따라 자동 조절 */
  }

  .card-item {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const GridContainer = styled.div``;

export const CommunityPage = () => {
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, []);
  function CardBoardItem({ item }) {
    return (
      <div className="card-item">
        <h3>{item.title}</h3>
      </div>
    );
  }
  return (
    <Container>
      <BoardTitleContainer>
        <h1>커뮤니티 페이지입니다.</h1>
      </BoardTitleContainer>
      <BoardContainer>
        <div className="grid-container">
          {boardData.map((v) => (
            <CardBoardItem item={v} />
          ))}
        </div>
      </BoardContainer>
    </Container>
  );
};
