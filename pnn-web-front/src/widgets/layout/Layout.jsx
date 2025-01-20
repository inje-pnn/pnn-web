import React from "react";
import styled from "styled-components";
import ButtonAppBar from "./Header/Header2";
import { AdminSideNavBar } from "./sideBar/AdminSideNavBar";
import { RegistBanner } from "../../shared/components/common/RegistBanner";

const Container = styled.div`
  width: 100%;
  height: 100dvh;

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

  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
  }
`;

const Layout = ({ mainContent }) => {
  const isAdmin = mainContent.type.name.search("Admin");
  return (
    <Container>
      {isAdmin === 0 ? <AdminSideNavBar /> : <ButtonAppBar />}
      <Main>{mainContent}</Main>
      <RegistBanner />
    </Container>
  );
};

export default Layout;
