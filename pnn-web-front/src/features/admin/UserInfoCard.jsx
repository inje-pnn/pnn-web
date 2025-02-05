import { Card, CardActionArea } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import useUserStore from "../../shared/store/useUserStroe";
import { CardHeader } from "../../shared/components/admin/CardHeader";

const CustomCard = muiStyled(Card)(({ theme }) => ({
  width: "100%",
  height: "60%",
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
      <p>P&N 홈페이지 관리자 계정입니다.</p>
      <CardHeader title={"???"} />
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        등록된 계정수1 멤버수 신청 대기자1 등록된 계정수
      </CardActionArea>
    </CustomCard>
  );
};
