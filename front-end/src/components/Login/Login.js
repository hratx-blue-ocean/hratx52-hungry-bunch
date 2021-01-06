import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//stupid pomander
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const getTime = () => {
    var d = new Date();
    var n = d.getHours();
    document.getElementById('app').innerHTML = n;
    console.log(n);
  };

  return (
    <button
      className="login-button"
      onClick={() => loginWithRedirect()}
    >
     join us for
    </button>
  );
};

export default LoginButton;