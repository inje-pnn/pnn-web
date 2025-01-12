import styled from "styled-components";
import { UserInfoCard } from "../../features/admin/UserInfoCard";
import { MembershipPeriodCard } from "../../features/admin/\bMembershipPeriodCard";
import { ApprovalMemberList } from "../../features/admin/ApprovalMemberList";

const Container = styled.div`
  display: flex;
  height: 90vh;
  border-radius: 25px;
`;
const LeftSection = styled.div`
  display: flex;
  flex: 0.45;

  flex-direction: column;
  padding: 25px;
`;
const RightSection = styled.div`
  display: flex;
  flex: 0.45;
`;
const NavBar = styled.div`
  display: flex;
  flex: 0.1;
  background-color: #f1f1f1;
`;
const DashBoardContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 55px;
  border: 2px solid #ddd;
  border-radius: 25px;
  padding: 25px;
  border: 2px solid #ddd;
  background-color: #d1d1d1;
`;
export const AdminPage = () => {
  return (
    <Container>
      <NavBar />
      <DashBoardContainer>
        <LeftSection>
          <h1>P&N 홈페이지 관리자 전용 페이지입니다.</h1>
          <UserInfoCard />
          <UserInfoCard />
          <MembershipPeriodCard />
        </LeftSection>
        <RightSection>
          <ApprovalMemberList />
        </RightSection>
      </DashBoardContainer>
    </Container>
  );
};
