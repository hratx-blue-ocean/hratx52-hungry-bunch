import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import LoginLandingPage from './components/Login/LoginLandingPage.js';
import Logout from './components/Login/Logout.js';
import Loading from './components/Login/Loading.js';
import Auth0Profile from './components/Login/Auth0Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Switch } from 'react-router-dom';
import styles from './styles.css';
import RecipePage from './components/RecipePage/RecipePage.jsx';
import UserCookbook from './components/UserCookbook/UserCookbook.js';

const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      { /* Route components are rendered if the path prop matches the current URL */}
      {!isAuthenticated ?
        <Route path="/"><LoginLandingPage/></Route>
        :
        <>
          <Route exact path="/"><MainPage/></Route>
          {/* Profile component contains the information that we get from a user (different info for sign in and continue with google) */}
          <Route exact path="/recipe">
            <RecipePage />
          </Route>
          <Route exact path="/user">
            <UserCookbook />
          </Route>
          <Auth0Profile />
        </>
      }
    </Switch>

  );
};

export default hot(App);