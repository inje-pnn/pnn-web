import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "../../shared/components/admin/CardHeader";
const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "60%",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: "15px",
  borderRadius: "10px",
  backgroundColor: "#ddd",

  "&:hover": {
    backgroundColor: "#677EE5",
  },
}));
export const LectureListCard = () => {
  return (
    <CustomCard>
      <CardHeader title={"계정 관리"} />
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <p>계정 리스트입니다.</p>
      </CardActionArea>
    </CustomCard>
  );
};
