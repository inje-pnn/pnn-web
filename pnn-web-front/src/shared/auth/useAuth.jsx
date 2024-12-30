import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import Cookies from "js-cookie";
import userStore from "../../entities/user/model/userStore";

export const useAuth = () => {
  const [isLoggedUser, setIsLoggedUser] = useState(false);
  const [user, setUser] = useState();

  const { setStoreUser } = userStore();
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((res) => {
        Cookies.set("user", encodeURI(res.user.accessToken));
        setUser((state) => state.setUser(res.user.email));
        setIsLoggedUser(true);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  const checkAutoLogin = () => {
    if (Cookies.get("user")) {
      setIsLoggedUser(true);
      setStoreUser(user);
      // need zustand update
      // 서버에서 accessToken을 통한 데이터 받아오기
    }
  };
  return { handleGoogleLogin, checkAutoLogin };
};
