import { useEffect, useState } from "react";
import { memberApi } from "../../api/memberApi";
import { filterMemberAuthority } from "../../util/memberUtil";

export const useAdmin = () => {
  const [isOwner, setIsOwner] = useState(true); // 관리자
  const [membership, setMembership] = useState(true);
  const [pendingUsersList, setPendingUsersList] = useState(); //가입대기 리시트
  const { getAllMembers } = memberApi();
  useEffect(() => {
    getAllMembers().then((res) => {
      const newValue = filterMemberAuthority(res, 3);
      setPendingUsersList(newValue);
    });
  }, []);

  const handlerSetIsOwner = () => {};
  const handlePendingUserList = (v) => {
    const newArr = pendingUsersList.filter((list) => list.id !== v.id);
    setPendingUsersList(newArr);
  };
  return {
    isOwner,
    pendingUsersList,
    handlerSetIsOwner,
    handlePendingUserList,
  };
};
