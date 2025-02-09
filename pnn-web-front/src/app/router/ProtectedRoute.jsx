import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// type admin member guest
const ProtectedRoute = ({ children, user, type }) => {
  const location = useLocation();
  console.log("log", user);
  if (user?.length && type === "sign") {
    // 이미 로그인 상태라면 이전 페이지로 리다이렉트
    return <Navigate to={location.state?.from || "/"} replace />;
  }
  if (user?.authority !== 0 && type === "admin") {
    // 관리자 권한 없는 경우 리턴
    alert("관리자 권한이 없습니다.");
    return <Navigate to={location.state?.from || "/"} replace />;
  }
  if (!(user?.authority === 0 || user?.authority === 1) && type === "member") {
    // 멤버 권한이 없는 경우 리턴
    alert("접근 권한이 없습니다.");
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
