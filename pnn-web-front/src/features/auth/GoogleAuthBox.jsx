import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import { useAuth } from "../../shared/hooks/auth/useAuth";
const Container = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 25px;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 50px;
    margin-top: 30%;
    width: 70%;
  }
`;
const CustomButton = muiStyled(Button)(({ theme }) => ({
  width: "80%",
  height: "45px",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: "25px",

  [theme.breakpoints.down("sm")]: {
    width: "70%", // 작은 화면에서 너비 변경
    height: "40px", // 버튼 높이 변경
    marginTop: "15px", // 위쪽 여백 조정
  },
}));

const Text = styled.p`
  font-size: 28px;
`;

const GoogleLogoIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;
export const GoogleAuthBox = () => {
  const { handleGoogleLogin } = useAuth();

  return (
    <Container>
      <Text>
        {"P&N에 오신 것을 환영합니다!\n 구글 계정으로\n 간단하게 가입해보세요."}
      </Text>

      <CustomButton onClick={handleGoogleLogin} variant="contained">
        <GoogleLogoIcon
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          alt="G"
        />
        구글을 통한 계정 로그인
      </CustomButton>
    </Container>
  );
};
