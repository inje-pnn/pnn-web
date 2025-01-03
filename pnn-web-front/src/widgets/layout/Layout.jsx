import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Main = styled.div`
  flex: 1;
`;

const Layout = ({ mainContent }) => {
  return (
    <Container>
      <Header />
      <Main>
        {mainContent}
      </Main>
    </Container>
  );
};

export default Layout;