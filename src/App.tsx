import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { Reports } from './pages/Reports';
import { Products } from './pages/Products';

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
  font-size: 3rem;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <StyledMenuPage>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Reports} />
            <Route path="/products" component={Products} />
          </StyledMenuPage>
        </Switch>
      </Router>
    </>
  );
};
