import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import testimage from "../../assets/images/test.png";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 326px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 226px;
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ExplainFrame = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TitleFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`;

const SubTitleFrame = styled.div`
  font-size: 14px;
  line-height: 1.4;
  margin-top: 4px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: auto;
  font-size: 13px;
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

        <TagContainer>
          <span>{project.platform}</span>
        </TagContainer>
      </ExplainFrame>
    </CardWrapper>
  );
};

export default CardFrame;
