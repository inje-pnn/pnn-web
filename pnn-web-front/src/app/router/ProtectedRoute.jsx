import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  const location = useLocation();

  if (user) {
    // 이미 로그인 상태라면 이전 페이지로 리다이렉트
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  // 로그인되지 않은 경우 페이지를 렌더링
  return children;
};

export default ProtectedRoute;
