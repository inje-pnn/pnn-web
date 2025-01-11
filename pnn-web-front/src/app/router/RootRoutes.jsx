import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../pages/auth/AuthPage";
import { UserRegistPage } from "../../pages/auth/UserRegistPage";
import { SharePage } from "../../pages/project/SharePage";
import { ShareUpload } from "../../pages/project/ShareUpload";
import { ShareDetail } from "../../pages/project/ShareDetail";
import Layout from "../../widgets/layout/Layout";
import { AdminPage } from "../../pages/admin/AdminPage";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Layout mainContent={<AuthPage />} />} />
      <Route path="/share" element={<Layout mainContent={<SharePage />} />} />
      <Route path="/share/upload" element={<Layout mainContent={<ShareUpload />} />} />
      <Route path="/share/detail" element={<Layout mainContent={<ShareDetail />} />} />
      <Route
        path="/auth/regist"
        element={<Layout mainContent={<UserRegistPage />} />}
      />
      <Route path="/admin" element={<Layout mainContent={<AdminPage />} />} />
    </Routes>
  );
};
