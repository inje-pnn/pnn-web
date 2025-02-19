import axios from "axios";

export const communityApi = () => {
  const path =
    "https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/";
  const postStudyBoard = async (data) => {
    console.log(data);
    // const postData = {
    //   title: data.title,
    //   user_id: data.userId,
    //   type: data.type,
    //   content_link: data.content_link,
    // };
    // try {
    //   const res = await axios.post(`${path}.post/post_studyboard`, postData);
    //   if (res.status !== 200) {
    //     alert("오류가 발생하였습니다.");
    //   }
    // } catch (e) {}
  };

  const postAccountboard = async (data) => {
    const postData = {
      account_id: data.account,
      account_password: data.pw,
      sharer: data.sharer,
      username: data.name,
    };
    try {
      const res = await axios.post(`${path}.post/post_Accontboard`, postData);
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
      const res = await axios.get(path + "postget_accountboardlist");
      return res.data;
    } catch {}
  };
  return {
    postStudyBoard,
    postAccountboard,
    getStudyBoardList,
    getAccountBoardList,
  };
};
