import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import Profile from './components/Login/Profile.js';
import MainPage from './components/MainPage/MainPage.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Route, Switch } from 'react-router-dom';
import RecipePage from './components/RecipePage/RecipePage.jsx';
import User from './components/User/User.js';
import { connect } from 'react-redux';
import { receiveLogin } from './actions/action';
import axios from 'axios';

const App = (props) => {

  const dispatch = useDispatch();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    console.log('user IS AUTHENTICATED');
    axios.post('http://localhost:3000/checkUser', user)
      .then(results => {
        dispatch(receiveLogin(results.data));
      })
      .catch(err => console.log('an error occured attempting to hit the checkUser endpoint...', err));
  } else {
    console.log('user still not authenticated');
  }

  return (
    <Switch>
      { /* Route components are rendered if the path prop matches the current URL */}
      {!isAuthenticated ?
        <Route path="/"><Login/></Route>
        :
        <>
          <Route exact path="/"><MainPage/></Route>
          {/* Profile component contains the information that we get from a user (different info for sign in and continue with google) */}
          <Route path="/recipe">
            <RecipePage />
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Profile/>
        </>
      }
    </Switch>

  );
};

export default hot(connect()(App));