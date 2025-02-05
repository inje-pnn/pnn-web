import { Search } from "@mui/icons-material";
import { styled as muiStyled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
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
import { Filter } from "../../features/platform/components/Filter";
import { useCategoryFilter } from "../../shared/hooks/useCategoryFilter";
import { getImage } from "../../shared/util/image";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
const CustomChip = muiStyled(Chip)(({ color }) => ({
  width: "auto",
  height: 25,
  backgroundColor: `${color}`,
  marginRight: "5px",
}));

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FliterChipContainer = styled.div`
  height: 40%;
`;
const FramworkIcon = styled.img``;
export const CommunityFilter = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const {
    searchText,
    categoryList,
    selectedPlatform,
    selectedItemList,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  } = useCategoryFilter();

  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      !listRef.current.contains(event.target)
    ) {
      setIsSearchBoxOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchBoxOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchBoxOpen]);

  const onClickOpenButton = () => {
    if (buttonRef.current) {
      setIsSearchBoxOpen(!isSearchBoxOpen);
      const rect = buttonRef.current.getBoundingClientRect();
      setPopupPosition({
        top: rect.height, // 버튼 아래쪽에 위치
        left: rect.left + window.scrollX,
      });
    }
  };

  const onClickInput = (e) => {
    e.stopPropagation();
  };

  // 리스트에서 아이템 선택시
  const onClickListItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addSelectedItemList(e.target.textContent);
    setIsSearchBoxOpen(false);
  };

  // 칩 아이템 삭제 버튼 클릭시
  const onClickDeleteChipItem = (v, i) => {
    removeSelectedItemList(v);
  };

  return (
    <Container>
      <TitleContainer>
        <h1>스터디</h1>
        <Filter
          selectedPlatform={selectedPlatform}
          handleSelectedPlatform={handleSelectedPlatform}
        />
      </TitleContainer>
      <FliterChipContainer>
        {selectedItemList.map((v, i) => {
          const image = getImage(v);
          return (
            <CustomChip
              avatar={
                v !== "All" ? (
                  <FramworkIcon alt="Natacha" src={image.path} />
                ) : null
              }
              label={v}
              color={v !== "All" ? image.color : ""}
              onDelete={() => onClickDeleteChipItem(v, i)}
            />
          );
        })}
        <CustomSearchButton ref={buttonRef} onClick={onClickOpenButton}>
          {<Search />}
        </CustomSearchButton>
        {isSearchBoxOpen && (
          <SearchBoxContainer
            ref={listRef}
            top={popupPosition.y}
            left={popupPosition.left}
          >
            <SearchBoxHeader>
              <CustomSearchInput
                placeholder="Search"
                id="input-with-icon-adornment"
                value={searchText}
                onChange={(e) => onChangeSearchText(e)}
                onClick={onClickInput}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </SearchBoxHeader>
            <List onClick={onClickListItem}>
              {categoryList.map((v) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText className="list-text" primary={v.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SearchBoxContainer>
        )}
      </FliterChipContainer>
    </Container>
  );
};
