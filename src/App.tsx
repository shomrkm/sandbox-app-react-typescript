import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { useEffectExample } from './pages/UseEffectExample';
import { useFetchExample } from './pages/useFetchExample';

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    height: 100vh;
  }
`;

const StyledMenuPage = styled.div`
  display: flex;
  // height: 90vh;
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
            <Route path="/" exact component={useFetchExample} />
            <Route path="/usefetch-example" component={useFetchExample} />
            <Route path="/useeffect-example" component={useEffectExample} />
          </StyledMenuPage>
        </Switch>
      </Router>
    </>
  );
};
