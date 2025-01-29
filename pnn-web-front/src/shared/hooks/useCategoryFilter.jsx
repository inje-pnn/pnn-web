import { useState } from "react";

export const useCategoryFilter = () => {
  const [categorys, setCategorys] = useState([]);
  const handleSetCategorys = () => {};
  return {
    categorys,
    handleSetCategorys,
  };
};
