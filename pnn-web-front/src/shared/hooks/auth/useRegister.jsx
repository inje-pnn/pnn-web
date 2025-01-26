import { useEffect, useState } from "react";
import { memberApi } from "../../api/memberApi";
import { useNavigate } from "react-router-dom";

export const useRegister = (user) => {
  const [userFormData, setUserFormData] = useState({
    grade: "",
    studentNumber: "",
    name: "",
    gitHub: "",
  });
  const [hasError, setHasError] = useState({});
  const { putUserUpdate } = memberApi();
  const navigate = useNavigate();
  useEffect(() => {
    // if (user.authority !== 3) {
    //   alert("접근 권한이 없습니다.");
    // }
  }, []);

  const handleUserFormData = (field, value) => {
    setUserFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const fetchUserData = async () => {
    const res = await putUserUpdate(user.id, userFormData);
    if (res === 200) {
      alert("신청이 완료 되었습니다.");
      navigate("/");
    } else {
      alert("알 수 없는 오류로 인하여 실패하였습니다.");
    }
  };

  const checkHasInvaildValue = () => {
    const newArr = {
      name: false,
      grade: false,
      studentNumber: false,
      gitHub: false,
      message: "",
    };
    const emptyKey = Object.entries(userFormData)
      .filter(([key, value]) => value === "" && key !== "gitHub")
      .map(([key]) => key);
    if (emptyKey.length) {
      emptyKey.map((v) => (newArr[v] = true));
      newArr.message = "빈 칸을 입력해주세요.";
    } else {
      // 깃허브 주소는 사이트 주소
      const githubRegex =
        /^https:\/\/github\.com\/[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)?$/;
      if (userFormData.grade * 1 > 5) {
        newArr.grade = true;
      }
      if (userFormData.studentNumber.length !== 8) {
        newArr.studentNumber = true;
      }
      if (
        userFormData.gitHub !== "" &&
        !githubRegex.test(userFormData.gitHub)
      ) {
        newArr.gitHub = true;
      }
      const errorKey = Object.entries(newArr).filter(
        ([key, value]) => value === true
      );

      if (errorKey.length)
        newArr.message = "입력한 값을 다시 한 번 확인해주세요.";
    }

    setHasError(newArr);
    return hasError.message ? true : false;
  };

  return {
    userFormData,
    handleUserFormData,
    hasError,
    checkHasInvaildValue,
    fetchUserData,
  };
};
