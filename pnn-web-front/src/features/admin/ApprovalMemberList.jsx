import {
  Button,
  Card,
  CardActionArea,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "../../shared/components/admin/CardHeader";
import CheckIcon from "@mui/icons-material/Check";

import styled from "styled-components";
import { memberApi } from "../../shared/api/memberApi";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "90%",
  justifyItems: "center",
  justifyContent: "flex-start",
  borderRadius: "10px",
  // "&:hover": {
  //   backgroundColor: "#677EE5",
  // },
}));
const CustomListItem = muiStyled(ListItem)(() => ({
  border: "1px solid #ddd",
  borderRadius: "5px",
  height: "105px",
  fontSize: "14px",
  flexDirection: "row",
}));
const CardContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 5px;
`;
const CustomCheckIcon = muiStyled(CheckIcon)(() => ({}));
export const ApprovalMemberList = ({
  pendingUsersList,
  handlePendingUserList,
}) => {
  const onClickMemberApprovebutton = (v) => {
    //멤버 가입 승인 함수
    const { putApprovemUser } = memberApi();
    // 지정 사용자 일반 멤버로 권한 수정
    putApprovemUser(v.id, 1).then(() => {
      handlePendingUserList(v);
    });
  };
  console.log(pendingUsersList);
  return (
    <CustomCard>
      <CardHeader title={"가입 대기 명단"} />
      <CardContent>
        {pendingUsersList?.map((v) => (
          <CustomListItem key={`card-${v.id}`}>
            <div>
              <p>{v.student_grade} 학년</p>
              <p>{v.name}</p>
              <p>학번 {v.student_number}</p>
            </div>
            <Button color="success">
              <CheckIcon onClick={() => onClickMemberApprovebutton(v)} />
            </Button>
          </CustomListItem>
        ))}
      </CardContent>
      {/* <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <p>현재 가입 대기중인 멤버 리스트입니다.</p>
       
      </CardActionArea> */}
    </CustomCard>
  );
};
