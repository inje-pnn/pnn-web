import React, { useState } from 'react';
import styled from 'styled-components';
import { fqaData } from '../../data/fqaData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FQAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-top: 120px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const FQATitle = styled.h2`
  font-size: 42px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

const FQAList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const FQAItem = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    border-radius: 6px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.04);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  color: #525252;
  
  @media (max-width: 768px) {
    font-size: 15px;
    gap: 10px;
  }
`;

const QMark = styled.span`
  color: #667eea;
  font-weight: bold;
  font-size: 28px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ArrowIcon = styled(KeyboardArrowDownIcon)`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Answer = styled.div`
  font-size: 19px;
  padding: ${({ isOpen }) => (isOpen ? '24px' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '180px' : '0')};
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  background-color: #f4f6fc;
  width: 95%;
  border-radius: 20px;
  margin: ${({ isOpen }) => (isOpen ? '10px 24px 24px 24px' : '0')};
  overflow: auto;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: ${({ isOpen }) => (isOpen ? '16px' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    border-radius: 12px;
    width: 92%;
    margin: ${({ isOpen }) => (isOpen ? '8px 16px 16px 16px' : '0')};
  }
`;

export const FQABox = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FQAContainer>
      <FQATitle>자주 묻는 질문</FQATitle>
      <FQAList>
        {fqaData.map((item, index) => (
          <FQAItem key={index}>
            <QuestionButton onClick={() => toggleQuestion(index)}>
              <QuestionText>
                <QMark>Q</QMark>
                {item.question}
              </QuestionText>
              <ArrowIcon isOpen={openIndex === index} />
            </QuestionButton>
            <Answer isOpen={openIndex === index}>
              {item.answer}
            </Answer>
          </FQAItem>
        ))}
      </FQAList>
    </FQAContainer>
  );
};