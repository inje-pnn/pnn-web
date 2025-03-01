import axios from "axios";

export const communityApi = () => {
  const path =
    "https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/";
  const postStudyBoard = async (data) => {
    const postData = {
      title: data.title,
      project_category: data.platform,
      content_link: data.boardLink,
      email: data.userEmail,
      project_type: data.projectType,
      description: data.subtitle,
      image: data.imageUrl,
    };
    try {
      const res = await axios.post(`${path}post/post_studyboard`, postData);
      if (res.status !== 200) {
        alert("오류가 발생하였습니다.");
      }
    } catch (e) {}
  };

  const postAccountboard = async (data) => {
    const postData = {
      title: data.title,
      account_id: data.accountId,
      account_password: data.accountPw,
      sharer: data.name,
      username: [],
      description: data.subtitle,
      image: data.imageUrl,
      content_link: data.link,
    };
    try {
      const res = await axios.post(`${path}post/post_Accountboard`, postData);
      if (res.status !== 200) {
        alert("오류가 발생하였습니다.");
      }
    } catch (e) {}
  };

  const getStudyBoardList = async () => {
    try {
      const res = await axios.get(path + "post/get_studyboardlist");
      return res.data;
    } catch {}
  };

  const getAccountBoardList = async () => {
    try {
      const res = await axios.get(path + "post/get_accountboardlist");
      return res.data;
    } catch {}
  };

  const updateLectureBoard = async (data) => {
    const putData = {
      serial_number: data.boardId,
      username: data.user,
    };
    try {
      const res = await axios.put(path + "post/update_accountboard", putData);
      return res.data;
    } catch {}
  };
  return {
    postStudyBoard,
    postAccountboard,
    getStudyBoardList,
    getAccountBoardList,
    updateLectureBoard,
  };
};
