import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import MainPage from './components/MainPage/MainPage.js';

import { Link, Route, Switch } from 'react-router-dom';


// eslint-disable-next-line func-style
const App = () => {

  const user = useSelector(selectUser);

  return (
    <>
      {/**!user ?
    <Login></Login> :
    <MainPage></MainPage>
    **/}

      { /* Route components are rendered if the path prop matches the current URL */}

      <Route path="/login"><Login/></Route>
      <Route exact path="/"><MainPage/></Route>
    </>
  );
};

export default App;