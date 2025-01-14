import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const FilterFrame = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  width: 110px;
  height: 45px;
  padding: 8px 16px;
  background-color: #1f2937;
  color: white;
  gap: 20px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 21%;
  margin-top: -8px;
  width: 110px;
  background-color: #1f2937;
  border-radius: 13px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 6px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 8px 16px;
  color: white;
  text-align: left;
  border: none;
  border-radius: 10px;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: #374151;
  }
`;

const Filter = ({ setSelectedPlatform }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectPlatformAll = () => {
    setSelectedPlatform("전체");
    setIsOpen(false);
  };

  const selectPlatformApp = () => {
    setSelectedPlatform("APP");
    setIsOpen(false);
  };

  const selectPlatformWeb = () => {
    setSelectedPlatform("WEB");
    setIsOpen(false);
  };

  return (
    <FilterFrame>
      <DropdownButton onClick={toggleDropdown}>
        플랫폼 {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </DropdownButton>

      <MenuContainer isOpen={isOpen}>
        <MenuItem onClick={selectPlatformAll}>전체</MenuItem>
        <MenuItem onClick={selectPlatformApp}>앱</MenuItem>
        <MenuItem onClick={selectPlatformWeb}>웹</MenuItem>
      </MenuContainer>
    </FilterFrame>
  );
};

export default Filter;