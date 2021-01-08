import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../containers/addUserContainer.js';
import Button from '@material-ui/core/Button';


export const AddFriend = ({ profileId }) => {
  const user = useSelector(selectUser);
  const [areFriends, setAreFriends] = useState(false);

  const checkIfFriends = () => {
    console.log('user:', user);
    console.log({ profileId });
    var friendsList = user.friends;
    for (var i = 0; i < friendsList.length; i++) {
      if (friendsList[i]['_id'].indexOf(profileId) !== -1) {
        setAreFriends(true);
        break;
      } else {
        setAreFriends(false);
      }
    }
    console.log('are friends', areFriends);
  };

  useEffect(() => {
    if (user) {
      checkIfFriends();
    }
  });



  const handleAddFriend = async() => {
    var addFriendResponse = await addFriend(user['_id'], profileId);
    if (addFriendResponse.status === 200) {
      setAreFriends(true);
    } else {
      alert('Unable to add as friend. Please try again.');
    }
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