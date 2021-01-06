import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../containers/addUserContainer.js';
import Button from '@material-ui/core/Button';


export const AddFriend = () => {
  const user = useSelector(selectUser);
  console.log('user: ', user);

  const areFriends = () => {

  };

  return (
    <div>
      <Button
      >
        Add Friend
      </Button>
    </div>
  );
};