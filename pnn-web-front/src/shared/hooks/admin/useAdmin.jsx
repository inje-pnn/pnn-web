import { useState } from "react";

export const useAdmin = () => {
  const [isOwner, setIsOwner] = useState(true);
  const [membership, setMembership] = useState(true);
  const [pendingUsersList, setPendingUsersList] = useState();
  const handlerSetIsOwner = () => {};
  return {
    isOwner,
    handlerSetIsOwner,
  };
};
