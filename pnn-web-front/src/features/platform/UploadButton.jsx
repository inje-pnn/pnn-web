import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)`
  background-color: #667eea;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 160px;
  right: 60px;

  &:hover {
    background-color: #5a67d8;
  }
`;

export const UploadButton = () => {
  const navigate = useNavigate();

  const onClickUpload = () => {
    navigate("/share/upload");
  }
  return (
    <StyledButton onClick={onClickUpload}>
      <UploadFileIcon />
    </StyledButton>
  );
};
