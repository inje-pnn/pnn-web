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
  const navigate = useNavigate();

  if (user?.data?.authority === 2) {
    return (
      <Container>
        배너 입니다.<a href="/auth">이동하기</a>
      </Container>
    );
  }
};
