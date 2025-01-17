import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import testimage from "./../../assets/images/test.png";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 405px;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const ExplainFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 134px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.68);
  box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 1px 0px;
  backdrop-filter: blur(5px);
  border-radius: 0px 0px 14px 14px;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 16px;
  z-index: 1;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  gap: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SubTitleFrame = styled.div`
  color: white;
  margin-top: 4px;
  font-size: 14px;
`;

const PlatformContainer = styled.div`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: 12px;
  color: white;
`;

const CardFrame = ({ project }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/share/detail");
  };

  return (
    <CardWrapper onClick={handleDetailClick}>
      <ImageFrame src={testimage} alt={project.title} />

      <ExplainFrame>
        <TitleFrame>
          <h2>{project.title}</h2>
        </TitleFrame>

        <SubTitleFrame>
          <span>{project.description}</span>
        </SubTitleFrame>

        <PlatformContainer>
          <span>{project.platform}</span>
        </PlatformContainer>
      </ExplainFrame>
    </CardWrapper>
  );
};

export default CardFrame;