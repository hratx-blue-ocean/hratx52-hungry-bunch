import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, postUser} from './reducers/user.js';
import Login from './components/Login/Login.js';
import Profile from './components/Login/Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Switch } from 'react-router-dom';
import RecipePage from './components/RecipePage/RecipePage.jsx';
import User from './components/User/User.js';

const regeneratorRuntime = require('regenerator-runtime');

const App = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const newUser = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(newUser);
    isAuthenticated && user ? dispatch(postUser(user))
      :
      console.log('user has not logged in yet:', user);
  }, user);

  const isAuthenticatedWithMongoDB = () => {
    return isAuthenticated && newUser._id !== null;
  };


  return (
    <Switch>
      { /* Route components are rendered if the path prop matches the current URL */}
      {!isAuthenticatedWithMongoDB() ?
        <Route path="/"><Login/></Route>
        :
        <>
          <Route exact path="/"><MainPage/></Route>
          {/* Profile component contains the information that we get from a user (different info for sign in and continue with google) */}
          <Route exact path="/recipe">
            <RecipePage />
          </Route>
          <Route exact path="/user">
            <User/>
          </Route>
          <div>{newUser.username}</div>
          <Profile/>
        </>
      }
    </Switch>

  );
};

export default hot(App);