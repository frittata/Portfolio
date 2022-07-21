import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Show from './pages/Show';
import Identify from './pages/Identify';
import Connect from './pages/Connect';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/identify">
            <Identify />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/show">
            <Show />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
