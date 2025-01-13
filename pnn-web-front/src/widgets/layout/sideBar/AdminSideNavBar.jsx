import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  flex: 0.1;
  background-color: #f1f1f1;
  flex-direction: column;

  align-items: center;
`;
const Logo = styled.img`
  width: 80%;
  height: 95px;
  margin-bottom: 15px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-left: 20px;
  width: 100%;
`;
const LinkText = styled.p`
  margin-top: 10px;
`;

export const AdminSideNavBar = () => {
  const linkText = ["메인", "가입신청", "게시글 관리", "멤버관리", "강의정보"];
  return (
    <NavBar>
      <Logo src="/favicon_logo.png" />
      <LinkContainer>
        {linkText.map((v) => (
          <LinkText>{v}</LinkText>
        ))}
      </LinkContainer>
    </NavBar>
  );
};
