import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  left: 25px;
  top: 40%;
  cursor: pointer;
`;
export const FloatingMenuBar = () => {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      title: "스터디",
      isFocus: true,
      link: "/community/study",
    },
    {
      id: 1,
      title: "계정공유",
      isFocus: false,
      link: "/community/lecture",
    },
  ]);
  const navigate = useNavigate();
  const onClickMenuItem = (item) => {
    navigate(item.link);
  };
  return (
    <Container>
      <p>커뮤니티</p>
      {menuList.map((v) => (
        <div key={`${v.id}menu`} onClick={() => onClickMenuItem(v)}>
          {v.title}
        </div>
      ))}
    </Container>
  );
};
