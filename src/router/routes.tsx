import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { SteriMachineView } from '../machines/steri/SteriMachine.view';

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/steri/:mode">
        <SteriMachineView />
      </Route>
      <Route path="/">
        <div>
          <Link to="/steri/automatic">Go to steri</Link>
        </div>
      </Route>
    </Switch>
  );
};
