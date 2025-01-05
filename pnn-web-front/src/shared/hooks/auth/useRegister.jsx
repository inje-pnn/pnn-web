import { useState } from "react";

export const useRegister = () => {
  const [userFormData, setUserFormData] = useState({
    grade: "",
    studentNumber: "",
    name: "",
    gitHub: "",
  });
  const handleUserFormData = (data) => {};
  return {};
};
