import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { SteriMachine } from '../machines/steri/SteriMachine';

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/steri/:mode">
        <SteriMachine />
      </Route>
      <Route path="/">
        <div>
          <Link to="/steri/automatic">Go to steri</Link>
        </div>
      </Route>
    </Switch>
  );
};
