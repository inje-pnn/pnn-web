import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserRegistPage = () => {
  const [grade, setGrade] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [name, setName] = useState("");
  const [gitHub, setGitHub] = useState("");
  return (
    <Container>
      <p>유저 등록 페이지 입니다.</p>
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
    </Container>
  );
};
