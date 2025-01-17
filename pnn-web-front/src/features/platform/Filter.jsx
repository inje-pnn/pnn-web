import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ selected }) => ({
  marginTop: "50px",
  marginBottom: "50px",
  textTransform: "none",
  padding: "10px 0",
  width: "158px",
  height: "58px",
  borderRadius: "30px",
  transition: "all 0.3s ease",
  backgroundColor: selected ? "#667eea" : "#fff",
  color: selected ? "#fff" : "#000",
  fontSize: "21px",
  fontWeight: "600",
}));

const Filter = ({ selectedPlatform, setSelectedPlatform }) => {
  const platformOptions = [
    { platform: "ALL", value: "ALL" },
    { platform: "WEB", value: "WEB" },
    { platform: "APP", value: "APP" },
    { platform: "GAME", value: "GAME" },
    { platform: "AI", value: "AI" },
  ];

  return (
    <ButtonGroup
      sx={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {platformOptions.map((option) => (
        <StyledButton
          key={option.value}
          selected={selectedPlatform === option.value}
          onClick={() => setSelectedPlatform(option.value)}
        >
          {option.platform}
        </StyledButton>
      ))}
    </ButtonGroup>
  );
};

export default Filter;