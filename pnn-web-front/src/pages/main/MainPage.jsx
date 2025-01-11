import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const RoutingButton = ({ title, route }) => {
    const onClickNavigation = () => {
      navigate(`/${route}`);
    };
    return (
      <p
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
        <button
          onClick={onClickNavigation}
          style={{ width: 100, height: 25, marginLeft: 15 }}
        >
          이동
        </button>
      </p>
    );
  };
  return (
    <div>
      <h1>메인페이지입니다.</h1>
      <p>개발 과정에서 잠시 사용될 라우팅 버튼입니다.</p>
      <p>메인작업 시작시 삭제해도 됩니다.</p>
      <RoutingButton title={"관리자"} route={"admin"} />
      <RoutingButton title={"로그인"} route={"auth"} />
      <RoutingButton title={"프로젝트 공유"} route={"share"} />
    </div>
  );
};
