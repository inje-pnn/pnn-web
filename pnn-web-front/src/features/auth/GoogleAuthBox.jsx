import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import { useAuth } from "../../shared/hooks/auth/useAuth";
const Container = styled.div`
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    margin-bottom: 50px;
    margin-top: 30%;
    width: 70%;
  }
`;
const CustomButton = muiStyled(Button)(({ theme }) => ({
  width: "100%",
  height: "45px",
  justifyItems: "center",
  justifyContent: "flex-start",
  marginTop: "25px",
  backgroundColor: "#677EE5",
  "&:hover": {
    backgroundColor: "#677EE5",
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
        P&N은 <br />
        인제대학교 컴퓨터공학부
        <br /> 학술 동아리입니다.
      </Text>
      <Text>가입하고 다양한 활동을 해보세요.</Text>
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
