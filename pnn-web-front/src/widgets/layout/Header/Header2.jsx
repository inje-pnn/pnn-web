import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/images/pnnlogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuBarState, setMenuBarState] = useState(false);

  const onClickMenuButton = (menuBarState, setMenuBarState) => {
    setMenuBarState(!menuBarState);
  };

  return (
    <Box sx={{ 
        width: '101%',
        height: '5vh',
        position: 'fixed',
        top: '0',
        zIndex: '2',
    }}>
      <AppBar position="static" sx={{ height: '100%' }}>
        <Toolbar sx={{ 
          height: '100%',
          minHeight: '100% !important',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Typography variant="h6" component="div">
          <Box
            component="img"
            sx={{
              height: '70px',  
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              objectFit: 'contain',
            }}
            src={Logo}
            alt="P&N Logo"
          />
          </Typography>
          
          {/* 중앙 메뉴 아이템들 */}
          <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '10rem'}}>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">About Us</Button>
            </Link>
            <Link to="/share" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">프로젝트</Button>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">팀원소개</Button>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Contact</Button>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">지원하기</Button>
            </Link>
          </Box>

          {/* 우측 로그인/가입 버튼 */}
          <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Link to="/auth" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">로그인</Button>
            </Link>
            <Link to="/auth/regist" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" variant="outlined" sx={{ borderColor: 'white' }}>
                가입하기
              </Button>
            </Link>
            {/* <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}