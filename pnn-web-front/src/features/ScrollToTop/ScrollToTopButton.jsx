import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 80px;
  right: 60px;
  color: black;
  border: solid 1px lightgray;
  border-radius: 28px;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
`;

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={scrollToTop}>
      ↑
    </Button>
  );
};