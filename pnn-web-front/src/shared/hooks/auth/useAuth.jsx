import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import Cookies from "js-cookie";
import useUserStore from "../../store/useUserStroe";
import { memberApi } from "../../api/memberApi";
import { useNavigate } from "react-router-dom";
// import userStore from "../../entities/user/model/userStore";

export const useAuth = () => {
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [user, setUser] = useState();

  const { updateUser } = useUserStore();
  const { getAllMembers, postAuthLoginUser } = memberApi();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    const res = await signInWithPopup(auth, provider); // popup을 이용한 signup

    Cookies.set("user", encodeURI(res.user.email));

    const userInfo = postAuthLoginUser(res.user.email);

    updateUser(userInfo);
    setUser(userInfo);
    setIsLoggedUser(true);
    navigate("/");
  };

  const checkAutoLogin = () => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userInfo = postAuthLoginUser(userCookie);
      updateUser(userCookie);
      setUser(userInfo);
      setIsLoggedUser(true);
    }
  };
  return { handleGoogleLogin, checkAutoLogin };
};
