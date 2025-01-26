import styled from "styled-components";
import useUserStore from "../../store/useUserStroe";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: black;
  width: 100%;
  height: 10%;
  color: white;
`;

export const RegistBanner = () => {
  const user = useUserStore((state) => state.user);
  console.log(user?.authority);

  if (user?.authority === 3) {
    return (
      <Container>
        <div></div>
        <div>
          동아리 페이지 거시기 없다 배너 입니다.<a href="/auth">이동하기</a>
          지원하기 오늘 하루 보지 않기
        </div>
      </Container>
    );
  }
};
