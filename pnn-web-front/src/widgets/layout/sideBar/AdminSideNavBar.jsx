import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  width: 170px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 80%;
  height: 95px;
  margin-bottom: 15px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-left: 20px;
  width: 100%;
`;
const LinkText = styled.p`
  margin-top: 10px;
`;

export const AdminSideNavBar = () => {
  const linkText = [
    { title: "메인", path: "/admin" },
    { title: "멤버관리", path: "/admin/member" },
    { title: "가입신청", path: "/admin/membership" },
    { title: "게시글 관리", path: "/admin/board" },
    { title: "계정정보", path: "/admin/account" },
  ];
  const navigate = useNavigate();
  const onClickLinkButton = (path) => {
    navigate(path);
  };
  const ListButton = ({ title, path }) => {
    return (
      <ListItemButton onClick={() => onClickLinkButton(path)}>
        <ListItemText primary={title} />
      </ListItemButton>
    );
  };
  return (
    <NavBar>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Logo src="/favicon_logo.png" />
          </ListSubheader>
        }
      >
        {linkText.map((v) => (
          <ListButton title={v.title} path={v.path} />
        ))}
      </List>
    </NavBar>
  );
};
