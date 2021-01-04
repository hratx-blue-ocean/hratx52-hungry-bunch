import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import LoginLandingPage from './components/Login/LoginLandingPage.js';
import Logout from './components/Login/Logout.js';
import Auth0Profile from './components/Login/Auth0Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Switch } from 'react-router-dom';
import styles from './styles.css';

const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      { /* Route components are rendered if the path prop matches the current URL */}
      {!isAuthenticated ?
        <Route path="/"><LoginLandingPage/></Route>
        :
        <>
          <Logout/>
          <Route path="/"><MainPage/></Route>
          <Auth0Profile />
        </>
      }
    </>
  );
};

export default hot(App);