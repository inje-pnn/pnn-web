import React, { useEffect } from "react";
import styled from "styled-components";



import GlobalNavigationBar from "./widgets/GlobalNavigationBar";
import { useAuth } from "./shared/hooks/auth/useAuth";


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



const App = () => {
  const { checkAutoLogin } = useAuth();
  useEffect(() => {
    checkAutoLogin();
  }, []);

  return (
    <Container>

    </Container>
  );
};

export default App;

