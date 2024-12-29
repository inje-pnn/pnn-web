import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../pages/authPage";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
