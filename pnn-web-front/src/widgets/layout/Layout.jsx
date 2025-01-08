import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import ButtonAppBar from "./Header/Header2";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;

  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Main = styled.div`
  width: 1920px;
  height: 92dvh;
  margin-top: 7vh;
  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
  }
`;

const Layout = ({ mainContent }) => {
  return (
    <Container>
      <ButtonAppBar />
      <Main>{mainContent}</Main>
    </Container>
  );
};

export default Layout;
