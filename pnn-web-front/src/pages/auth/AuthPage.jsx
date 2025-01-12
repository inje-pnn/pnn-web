import styled from "styled-components";
import GoogleLogin from "../test";

const Contaniner = styled.div`
  width: 100%;
  height: 100dvh;
  border: 15px solid black;
`;

export const AuthPage = () => {
  return (
    <Contaniner>
      <GoogleLogin />
    </Contaniner>
  );
};
