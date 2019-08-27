import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { rootPath } from '../../../constants/paths';
import { BoardPage } from '../../board-page/root';

export const AppRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route component={BoardPage} exact path={rootPath} />
    </Switch>
  </BrowserRouter>
);
