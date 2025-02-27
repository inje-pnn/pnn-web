import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import { AdminSideNavBar } from "./sideBar/AdminSideNavBar";
import { RegistBanner } from "../../shared/components/common/RegistBanner";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100dvh;

  @media (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    align-items: center;
  }
`;

const Main = styled.div`
  width: 100%;
  min-height: 92dvh; // height를 min-height로 변경
`;

// const BannerFrame = styled.div`
//   width: 100%;
//   height: 320px;
//   margin-top: 5vh;
//   padding: 20px;
//   h1 {
//     font-size: 100px;
//   }
// `;

// const Banner = () => {
//   return (
//     <BannerFrame>
//       <h1>Programming & Network</h1>
//     </BannerFrame>
//   );
// };

const Layout = ({ mainContent }) => {
  const isAdmin = mainContent.type.name.search("Admin");
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <Container>
      {/* 헤더는 항상 표시 */}
      {isAdmin === 0 ? <AdminSideNavBar /> : <Header />}

      <Main>{mainContent}</Main>

      {/* 메인 페이지가 아닐 때만 배너와 푸터 표시 */}
      {!isMainPage && (
        <>
          <RegistBanner />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default Layout;
