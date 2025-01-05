import React from "react";
import styled from "styled-components";
import Layout from "./widgets/layout/Layout";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 1920px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const MainContent = () => {
  return (
    <Container>
      <Span>Programming & Network</Span>
      <h1>P & N</h1>
    </Container>
  );
};

const App = () => {
  return <Layout mainContent={<MainContent />} />
};

export default App;