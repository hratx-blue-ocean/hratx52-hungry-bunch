import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import Logout from './components/Login/Logout.js';
import Profile from './components/Login/Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from "@auth0/auth0-react";


// eslint-disable-next-line func-style
const App = () => {

  debugger;
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
      {!isAuthenticated ?
          <Login/>
        :
        <>
          <Logout/>
          <MainPage />
          {/* Profile component contains the information that we get from a user */}
          {/* <Profile/> */}
        </>
      }
    </>
  );
}

export default App;