import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../containers/addUserContainer.js';
import Button from '@material-ui/core/Button';


export const AddFriend = () => {
  const user = useSelector(selectUser);
  console.log('user: ', user);
  var areFriends = false;

  const checkIfFriends = () => {
    if (user['_id'].indexOf()) {
      areFriends = true;
    } else {
      areFriends = false;
    }
  };

  const handleAddFriend = () => {

  };

  return (
    <div>
      <Button
        onClick={handleAddFriend}
      >
        Add Friend
      </Button>
    </div>
  );
};