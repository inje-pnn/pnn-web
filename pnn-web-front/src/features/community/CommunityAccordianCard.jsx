import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled as muiStyled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import styled from "styled-components";

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
export const CommunityAccordianCard = () => {
  const [isCheckin, setIsCheckin] = useState(false);
  return (
    <CustomAccordion>
      <CustomAccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <TitleContainer>
          <h2>React Native 강의 계정</h2>
          <h3>계정 공유자 호팔5</h3>
        </TitleContainer>
      </CustomAccordionSummary>

      <AccordionDetails>
        <p>사용중인 유저</p>
        <p>호팔1 호팔2 호팔3 호팔4</p>
        <p>id: test1234</p>
        <p>pw: test1234</p>
        <p>{isCheckin ? "시용" : "사용완료"} </p>
      </AccordionDetails>
    </CustomAccordion>
  );
};
