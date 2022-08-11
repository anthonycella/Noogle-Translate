import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

function FullApplication() {
  return (
    <Auth0Provider
      domain="dev-0-9.us.auth0.com"
      clientId="4tOahnzzbHobZdEOYMdw66r1KvF9fQOc"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  );
}

export default FullApplication;
