import styled from "styled-components";
import { GoogleAuthButton } from "../../components/auth/GoogleAuthButton";
const Contaniner = styled.div`
  width: 100%;
  height: 100dvh;
  border: 15px solid black;
`;

export const AuthPage = () => {
  return (
    <Contaniner>
      <GoogleAuthButton />
    </Contaniner>
  );
};
