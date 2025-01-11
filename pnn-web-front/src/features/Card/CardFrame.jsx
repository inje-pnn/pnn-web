import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pnnlogo from "./../../assets/images/pnnlogo.png";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  height: 345px;
  cursor: pointer;
  border: solid 1px;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border: solid 1px;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  gap: 8px;
  color: white;
`;

const SubTitleFrame = styled.div`
  color: gray;
  margin-top: 8px;
`;

const PlatformContainer = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
`;

const CardFrame = ({ project }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/share/detail")
  }

  return (
    <CardWrapper onClick={handleDetailClick}>
      <ImageFrame src={pnnlogo} alt={project.title} />
      <TitleFrame>
        <span>{project.title}</span>
        <PlatformContainer>
          <span>{project.platform}</span>
        </PlatformContainer>
      </TitleFrame>
      <SubTitleFrame>
        <span>{project.description}</span>
      </SubTitleFrame>
    </CardWrapper>
  );
};

export default CardFrame;