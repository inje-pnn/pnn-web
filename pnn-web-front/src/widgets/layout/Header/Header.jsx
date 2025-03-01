// Header.jsx
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../assets/images/pnnlogo.png";
import { Link } from "react-router-dom";
import DropPofileList from "./components/DropPofileList";
import ModalMenu from "./ModalMenu/ModalMenu";

export default function Header() {
  const [menuBarState, setMenuBarState] = useState(false);

  const onClickMenuButton = () => {
    setMenuBarState(!menuBarState);
  };

  return (
    <Box
      sx={{
        width: "101%",
        height: { xs: "7dvh", sm: "5vh" },
        position: "fixed",
        top: "0",
        zIndex: "9999",
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: "100%",
          backgroundColor: "rgba(211, 211, 211, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            minHeight: "100% !important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* 로고 (항상 왼쪽) */}
          <Typography variant="h6" component="div">
            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: "70px",
                  width: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  objectFit: "contain",
                }}
                src={Logo}
                alt="P&N Logo"
              />
            </Link>
          </Typography>

          {/* 중앙 메뉴 아이템들 (데스크톱에서만 표시) */}
          <Box
            sx={{
              width: "60%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-around",
              gap: "10rem",
            }}
          >
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button color="inherit">About Us</Button>
            </Link>
            <Link
              to="/share"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button color="inherit">프로젝트</Button>
            </Link>
            <Link
              to="/community"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button color="inherit">커뮤니티</Button>
            </Link>
            <Link
              to="/recruiting"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button color="inherit">지원하기</Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <DropPofileList />
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={onClickMenuButton}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {menuBarState && <ModalMenu onClose={() => setMenuBarState(false)} />}
    </Box>
  );
}
