import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import { Page } from './screens/Page';
import { googleTrackId } from './services/constants';

const initializeReactGA = () => {
  ReactGA.initialize(googleTrackId);
  ReactGA.pageview('/', ['gatza-tracker'], 'gatza');
};

initializeReactGA();

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
