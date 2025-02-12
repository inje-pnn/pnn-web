import React from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/system';

const ScrollToTopFab = styled(Fab)({
  position: 'fixed',
  bottom: '80px',
  right: '60px',
  width: '60px',
  height: '60px',
  backgroundColor: '#667eea',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#556cd6',
  },
  '@media (max-width: 768px)': {
    width: '50px',
    height: '50px',
    bottom: '60px',
    right: '20px',
  },
});

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTopFab onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </ScrollToTopFab>
  );
};