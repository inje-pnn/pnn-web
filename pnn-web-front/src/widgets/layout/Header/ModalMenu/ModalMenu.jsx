import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 20%;
  position: fixed;
  top: 6dvh;
  left: 0;
  z-index: 1;
  background-color: white; /* 🔥 배경 고정 */
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 15px;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: #f8f8f8 !important; /* 🔥 살짝 연한 회색 */
    color: black !important;
  }

  &:active {
    background-color: #f0f0f0 !important; /* 🔥 클릭 시 살짝 더 어두운 회색 */
  }
`;

const ExpandableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "100px" : "0px")}; /* 🔥 높이 변화 */
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const ExpandMenuItem = styled(MenuItem)`
  background-color: #f9f9f9; /* 🔥 서브 메뉴 기본 배경 */
  font-size: 14px;
  height: 35px;
  transition: background-color 0.2s ease-in-out;
  font-weight: 600;
  color: #484848;
  &:hover {
    background-color: #f1f1f1 !important;
  }

  &:active {
    background-color: #e8e8e8 !important; /* 🔥 클릭 시 색감 유지 */
  }
`;

const ModalMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickMenu = (link) => {
    navigate(link);
    onClose && onClose();
  };

  return (
    <Container>
      <MenuItem onClick={() => onClickMenu("/aboutus")}>소개</MenuItem>
      <MenuItem onClick={() => onClickMenu("/share")}>프로젝트</MenuItem>
      <MenuItem onClick={() => setIsExpanded(!isExpanded)}>커뮤니티</MenuItem>
      <ExpandableContainer isOpen={isExpanded}>
        <ExpandMenuItem onClick={() => onClickMenu("/community/study")}>
          스터디
        </ExpandMenuItem>
        <ExpandMenuItem onClick={() => onClickMenu("/community/lecture")}>
          강의계정
        </ExpandMenuItem>
      </ExpandableContainer>
      <MenuItem onClick={() => onClickMenu("/recruiting")}>지원하기</MenuItem>
    </Container>
  );
};

export default ModalMenu;
