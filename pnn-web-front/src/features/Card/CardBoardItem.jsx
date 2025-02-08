import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  width: 350px;
  height: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.1); /* 이미지 확대 */
  }
`;
const CardContent = styled.div`
  width: 100%;
  height: 30%;
  background-color: #c1c1c1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const CardBoardItem = ({ item }) => {
  console.log(item);
  return (
    <Container className="card-item">
      <CardContainer>
        <CardImage src="src/assets/images/community_test.png" />
      </CardContainer>
      <CardContent>
        <h3>{item.title}</h3>
        <div>{item.category}</div>
        <div>{item.type}</div>
      </CardContent>
    </Container>
  );
};
