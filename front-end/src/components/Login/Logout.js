import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import {setUser} from '../../reducers/user';

const clientId = "235745187323-ant5oogmbuuqmtv9jkj7aeejqahu3hfa.apps.googleusercontent.com";

function Logout() {
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    dispatch(setUser(null));
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;