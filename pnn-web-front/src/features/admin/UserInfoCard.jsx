import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import useUserStore from "../../shared/store/useUserStroe";
import { CardHeader } from "./components/CardHeader";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "50%",
  justifyItems: "center",
  justifyContent: "flex-start",
  borderRadius: "10px",
}));

const UserImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  border-radius: 50%;
`;
export const UserInfoCard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <CustomCard>
      <CardHeader title={"사용자 정보"} />
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <UserImage />
        <p>현재 접속중인 계정입니다.</p>
        <p>{user.id}</p>
      </CardActionArea>
    </CustomCard>
  );
};
