import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/images/pnnlogo.png';

export default function Header() {
  const [menuBarState, setMenuBarState] = useState(false);

  const onClickMenuButton = (menuBarState, setMenuBarState) => {
    setMenuBarState(!menuBarState);
  };

  return (
    <Box sx={{ 
        width: '100%',
        height: '7vh',
        position: 'fixed',
        top: '0',
        zIndex: '1',
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
              height: '100px',  
              width: '100px',
              objectFit: 'contain'
            }}
            src={Logo}
            alt="P&N Logo"
          />
          </Typography>
          
          {/* 중앙 메뉴 아이템들 */}
          <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12rem'}}>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">프로젝트</Button>
            <Button color="inherit">팀원소개</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">지원하기</Button>
          </Box>

          {/* 우측 로그인/가입 버튼 */}
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button color="inherit">로그인</Button>
            <Button color="inherit" variant="outlined" sx={{ borderColor: 'white' }}>
              가입하기
            </Button>
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