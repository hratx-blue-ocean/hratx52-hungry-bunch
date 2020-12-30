import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import Logout from './components/Login/Logout.js';
import Profile from './components/Login/Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from '@auth0/auth0-react';

import { Link, Route, Switch } from 'react-router-dom';


// eslint-disable-next-line func-style
const App = () => {

  // debugger;
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
      { /* Route components are rendered if the path prop matches the current URL */}
      {!isAuthenticated ?
        <Route path="/"><Login/></Route>
        :
        <>
          <Logout/>
          <Route exact path="/"><MainPage/></Route>
          {/* Profile component contains the information that we get from a user (different info for sign in and continue with google) */}
          <Profile/>
        </>
      }
    </>
  );
};

export default hot(App);