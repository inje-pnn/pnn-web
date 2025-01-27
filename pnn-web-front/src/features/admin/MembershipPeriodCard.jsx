import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "../../shared/components/admin/CardHeader";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "20%",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: 15,
  borderRadius: "10px",
  border: "1px solid #ddd",
}));

export const MembershipPeriodCard = () => {
  return (
    <CustomCard>
      <CardHeader title={"신청 기간"} />
      <CardActionArea
        sx={{
          height: "85%",
        }}
      >
        <p>현재 신청 기간으로 설정 되어 있지 않습니다..</p>
      </CardActionArea>
    </CustomCard>
  );
};
