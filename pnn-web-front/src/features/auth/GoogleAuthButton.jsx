import styled from "styled-components";
import { useAuth } from "../../shared/hooks/auth/useAuth";
import Button from "@mui/material/Button";
const CustomButton = styled(Button)`
  width: 60%;
  height: 45px;
`;
export const GoogleAuthButton = () => {
  const { handleGoogleLogin } = useAuth();

  return (
    <CustomButton onClick={handleGoogleLogin} variant="contained">
      구글을 통한 계정 로그인
    </CustomButton>
  );
};
