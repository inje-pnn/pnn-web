import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import Cookies from "js-cookie";
import useUserStore from "../../store/useUserStroe";
import { memberApi } from "../../api/memberApi";
import { useNavigate } from "react-router-dom";
// import userStore from "../../entities/user/model/userStore";

export const useAuth = () => {
  //   0 오너 관리자

  // 1 일반 멤버 게시글 작성, 강의 공유 페이지 접근 가능

  // 2 로그인만 한 녀석들

  // 3 가입 신청한 녀석들
  const { updateUser, clearUser } = useUserStore();
  const { getAllMembers, postAuthLoginUser } = memberApi();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    const res = await signInWithPopup(auth, provider); // popup을 이용한 signup
    const userInfo = await postAuthLoginUser(res.user.email);
    Cookies.set("user", encodeURI(res.user.email));
    updateUser(userInfo);
    navigate("/");
  };

  const checkAutoLogin = async () => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userInfo = await postAuthLoginUser(userCookie);
      updateUser(userInfo);
    }
  };

  const userLogout = () => {
    Cookies.remove("user");

    clearUser();
  };
  return { handleGoogleLogin, checkAutoLogin, userLogout };
};
