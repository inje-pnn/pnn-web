import styled from "styled-components";
import { UserInfoCard } from "../../features/admin/UserInfoCard";
import { MembershipPeriodCard } from "../../features/admin/\bMembershipPeriodCard";
import { ApprovalMemberList } from "../../features/admin/ApprovalMemberList";
import { LectureListCard } from "../../features/admin/LectureListCard";
import { CurrentBoardList } from "../../features/admin/CurrentBoardList";
import { AdminSideNavBar } from "../../widgets/layout/sideBar/AdminSideNavBar";

const Container = styled.div`
  display: flex;
  height: 90vh;
  border-radius: 25px;
`;
const LeftSection = styled.div`
  display: flex;
  flex: 0.5;

  flex-direction: column;
  padding: 25px;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  padding: 25px;
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
      <AdminSideNavBar />

      <DashBoardContainer>
        <LeftSection>
          <UserInfoCard />

          <MembershipPeriodCard />
          <CurrentBoardList />
        </LeftSection>
        <RightSection>
          <ApprovalMemberList />
          <LectureListCard />
        </RightSection>
      </DashBoardContainer>
    </Container>
  );
};
