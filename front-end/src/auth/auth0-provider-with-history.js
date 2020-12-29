import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-c0ooqztb.us.auth0.com';
  const clientId = '6zGW3bUaH1NYBMfoJ03V49PKsy3kiezU';

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    //history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;