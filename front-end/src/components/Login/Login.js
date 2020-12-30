import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <h1>Click here to sign in</h1>
      <button onClick={() => dispatch(setUser('testUser'))}>Sign in</button>
      <button
        className="btn btn-primary btn-block"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </>
  );
};

export default LoginButton;
