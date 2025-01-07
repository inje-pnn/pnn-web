import React, { useEffect } from "react";
import styled from "styled-components";

import GlobalNavigationBar from "./widgets/GlobalNavigationBar";
import { useAuth } from "./shared/hooks/auth/useAuth";
import Header from "./widgets/layout/Header/Header";
import { RootRoutes } from "./app/router/rootRoutes";

const App = () => {
  const { checkAutoLogin } = useAuth();
  useEffect(() => {
    checkAutoLogin();
  }, []);
  useEffect(() => {
    console.log("eqweqwew");
  }, []);
  return <RootRoutes />;
};

export default App;
