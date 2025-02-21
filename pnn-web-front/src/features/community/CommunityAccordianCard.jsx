import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const CustomAccordion = muiStyled(Accordion)(({ theme }) => ({
  marginBottom: 20,
}));
const CustomAccordionSummary = muiStyled(AccordionSummary)(({ theme }) => ({
  width: 650,
  height: 200,
  borderRadius: 5,
  backgroundImage: `url(/src/assets/images/rn_cover.png)`,
  backgroundSize: "cover",
  backgroundPosition: "left",
  padding: 0,
}));
const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0;
  background-color: #f1f1f1;
  opacity: 0.9;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const SecretInput = styled.div`
  display: flex;
  width: 200px;
  height: 25px;
  border-radius: 25px;
  background-color: #ddd;
  color: #828282;
  padding-left: 10px;
  align-items: center;
  font-size: 14px;
  margin-right: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomButton = muiStyled(Button)(({ theme }) => ({
  background: "#f1f1f1",
  borderRadius: "20px",
  width: 80,
  color: "#000000",
}));

export const CommunityAccordianCard = ({ data }) => {
  console.log(data);
  const [isCheckin, setIsCheckin] = useState(true);
  return (
    <CustomAccordion>
      <CustomAccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <TitleContainer>
          <h2>{data.title}</h2>
          <h3>계정 공유자 {data.sharer}</h3>
          <p>{data.description}</p>
        </TitleContainer>
      </CustomAccordionSummary>

      <AccordionDetails>
        <p>사용중인 유저</p>
        <TextContainer>
          {data.username.map((v) => (
            <p>{v}</p>
          ))}
        </TextContainer>
        <TextContainer>
          id: <SecretInput>{isCheckin ? data.account_id : null}</SecretInput>
          pw:{" "}
          <SecretInput>{isCheckin ? data.account_password : null}</SecretInput>
        </TextContainer>
        <ButtonContainer>
          <CustomButton>{isCheckin ? "사용완료" : "사용하기"} </CustomButton>
        </ButtonContainer>

        {isCheckin}
      </AccordionDetails>
    </CustomAccordion>
  );
};
