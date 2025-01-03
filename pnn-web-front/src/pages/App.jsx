import React from "react";
import styled from "styled-components";
import Layout from "../widgets/layout/Layout";
import pnn1 from "../assets/images/pnn1.jpeg";
import PnnLogo from "../shared/PnnLogo/PnnLogo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
`;

const MainContent = () => {
  return (
    <Container>
      <img src={pnn1} />
      <PnnLogo />
    </Container>
  );
};

const App = () => {
  return <Layout mainContent={<MainContent />} />
};

export default App;