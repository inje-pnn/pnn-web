import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-bottom: 16px;

  .MuiInputLabel-root {
    font-weight: bold;
  }

  .MuiSelect-root {
    padding-left: 20px;
    padding-right: 40px;
    font-size: 14px;
    height: 50px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #dbdbdb;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid #dbdbdb;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid #222222;
  }
`;

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8, // 드롭다운의 최대 높이 조정
      overflowY: "auto", // 드롭다운 스크롤 설정
    },
  },
  disableScrollLock: true, // body 스크롤 잠금 비활성화
};

export const Dropdown = ({ label, options, onChange }) => (
  <StyledFormControl variant="outlined">
    <InputLabel>{label}</InputLabel>
    <Select
      defaultValue=""
      onChange={onChange}
      label={label}
      MenuProps={menuProps} // MenuProps 적용
    >
      <MenuItem value="" disabled>
        선택
      </MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </StyledFormControl>
);
