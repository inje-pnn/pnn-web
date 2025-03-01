import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  height: 100vh;
`;
const TitleContainer = styled.div`
  display: flex;
  border: 1px solid black;
  flex: 0.3;
`;
const Content = styled.div`
  display: flex;
  border: 1px solid black;
  flex: 0.7;
`;
export const CommunityDetailPage = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>상세 페이지입니다.</h1>
      </TitleContainer>
      <Content></Content>
    </Container>
  );
};
