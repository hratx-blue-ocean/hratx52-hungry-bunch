import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import UserDbCalls from './UserDbCall.js';

const User = () => {
  const location = useLocation();
  let userId = location.pathname.split('/')[2];

  return (
    <UserDbCalls location={location.pathname.split('/')[2]}/>
  );
};

export default User;