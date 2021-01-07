import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import UserDbCalls from './UserDbCall.js';
//wireframe: https://www.figma.com/file/C9TLcX8c0DNBW3xsYlv6kO/Untitled?node-id=60%3A2


const User = () => {

  //React router to grab pathname
  const location = useLocation();
  const history = useHistory();

  /*can either use: location.pathname OR history.location.pathname*/
  let userId = location.pathname.split('/')[2];

  return (
    <>
      <UserDbCalls location={location.pathname.split('/')[2]}/>
    </>
  );
};

export default User;