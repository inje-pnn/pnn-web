import React from "react";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";

const StyledChip = styled(Chip)(({ selected }) => ({
  margin: "10px",
  textTransform: "none",
  padding: "10px",
  borderRadius: "30px",
  transition: "all 0.3s ease",
  backgroundColor: selected ? "#667eea" : "#fff",
  color: selected ? "#fff" : "#000",
  fontSize: "16px",
  fontWeight: "600",
  border: selected ? "none" : "1px solid #ccc",
  "&:hover": {
    backgroundColor: selected ? "#5a67d8" : "#f5f5f5",
  },
}));

export const Filter = ({ selectedPlatform, setSelectedPlatform }) => {
  const platformOptions = [
    { platform: "ALL", value: "ALL" },
    { platform: "WEB", value: "WEB" },
    { platform: "APP", value: "APP" },
    { platform: "GAME", value: "GAME" },
    { platform: "AI", value: "AI" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {platformOptions.map((option) => (
        <StyledChip
          key={option.value}
          label={option.platform}
          clickable
          selected={selectedPlatform === option.value}
          onClick={() => setSelectedPlatform(option.value)}
        />
      ))}
    </div>
  );
};