import React from "react";
import styled from "styled-components";
import Layout from "../widgets/layout/Layout";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    width: 1920px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

const MainContent = () => {
  return (
    <Container>
      test
    </Container>
  );
};

const App = () => {
  return <Layout mainContent={<MainContent />} />
};

export default App;