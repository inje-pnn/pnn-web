import { useEffect, useState } from "react";
import { categoryData } from "../data/categoryData";
let originalData;
export const useCategoryFilter = (getBoardList) => {
  const [projets, setProjects] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");
  const [searchText, setSearchText] = useState("");
  const [selectedItemList, setSelectedItemList] = useState(["All"]);
  const [categoryList, setCategoryList] = useState(categoryData.framwork);

  useEffect(() => {
    getBoardList().then((res) => {
      originalData = res;
      setProjects(res);
      console.log("originalData", originalData);
    });
  }, []);
  useEffect(() => {
    let filteringData;

    if (selectedPlatform === "ALL") {
      filteringData = originalData;
    } else {
      filteringData = originalData.filter(
        (data) => data.project_category === selectedPlatform
      );
    }
    if (selectedItemList && selectedItemList[0] !== "All") {
      filteringData = filteringData.filter((data) =>
        data.project_type.some((type) => selectedItemList.includes(type))
      );
    }
    setProjects(filteringData);
  }, [selectedItemList, selectedPlatform]);

  const addSelectedItemList = (data) => {
    if (selectedItemList[0] === "All") selectedItemList.pop();
    const hasItem = selectedItemList.find((v) => v === data);
    if (!hasItem) {
      const filteredList = categoryList.filter((v) => v.title !== data);
      setCategoryList(filteredList);
      setSelectedItemList((prev) => [...prev, data]);
    }
  };
  const removeSelectedItemList = (item) => {
    const newArr = selectedItemList.filter((v) => v !== item);
    if (newArr.length === 0) newArr.push("All");

    const filterArr = categoryData.framwork.filter(
      (category) => !newArr.includes(category.title)
    );

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
    projets,

    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  };
};
