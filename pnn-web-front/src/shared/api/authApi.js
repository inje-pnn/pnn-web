import axios from "axios";
import { data } from "react-router-dom";

export const authApi = () => {
  const path =
    "https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/";
  const postAuthLoginUser = async (data) => {
    const postData = {
      email: data,
    };
    try {
      const res = await axios.post(path + "user/login", postData);
      return res.data;
    } catch {}
  };
  const postSignupUser = () => {};

  const getAllMembers = async () => {
    const res = await axios.get(path + "user/members");
    console.log("getAllMembers", res);
  };
  return {
    postAuthLoginUser,
    postSignupUser,
    getAllMembers,
  };
};
