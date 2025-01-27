import styled from "styled-components";
import { UserInfoCard } from "../../features/admin/UserInfoCard";
import { MembershipPeriodCard } from "../../features/admin/MembershipPeriodCard";
import { ApprovalMemberList } from "../../features/admin/ApprovalMemberList";
import { LectureListCard } from "../../features/admin/LectureListCard";
import { CurrentBoardList } from "../../features/admin/CurrentBoardList";
import { AdminSideNavBar } from "../../widgets/layout/sideBar/AdminSideNavBar";
import { useAdmin } from "../../shared/hooks/admin/useAdmin";

const Container = styled.div`
  display: flex;
  height: 100vh;
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
  border-radius: 25px;
  padding: 25px;
`;
export const AdminPage = () => {
  const { pendingUsersList, handlePendingUserList } = useAdmin();
  return (
    <Container>
      <DashBoardContainer>
        <LeftSection>
          <UserInfoCard />
          <MembershipPeriodCard />
          <CurrentBoardList />
        </LeftSection>
        <RightSection>
          <ApprovalMemberList
            pendingUsersList={pendingUsersList}
            handlePendingUserList={handlePendingUserList}
          />
          <LectureListCard />
        </RightSection>
      </DashBoardContainer>
    </Container>
  );
};
