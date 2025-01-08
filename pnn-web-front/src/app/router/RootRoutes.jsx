import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../pages/auth/AuthPage";
import { UserRegistPage } from "../../pages/auth/UserRegistPage";
import { SharePage } from "../../pages/share/SharePage";
import { ShareUpload } from "../../pages/share/ShareUpload";
import { ShareDetail } from "../../pages/share/ShareDetail";
import Layout from "../../widgets/layout/Layout";
import { AdminPage } from "../../pages/admin/AdminPage";
import AboutUs from "../../pages/AboutUs";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/aboutus" element={<Layout mainContent={<AboutUs />} />} />
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
