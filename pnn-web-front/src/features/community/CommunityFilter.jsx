import { Search } from "@mui/icons-material";
import { styled as muiStyled } from "@mui/material/styles";
import {
  Box,
  Chip,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { categoryData } from "../../shared/data/categoryData";

const Container = styled.div`
  width: 100%;
`;
const SearchBoxContainer = muiStyled(Box)(({ top, left }) => ({
  position: "absolute",
  width: "180px",
  height: "250px",
  borderRadius: "8px",
  backgroundColor: "var(--default-background)",
  zIndex: "9999",
  top: `${top}px`, // 부모 기준으로 설정
  left: `${left}px`,
  border: "var(--default-card-border)",
  overflow: "scroll",
}));
const CustomSearchButton = muiStyled(IconButton)(({}) => ({
  backgroundColor: "var(--default-background)",
  border: "var(--default-card-border)",
  color: "#677EE5",
  width: 30,
  height: 30,
}));

const SearchBoxHeader = styled.div`
  display: flex;
  justify-content: center;
`;
const CustomSearchInput = muiStyled(Input)(({}) => ({
  backgroundColor: "var(--default-background)",
  border: "var(--default-card-border)",
  borderRadius: "15px",
  width: "90%",
}));
const CustomChip = muiStyled(Chip)(({}) => ({
  width: "auto",
}));
export const CommunityFilter = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(true);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [selectedItems, setSelectedItems] = useState([]);
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("seleceted Items", selectedItems);
  }, [selectedItems]);
  const onClickOpenButton = () => {
    if (buttonRef.current) {
      setIsSearchBoxOpen(!isSearchBoxOpen);
      const rect = buttonRef.current.getBoundingClientRect();
      console.log(rect);
      setPopupPosition({
        top: rect.height, // 버튼 아래쪽에 위치
        left: rect.left + window.scrollX,
      });
    }
  };
  const handleClose = () => {
    setIsSearchBoxOpen(false);
  };
  const onClickInput = (e) => {
    e.stopPropagation();
  };
  const onClickListItem = (e) => {
    setSelectedItems((prev) => [...prev, e.target.textContent]);
    setIsSearchBoxOpen(false);
  };
  return (
    <Container>
      <div>
        <h3>프로젝트</h3>
      </div>
      <div>
        {selectedItems.map((v) => (
          <CustomChip label={v} onDelete={() => {}} />
        ))}
        <CustomSearchButton ref={buttonRef} onClick={onClickOpenButton}>
          <Search />
        </CustomSearchButton>
        {isSearchBoxOpen && (
          <SearchBoxContainer top={popupPosition.y} left={popupPosition.left}>
            <SearchBoxHeader>
              <CustomSearchInput
                onClick={onClickInput}
                placeholder="Search"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </SearchBoxHeader>
            <List onClick={onClickListItem}>
              {categoryData.framwork.map((v) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText className="list-text" primary={v.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div></div>
          </SearchBoxContainer>
        )}
      </div>
    </Container>
  );
};
