import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: gray;


  @media (min-width: 768px) {
    height: 15%;
    background-color: lightgray;
  }
`;

const GlobalNavigationBar = () => {
  return (
    <Container>
      test test
    </Container>
  );
};

export default GlobalNavigationBar;
