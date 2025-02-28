import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../shared/store/useUserStroe";

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
  min-width: unset;

  &:hover {
    background-color: #5a67d8;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 120px;
    right: 20px;
  }
`;

export const UploadButton = ({ path }) => {
  const navigate = useNavigate();
  const onClickUpload = () => {
    navigate(path);
  };

  return (
    <StyledButton onClick={onClickUpload}>
      <UploadFileIcon />
    </StyledButton>
  );
};
