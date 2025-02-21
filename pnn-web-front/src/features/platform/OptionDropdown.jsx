import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
} from "@mui/material";
import { getImage } from "../../shared/util/image";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  width: 100%;

  .MuiInputLabel-root {
    font-weight: bold;
  }

  .MuiSelect-root {
    padding-left: 20px;
    padding-right: 40px;
    font-size: 14px;
    min-height: 50px;
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

const StyledChip = styled(Chip)`
  background-color: ${(props) => props.bgcolor || "#f5f5f5"};
  &:hover {
    background-color: ${(props) => props.bgcolor || "#e0e0e0"};
  }
`;

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      overflowY: "auto",
    },
  },
  disableScrollLock: true,
};

export const OptionDropdown = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
}) => (
  <StyledFormControl variant="outlined">
    <InputLabel>{label}</InputLabel>
    <Select
      multiple={multiple}
      value={multiple ? (Array.isArray(value) ? value : []) : value}
      onChange={onChange}
      label={label}
      MenuProps={menuProps}
      renderValue={
        multiple
          ? (selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((val) => {
                  const { color } = getImage(val) || {};
                  return <StyledChip key={val} label={val} bgcolor={color} />;
                })}
              </Box>
            )
          : undefined
      }
    >
      {!multiple && (
        <MenuItem value="" disabled>
          선택
        </MenuItem>
      )}
      {options.map((option, index) => (
        <MenuItem key={index} value={option.title}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  </StyledFormControl>
);
