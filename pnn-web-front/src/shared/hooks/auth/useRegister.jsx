import { useEffect, useState } from "react";

export const useRegister = (user) => {
  const [userFormData, setUserFormData] = useState({
    grade: "",
    studentNumber: "",
    name: "",
    gitHub: "",
  });
  const [hasError, setHasError] = useState({
    grade: false,
    studentNumber: false,
    name: false,
  });
  useEffect(() => {
    if (user.authority !== 3) {
      alert("접근 권한이 없습니다.");
    }
  }, []);

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
      const newObj = Object.keys(userFormData);
      const newError = { ...hasError };
      newObj.map((key) => {
        if (userFormData[key] === "") {
          newError[key] = true;
        }
      });

      setHasError(newError);
    } else {
      setHasError(false);
    }
  };
  return { userFormData, handleUserFormData, hasError, checkHasInvaildValue };
};
