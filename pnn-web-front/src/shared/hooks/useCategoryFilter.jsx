import { useEffect, useState } from "react";
import { categoryData } from "../data/categoryData";
import { boardData } from "../data/boardData";

export const useCategoryFilter = () => {
  const [projets, setProjects] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("ALL");
  const [searchText, setSearchText] = useState("");
  const [selectedItemList, setSelectedItemList] = useState(["All"]);
  const [categoryList, setCategoryList] = useState(categoryData.framwork);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.post(
          "https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/get",
          {}
        );

        if (response.status === 200) {
          const projectData = response.data.map((project) => ({
            id: project.id,
            title: project.title,
            subTitle: project.sub_title,
            category: project.project_category,
            type: project.project_type,
            imageUrl: project.image,
          }));

          setProjects(projectData);
        }
      } catch (error) {
        console.error("프로젝트 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    // fetchProjects();
    setProjects(boardData);
  }, []);

  useEffect(() => {
    let filteringData;
    if (selectedPlatform === "ALL") {
      filteringData = boardData;
    } else {
      filteringData = boardData.filter(
        (data) => data.category === selectedPlatform
      );
    }

    if (selectedItemList && selectedItemList[0] !== "All") {
      filteringData = filteringData.filter((data) =>
        data.type.some((type) => selectedItemList.includes(type))
      );
    }
    setProjects(filteringData);
  }, [selectedItemList, selectedPlatform]);

  const handleSetCategorys = () => {};

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
    handleSetCategorys,
    onChangeSearchText,
    addSelectedItemList,
    removeSelectedItemList,
    handleSelectedPlatform,
  };
};
