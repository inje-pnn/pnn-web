import styled from "styled-components";
import inje from "../assets/images/inje.png";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Introduce from "../features/about/component/Introuduce";
import TechStack from "../features/about/component/TechStack";
import History from "../features/about/component/History";
import Member from "../features/about/component/Member";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #111111;
  color: white;
  
  @media (max-width: 768px) {
    min-height: 100vh;
  }

  @media (min-width: 768px) {
    min-height: 95vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const ImgFrame = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  
  img {
    width: 100%;
    height: 200px;
    
    @media (min-width: 768px) {
      height: 300px;
    }
    
    position: relative;
    object-fit: cover;
    object-position: bottom;
  }
  
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
    font-size: 24px;
    
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  h4 {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
    font-size: 16px;
    text-align: center;
    width: 90%;
    
    @media (min-width: 768px) {
      font-size: 18px;
      width: auto;
    }
  }
`;

function CenteredTabs({ value, handleChange }) {
  return (
    <Box sx={{
      width: '100%',
      minHeight: { xs: '80px', md: '100px' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111111',
      borderBottom: '1px solid gray',
    }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: { backgroundColor: "#667EEA"}
        }}
        sx={{
          '& .MuiTab-root': {
            color: 'white',
            fontSize: { xs: '16px', md: '20px' },
            padding: { xs: '12px 16px', md: '12px 24px' },
            minWidth: { xs: '25%', md: 'auto' },
            flex: { xs: '1', md: 'none' },
            '&.Mui-selected': {
              color: '#667EEA'
            }
          },
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Tab label="인사말" />
        <Tab label="기술스택" />
        <Tab label="활동" />
        <Tab label="팀원소개" />
      </Tabs>
    </Box>
  );
 }
 
 const AboutUs = () => {
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const renderContent = () => {
    switch (value) {
      case 0:
        return <Introduce />;
      case 1:
        return <TechStack />;
      case 2:
        return <History />;
      case 3:
        return <Member />;
      default:
        return <Introduce />;
    }
  };
 
  return (
    <Container>
      <ImgFrame>
        <img src={inje} alt="인제대학교" />
        <h1>소개</h1>
        <h4>P&N에 대하여 소개합니다</h4>
      </ImgFrame>
      <CenteredTabs value={value} handleChange={handleChange} />
      {renderContent()}
    </Container>
  );
 };

export default AboutUs;