import styled from "styled-components";
import { useAuth } from "../../shared/hooks/auth/useAuth";

import { useEffect } from "react";

const Button = styled.button`
  width: 60%;
  height: 45px;
`;
export const GoogleAuthButton = () => {
  const { handleGoogleLogin } = useAuth();

  return <Button onClick={handleGoogleLogin}>구글을 통한 계정 로그인</Button>;
};
