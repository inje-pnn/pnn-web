import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  top: 60%;
  background-color: red;
`;
export const FloatingMenuBar = () => {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      title: "스터디",
      isFocus: true,
    },
    {
      id: 1,
      title: "계정공유",
      isFocus: false,
    },
  ]);

  return (
    <Container>
      {menuList.map((v) => (
        <div>{v.title}</div>
      ))}
    </Container>
  );
};
