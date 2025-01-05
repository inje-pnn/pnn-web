import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalNavigationBar from "./widgets/GlobalNavigationBar";
import { useAuth } from "./shared/hooks/auth/useAuth";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  const { checkAutoLogin } = useAuth();
  useEffect(() => {
    checkAutoLogin();
  }, []);
  return (
    <Container>
      <GlobalNavigationBar />
    </Container>
  );
};

export default App;
