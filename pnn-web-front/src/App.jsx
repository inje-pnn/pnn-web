import React, { useEffect } from "react";
import { RootRoutes } from "./app/router/rootRoutes";
import { useAuth } from "./shared/hooks/auth/useAuth";

const App = () => {
  const { checkAutoLogin } = useAuth();
  useEffect(() => {
    console.log("???");
    checkAutoLogin();
  }, []);

  return <RootRoutes />;
};

export default App;
