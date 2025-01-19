import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../pages/auth/AuthPage";
import { UserRegistPage } from "../../pages/auth/UserRegistPage";
import { SharePage } from "../../pages/project/SharePage";
import { ShareUpload } from "../../pages/project/ShareUpload";
import { ShareDetail } from "../../pages/project/ShareDetail";
import Layout from "../../widgets/layout/Layout";
import { AdminPage } from "../../pages/admin/AdminPage";
import { MainPage } from "../../pages/main/MainPage";
import AboutUs from "../../pages/AboutUs";
import { AdminMemberControlPage } from "../../pages/admin/AdminMemberControlPage";
import useUserStore from "../../shared/store/useUserStroe";
import ProtectedRoute from "./ProtectedRoute";

export const RootRoutes = () => {
  const user = useUserStore((state) => state.user);
  console.log(user.data);
  // const isAdmin = user.
  return (
    <Routes>
      <Route path="/" element={<Layout mainContent={<MainPage />} />} />
      <Route path="/aboutus" element={<Layout mainContent={<AboutUs />} />} />

      <Route
        path="/auth"
        element={
          <ProtectedRoute user={user}>
            <Layout mainContent={<AuthPage />} />
          </ProtectedRoute>
        }
      />

      <Route path="/share" element={<Layout mainContent={<SharePage />} />} />
      <Route
        path="/share/upload"
        element={<Layout mainContent={<ShareUpload />} />}
      />
      <Route
        path="/share/detail"
        element={<Layout mainContent={<ShareDetail />} />}
      />
      <Route
        path="/auth/regist"
        element={<Layout mainContent={<UserRegistPage />} />}
      />
      {/* 관리자 페이지 라우트 */}
      <Route path="/admin" element={<Layout mainContent={<AdminPage />} />} />

      <Route
        path="/admin/member"
        element={<Layout mainContent={<AdminMemberControlPage />} />}
      />
      <Route
        path="/admin/membership"
        element={<Layout mainContent={<AdminPage />} />}
      />
      <Route
        path="/admin/board"
        element={<Layout mainContent={<AdminPage />} />}
      />
      <Route
        path="/admin/account"
        element={<Layout mainContent={<AdminPage />} />}
      />
    </Routes>
  );
};
