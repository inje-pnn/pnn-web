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
        height: { xs: "7dvh", sm: "6vh" },
        position: "fixed",
        top: "0",
        zIndex: "9999",
      }}
    >
      <AppBar 
        position="static" 
        sx={{ 
          height: "100%", 
          backgroundColor: 'rgba(211, 211, 211, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',

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
                  height: "80px", // 로고 크기 증가
                  width: "120px", // 로고 크기 증가
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
              justifyContent: "flex-end", // 메뉴 아이템들을 우측으로 정렬
              gap: "3rem", // 버튼 간 간격 조정
            }}
          >
            <Link to="/aboutus" style={{ textDecoration: "none", color: "black" }}>
              <Button color="inherit" sx={{ fontSize: "16px", fontWeight: "600" }}>소개</Button> {/* 폰트 크기 및 굵기 증가 */}
            </Link>
            <Link to="/share" style={{ textDecoration: "none", color: "black" }}>
              <Button color="inherit" sx={{ fontSize: "16px", fontWeight: "600" }}>프로젝트</Button> {/* 폰트 크기 및 굵기 증가 */}
            </Link>
            <Link to="/community" style={{ textDecoration: "none", color: "black" }}>
              <Button color="inherit" sx={{ fontSize: "16px", fontWeight: "600" }}>커뮤니티</Button> {/* 폰트 크기 및 굵기 증가 */}
            </Link>
            <Link to="/recruiting" style={{ textDecoration: "none", color: "black" }}>
              <Button color="inherit" sx={{ fontSize: "16px", fontWeight: "600" }}>지원하기</Button> {/* 폰트 크기 및 굵기 증가 */}
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
