import React from "react";
import styled from "styled-components";
import { AdminPage } from "../../pages/admin/AdminPage";
import ButtonAppBar from "./Header/Header2";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 92dvh;
  border: 1px solid red;
  margin-top: 7vh;
  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
    border: 1px solid lightgray;
  }
`;

const Layout = ({ mainContent }) => {
  return (
    <Container>
      {mainContent?.type === AdminPage ? null : <ButtonAppBar />}
      <Main>{mainContent}</Main>
    </Container>
  );
};

export default Layout;
