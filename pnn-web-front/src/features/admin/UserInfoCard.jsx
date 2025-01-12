import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import useUserStore from "../../shared/store/useUserStroe";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "215px",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: "15px",
  borderRadius: "10px",
  backgroundColor: "#ddd",

  "&:hover": {
    backgroundColor: "#677EE5",
  },
}));
export const UserInfoCard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <CustomCard>
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <p>현재 접속중인 계정입니다.</p>
        <p>{user.id}</p>
      </CardActionArea>
    </CustomCard>
  );
};
