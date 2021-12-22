import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { UseEffectExample } from './pages/UseEffectExample'
import { Reports } from './pages/Reports'

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

const StyledMenuPage = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <StyledMenuPage>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/" exact component={UseEffectExample} />
            <Route path="/reports" component={Reports} />
            <Route path="/useeffect-example" component={UseEffectExample} />
          </StyledMenuPage>
        </Switch>
      </Router>
    </>
  );
};
