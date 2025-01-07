import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { LogoBox } from "../../features/regist/component/LogoBox";
import styled from "styled-components";
import { GoogleAuthButton } from "../../features/auth/GoogleAuthButton";

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
const TitleContainer = styled.div`
  margin-bottom: 50px;
  margin-top: 10%;
  width: 70%;
`;
const CustomTextFeild = styled(TextField)`
  width: 300px;
  margin-bottom: 10px;
`;
const CustomButton = styled(Button)`
  width: 300px;
`;
const Text = styled.p`
  font-size: 28px;
`;
export const UserRegistPage = () => {
  const [grade, setGrade] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [name, setName] = useState("");
  const [gitHub, setGitHub] = useState("");
  return (
    <Container>
      <LogoContainer>
        <LogoBox />
      </LogoContainer>

      <FormContainer>
        <TitleContainer>
          <Text>
            P&N은 <br />
            인제대학교 컴퓨터공학부
            <br /> 학술 동아리입니다.
          </Text>
          <Text>가입하고 다양한 활동을 해보세요.</Text>
        </TitleContainer>

        <GoogleAuthButton />
        <CustomTextFeild
          id="fullWidth"
          label="학년"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <CustomTextFeild
          id="fullWidth"
          label="학번"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />
        <CustomTextFeild
          id="fullWidth"
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomTextFeild
          id="fullWidth"
          label="깃허브 주소"
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
        />
        <CustomButton variant="contained">등록</CustomButton>
      </FormContainer>
    </Container>
  );
};
