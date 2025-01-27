import styled from "styled-components";
import useUserStore from "../../store/useUserStroe";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #616161;
  width: 100%;
  height: 15%;
  color: white;
  padding: 10px;
  font-size: 18px;
`;

export const RegistBanner = () => {
  const user = useUserStore((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(Cookies.get("banner"));
    setIsVisible(Cookies.get("banner"));
  }, []);
  const onClcikTodayCloseButton = () => {
    setIsVisible(true);
    Cookies.set("banner", true);
  };
  if (user?.authority === 3) {
    return (
      !isVisible && (
        <Container>
          <div>
            현재 로그인은 되었으나 아직 회원이 되지 못하셨어요. 추가 정보를
            입력하고 동아리 팀장에게 권한을 받아 자유로운 동아리 활동을
            즐겨보세요.
          </div>
          <Button href="auth/regist">이동하기</Button>
          <Button onClick={onClcikTodayCloseButton}>오늘 하루 보지 않기</Button>
        </Container>
      )
    );
  }
};
