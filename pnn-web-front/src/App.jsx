import React from "react";
import styled from "styled-components";
import GlobalNavigationBar from "./components/GlobalNavigationBar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  return (
    <Container>
      <GlobalNavigationBar />
    </Container>
  );
};

export default App;
