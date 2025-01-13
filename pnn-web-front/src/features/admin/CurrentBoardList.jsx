import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { CardHeader } from "./components/CardHeader";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "60%",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: 15,
  borderRadius: "10px",
  border: "1px solid #ddd",
}));
export const CurrentBoardList = () => {
  return (
    <CustomCard>
      <CardHeader title={"최근 생성된 게시글"} />
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        최근 생성된 게시글
      </CardActionArea>
    </CustomCard>
  );
};
