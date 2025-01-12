import { Card, CardActionArea } from "@mui/material";

export const MembershipPeriodCard = () => {
  return (
    <Card
      style={{
        width: 200,
        height: 100,
        border: "1px solid black",
        backgroundColor: "#ddd",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        가입 신청 기간 표시 공간
      </CardActionArea>
    </Card>
  );
};
