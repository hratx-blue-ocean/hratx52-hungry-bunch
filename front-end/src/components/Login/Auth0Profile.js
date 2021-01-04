import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// Profile component contains the information that we get from a user when he/she signs in (slightly different info for sign in and continue with google)

const Auth0Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;



  return (
    <div>
      <div>
        <div>
          <img
            src={picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Auth0Profile;