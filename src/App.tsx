import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Toolbar } from './components/Toolbar';

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Navigation = styled.div`
  width: 80px;
  text-align: center;
`;

const MainContent = styled.div`
  flex: 1;
  text-align: center;
`;

const SubContent = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  background-color: lightpink;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navigation>
          <Toolbar />
        </Navigation>
        <SubContent width={'0px'}></SubContent>
        <MainContent>Main</MainContent>
      </Wrapper>
    </>
  );
};
