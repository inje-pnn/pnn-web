import { LogoBox } from "../../features/auth/LogoBox";
import styled from "styled-components";
import { GoogleAuthBox } from "../../features/auth/GoogleAuthBox";
import { RegistFormBox } from "../../features/auth/RegistFormBox";
import useUserStore from "../../shared/store/useUserStroe";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegistUserImage } from "../../features/auth/RegistUserImage";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    height: 100vh;
    flex-direction: row;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 0.35;

  @media (min-width: 768px) {
    flex: 0.5;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0.65;

  @media (min-width: 768px) {
    padding: 25px;
    flex: 0.5;
  }
`;

export const UserRegistPage = () => {
  const user = useUserStore((state) => state.user);

  // 분기 처리 필요
  return (
    <Container>
      <LogoContainer>
        <LogoBox />
      </LogoContainer>
      <FormContainer>
        <RegistFormBox user={user} />
      </FormContainer>
    </Container>
  );
};
