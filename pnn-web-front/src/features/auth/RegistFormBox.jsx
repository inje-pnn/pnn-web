import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRegister } from "../../shared/hooks/auth/useRegister";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  @media (min-width: 768px) {
    margin-top: 15%;
  }
`;
const CustomTextFeild = styled(TextField)`
  width: 70%;
  @media (min-width: 768px) {
    margin-bottom: 10px;
    width: 300px;
  }
`;
const CustomButton = styled(Button)`
  width: 70%;
  @media (min-width: 768px) {
    margin-bottom: 10px;
    width: 300px;
  }
`;

const Text = styled.p`
  white-space: pre-line;
  font-size: 28px;
  margin-bottom: 25px;
`;
const TitleContainer = styled.div`
  width: 100%;
  white-space: pre-line;
  background-color: red;
  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
const InfoText = styled.p`
  font-size: 14px;
  color: #c1c1c1;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 16px;
`;
export const RegistFormBox = () => {
  const { userFormData, handleUserFormData, hasError, checkHasInvaildValue } =
    useRegister();
  const onClickSubmiBtn = () => {
    //요청이 끝난후 정상적으로 처리시?
    if (grade && studentNumber && name && gitHub) {
    }
  };
  const onChangeInputValue = (e) => {
    const { name, value } = e.target;
    handleUserFormData(name, value);
  };
  return (
    <Container>
      <Text>{"P&N에 가입하고\n 다양한 활동을 해보세요."}</Text>

      <CustomTextFeild
        name="grade"
        id="fullWidth"
        label="학년"
        error={hasError}
        value={userFormData.grade}
        onChange={onChangeInputValue}
      />
      <CustomTextFeild
        name="studentNumber"
        id="fullWidth"
        label="학번"
        error={hasError}
        value={userFormData.studentNumber}
        onChange={onChangeInputValue}
      />
      <CustomTextFeild
        name="name"
        id="fullWidth"
        label="이름"
        error={hasError}
        value={userFormData.name}
        onChange={onChangeInputValue}
      />
      <CustomTextFeild
        name="gitHub"
        id="fullWidth"
        label="깃허브 주소"
        value={userFormData.gitHub}
        onChange={onChangeInputValue}
      />
      <CustomButton variant="contained" onClick={checkHasInvaildValue}>
        등록
      </CustomButton>
      {hasError && <ErrorText>빈 칸을 입력해주세요.</ErrorText>}
      <InfoText>관리자에게 권한을 받은 이후 자유롭게 이용가능합니다.</InfoText>
    </Container>
  );
};
