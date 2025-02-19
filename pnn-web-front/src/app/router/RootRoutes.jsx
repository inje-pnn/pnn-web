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
import ProtectedRoute from "./ProtectedRoute";
import { CommunityPage } from "../../pages/community/CommunityPage";
import { CommunityLecturePage } from "../../pages/community/CommunityLecturePage";
import useUserStore from "../../shared/store/useUserStroe";
import { useAuth } from "../../shared/hooks/auth/useAuth";
import { CommunityUploadPage } from "../../pages/community/CommnunityStudyUploadPage";
import { CommunityDetailPage } from "../../pages/community/CommunityDetailPage";

export const RootRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout mainContent={<MainPage />} />} />
      <Route path="/aboutus" element={<Layout mainContent={<AboutUs />} />} />

      <Route
        path="/auth"
        element={
          <ProtectedRoute user={user} type={"sign"}>
            <Layout mainContent={<AuthPage />} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth/regist"
        element={<Layout mainContent={<UserRegistPage />} />}
      />
      <Route path="/share" element={<Layout mainContent={<SharePage />} />} />
      <Route
        path="/share/upload"
        element={<Layout mainContent={<ShareUpload />} />}
      />
      <Route
        path="/share/detail/:id"
        element={<Layout mainContent={<ShareDetail />} />}
      />

      <Route
        path="/auth/regist"
        element={<Layout mainContent={<UserRegistPage />} />}
      />

      <Route
        path="/community"
        element={<Layout mainContent={<CommunityPage />} />}
      />

      <Route
        path="/community/lecture"
        element={
          <ProtectedRoute user={user} type="member">
            <Layout mainContent={<CommunityLecturePage />} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/study/upload"
        element={
          <ProtectedRoute user={user} type="member">
            <Layout mainContent={<CommunityUploadPage type="study" />} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/lecture/upload"
        element={
          <ProtectedRoute user={user} type="member">
            <Layout mainContent={<CommunityUploadPage type="lecture" />} />
          </ProtectedRoute>
        }
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
