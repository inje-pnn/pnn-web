import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "./components/CardHeader";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "90%",
  justifyItems: "center",
  justifyContent: "flex-start",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#677EE5",
  },
}));
export const ApprovalMemberList = () => {
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
  return (
    <CustomCard>
      <CardHeader title={"가입 대기 명단"} />
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <p>현재 가입 대기중인 멤버 리스트입니다.</p>
      </CardActionArea>
    </CustomCard>
  );
};
