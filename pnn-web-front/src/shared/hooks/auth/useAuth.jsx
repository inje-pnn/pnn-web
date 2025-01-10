import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase";
import Cookies from "js-cookie";
import useUserStore from "../../store/useUserStroe";
// import userStore from "../../entities/user/model/userStore";

export const useAuth = () => {
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [user, setUser] = useState();

  const { updateUser } = useUserStore();
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    const res = await signInWithPopup(auth, provider); // popup을 이용한 signup
    const idToken = await res.user.getIdToken();
    console.log("auth Data ", res);
    console.log("result", idToken);
    Cookies.set("user", encodeURI(res.user.accessToken));
    setUser(res.user.email);
    updateUser(res.user.email);
    setIsLoggedUser(true);
  };

  const checkAutoLogin = () => {
    if (Cookies.get("user")) {
      setIsLoggedUser(true);
      updateUser(Cookies.get("user"));
      // updateUser()
      // setStoreUser(user);
      // need zustand update
      // 서버에서 accessToken을 통한 데이터 받아오기
    }
  };
  return { handleGoogleLogin, checkAutoLogin };
};
