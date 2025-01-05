import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { LogoBox } from "../../features/regist/component/LogoBox";

const Container = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: row;
  border: 1px solid black;
  position: relative;
`;
const LogoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  flex: 0.7;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  border: 1px solid black;
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
        <TextField
          id="fullWidth"
          label="학년"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <TextField
          id="fullWidth"
          label="학번"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />
        <TextField
          id="fullWidth"
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="fullWidth"
          label="깃허브 주소"
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
        />
        <Button variant="contained">등록</Button>
      </FormContainer>
    </Container>
  );
};
