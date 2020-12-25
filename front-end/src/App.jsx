import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import Logout from './components/Login/Logout.js';
import MainPage from './components/MainPage/MainPage.js';
// import { Router, Link } from "@reach/router";


// eslint-disable-next-line func-style
const App = () => {

  const user = useSelector(selectUser);

  debugger;
  return (
    <>
    {!user ?
      <Login />
      :
      <>
        <Logout />
        <MainPage />
      </>
    }
    </>
  );
}

export default App;