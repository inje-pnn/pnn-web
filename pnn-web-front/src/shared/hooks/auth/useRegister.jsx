import { useState } from "react";

export const useRegister = () => {
  const [userFormData, setUserFormData] = useState({
    grade: "",
    studentNumber: "",
    name: "",
    gitHub: "",
  });
  const [hasError, setHasError] = useState(false);
  const handleUserFormData = (field, value) => {
    setUserFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const checkHasInvaildValue = () => {
    if (
      !(userFormData.grade && userFormData.studentNumber && userFormData.name)
    ) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  return { userFormData, handleUserFormData, hasError, checkHasInvaildValue };
};
