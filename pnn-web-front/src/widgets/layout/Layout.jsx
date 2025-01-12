import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import { AdminPage } from "../../pages/admin/AdminPage";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;

  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
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
      {mainContent?.type === AdminPage ? null : <Header />}
      <Main>{mainContent}</Main>
    </Container>
  );
};

export default Layout;
