import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user.js';

// eslint-disable-next-line func-style
const Login = () => {

  const dispatch = useDispatch();

  return (
    <>
    <h1>Click here to sign in</h1>
    <button onClick = {() => dispatch(setUser("testUser"))}>Sign in</button>
    </>
  );
}

export default Login;