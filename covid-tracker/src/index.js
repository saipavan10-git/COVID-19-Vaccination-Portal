import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   redirecturi={window.location.origin}>
  //   <App />
  // </Auth0Provider>,
  <App />,
  document.getElementById('root')
);
