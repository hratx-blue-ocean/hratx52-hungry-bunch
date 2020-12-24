import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './reducers/user.js';
import Login from './components/Login/Login.js';
import MainPage from './components/MainPage/MainPage.js';


// eslint-disable-next-line func-style
const App = () => {

  const user = useSelector(selectUser);

  return (
    <>
      {!user ?
        <Login></Login> :
        <MainPage></MainPage>
      }
    </>
  );
};

export default hot(App);