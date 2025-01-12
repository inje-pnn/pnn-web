import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "90%",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: "15px",
  borderRadius: "10px",
  backgroundColor: "#ddd",

  "&:hover": {
    backgroundColor: "#677EE5",
  },
}));
export const ApprovalMemberList = () => {
  return (
    <CustomCard>
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
