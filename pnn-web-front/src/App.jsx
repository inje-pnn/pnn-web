import React from "react";
import styled from "styled-components";
import GlobalNavigationBar from "./components/GlobalNavigationBar";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <GlobalNavigationBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>?????ssssssssss??????</div>
    </Container>
  );
};

export default App;
