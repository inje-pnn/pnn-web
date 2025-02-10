import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 326px;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 226px;
  object-fit: cover;
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
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;

const SubTitleFrame = styled.div`
  font-size: 14px;
  color: #666;
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

const Tag = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CardFrame = ({ project }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/share/detail/${project.id}`);
  };

  return (
    <CardWrapper onClick={handleDetailClick}>
      <ImageFrame src={project.imageUrl} alt={project.title} />
      <ExplainFrame>
        <TitleFrame>
          <h2>{project.title}</h2>
        </TitleFrame>

        <SubTitleFrame>{project.subTitle}</SubTitleFrame>

        <TagContainer>
          <Tag>#{project.category}</Tag>
          <Tag>#{project.tag}</Tag>
        </TagContainer>
      </ExplainFrame>
    </CardWrapper>
  );
};

export default CardFrame;
