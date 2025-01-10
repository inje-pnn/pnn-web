import { LogoBox } from "../../features/auth/LogoBox";
import styled from "styled-components";
import { GoogleAuthBox } from "../../features/auth/GoogleAuthBox";
import { RegistFormBox } from "../../features/auth/RegistFormBox";
import useUserStore from "../../shared/store/useUserStroe";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: row;
  position: relative;
`;
const LogoContainer = styled.div`
  display: flex;
  flex: 0.6;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  padding: 25px;
`;

export const UserRegistPage = () => {
  const data = useUserStore((state) => state.user);
  console.log("user", data);
  const [tData, setTdata] = useState(false);
  // 분기 처리 필요
  return (
    <Container>
      <LogoContainer>
        <LogoBox />
      </LogoContainer>
      <FormContainer>
        {tData ? <GoogleAuthBox /> : <RegistFormBox />}
      </FormContainer>
      <button
        onClick={() => {
          setTdata(!tData);
        }}
      >
        change
      </button>
    </Container>
  );
};
