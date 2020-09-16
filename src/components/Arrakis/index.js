import React, { createContext } from 'react';
import worms from '../../models/worms';
import { WormList } from '../WormList/index';
import { Navbar } from '../navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Welcom } from '../welcom';
import { Worm } from '../Worm/index';
import { Picture } from '../picture';
import { Parrot } from '../parrot/parrot';
import style from '../navbar.module.css';

export const WormsContext = createContext();

export const Arrakis = () => {
  return (
    <div className={style.center}>
    <WormsContext.Provider value={worms}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/worms/:name">
            <Worm />
          </Route>
          <Route exact path="/worms">
            <WormList />
          </Route>
          <Route exact path="/picture">
            <Picture />
          </Route>
          <Route exact path="/parrot">
            <Parrot />
          </Route>
          <Route exact path="/">
            <Welcom />
          </Route>
        </Switch>
      </Router>
    </WormsContext.Provider>
    </div>
  );
};
