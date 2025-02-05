import React from "react";
import styled from "styled-components";
import ButtonAppBar from "./Header/Header2";
import { AdminSideNavBar } from "./sideBar/AdminSideNavBar";
import { RegistBanner } from "../../shared/components/common/RegistBanner";
import Footer from "./Footer/Footer";

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
  
  @media (min-width: 768px) {
    width: 1920px;
  }
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
  return (
    <Container>
      {isAdmin === 0 ? <AdminSideNavBar /> : <ButtonAppBar />}
      {/* <Banner /> */}
      <Main>{mainContent}</Main>
      <RegistBanner />
      <Footer />
    </Container>
  );
};

export default Layout;
