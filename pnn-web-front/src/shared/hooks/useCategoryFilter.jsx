import { useState } from "react";
import { categoryData } from "../data/categoryData";

export const useCategoryFilter = () => {
  // 게시판 데이터를 받아
  // 태그 업데이트시 선택되어 있는 값 조회해서 필터링 기능 구현
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");
  const [searchText, setSearchText] = useState("");
  const [selectedItemList, setSelectedItemList] = useState(["All"]);
  const [categoryList, setCategoryList] = useState(categoryData.framwork);

  const addSelectedItemList = (data) => {
    if (selectedItemList[0] === "All") selectedItemList.pop();
    const filteredList = categoryList.filter((v) => v.title !== data);
    setCategoryList(filteredList);
    setSelectedItemList((prev) => [...prev, data]);
  };
  const removeSelectedItemList = (item) => {
    const newArr = selectedItemList.filter((v) => v !== item);
    const filterArr = categoryData.framwork.filter(
      (category) => !newArr.includes(category.title)
    );
    if (newArr.length === 0) newArr.push("All");
    setCategoryList(filterArr);
    setSelectedItemList(newArr);
  };

  const onChangeSearchText = (e) => {
    const text = e.target.value;
    const filterArr = categoryData.framwork.filter(
      (category) => !selectedItemList.includes(category.title)
    );
    const newArr = filterArr.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchText(text);
    setCategoryList(newArr);
  };

  const handleSelectedPlatform = (v) => {
    setSelectedPlatform(v);
  };
  //   프로젝트 필터 함수 들어와야합니다.
  return {
    searchText,
    selectedItemList,
    selectedPlatform,
    categoryList,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  };
};
