import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { WithToasts, theme } from '@binarycapsule/ui-capsules';
import { Routes } from './router/routes';
import { history } from './router/history';

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <WithToasts>
        <Router history={history}>
          <Routes />
        </Router>
      </WithToasts>
    </ThemeProvider>
  );
};
