import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    width: 1920px;
    height: 100vh;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 92vh;
  margin-top: 7vh;

  @media (min-width: 768px) {
    width: 1920px;
    height: 94vh;
    border: 1px solid lightgray;
    margin: 0px;
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