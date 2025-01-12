import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRegister } from "../../shared/hooks/auth/useRegister";
const CustomTextFeild = styled(TextField)`
  width: 300px;
  margin-bottom: 10px;
`;
const CustomButton = styled(Button)`
  width: 300px;
`;
const Container = styled.div`
  margin-bottom: 50px;
  margin-top: 15%;
  width: 70%;
`;
const Text = styled.p`
  font-size: 28px;
`;
const TitleContainer = styled.div`
  margin-bottom: 25px;
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
      <TitleContainer>
        <Text>
          P&N은 <br />
          인제대학교 컴퓨터공학부
          <br /> 학술 동아리입니다.
        </Text>
        <Text>가입하고 다양한 활동을 해보세요.</Text>
      </TitleContainer>
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
