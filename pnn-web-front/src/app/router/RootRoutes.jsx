import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../pages/auth/AuthPage";
import { UserRegistPage } from "../../pages/auth/UserRegistPage";
import Layout from "../../widgets/layout/Layout";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Layout mainContent={<AuthPage />} />} />
      <Route
        path="/auth/regist"
        element={<Layout mainContent={<UserRegistPage />} />}
      />
    </Routes>
  );
};
