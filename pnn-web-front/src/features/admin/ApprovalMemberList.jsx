import { Card, CardActionArea, ListItemButton } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "../../shared/components/admin/CardHeader";
import { useEffect } from "react";
import { filterMemberAuthority } from "../../shared/util/memberUtil";
import styled from "styled-components";

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
const CustomListItem = muiStyled(ListItemButton)(() => ({
  border: "1px solid #ddd",
  borderRadius: "5px",
  height: "55px",
  fontSize: "14px",
}));
const CardContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 5px;
`;
export const ApprovalMemberList = ({ pendingUsersList }) => {
  const testData = [
    {
      id: "testman1",
      name: "테스트맨",
      grade: "1학년",
      studentNumber: "20192618",
    },
    {
      id: "testman1",
      name: "테스트맨",
      grade: "1학년",
      studentNumber: "20192618",
    },
    {
      id: "testman1",
      name: "테스트맨",
      grade: "1학년",
      studentNumber: "20192618",
    },
  ];
  const onClickMemberApprovebutton = () => {
    //멤버 가입 승인 함수
  };
  return (
    <CustomCard>
      <CardHeader title={"가입 대기 명단"} />
      <CardContent>
        {pendingUsersList?.map((v) => (
          <CustomListItem key={`card-${v.id}`}>{v.email}</CustomListItem>
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
