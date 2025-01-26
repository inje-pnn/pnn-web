import axios from "axios";
import { data } from "react-router-dom";

export const memberApi = () => {
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

  const getAllMembers = async () => {
    try {
      const res = await axios.get(path + "user/members");
      return res.data;
    } catch {}
  };

  const putApprovemUser = async (userId, value) => {
    try {
      const res = await axios.put(path + `user/approve/${userId}`, value);
      return res;
    } catch {}
  };

  const putUserUpdate = async (userId, data) => {
    try {
      const res = await axios.put(path + `user/update/${999}`, data);
      return res.status;
    } catch {}
  };
  return {
    postAuthLoginUser,
    putApprovemUser,
    getAllMembers,
    putUserUpdate,
  };
};
