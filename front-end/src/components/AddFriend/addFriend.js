import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../containers/addUserContainer.js';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { addFriend, getUserData } from '../../utils/apiCalls.js';
import { receiveLogin } from '../../actions/action';


export const AddFriend = () => {
  const user = useSelector(selectUser);
  const [areFriends, setAreFriends] = useState(false);
  const [usersProfile, setUsersProfile] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  let friendId = location.pathname.split('/')[2];

  const checkIfFriends = () => {
    var friendsList = user.friends;
    //check if this is user's own profile
    if (user['_id'] === friendId) {
      setUsersProfile(true);
    } else {
      for (var i = 0; i < friendsList.length; i++) {
        if (friendsList[i]['_id'].indexOf(friendId) !== -1) {
          setAreFriends(true);
          break;
        } else {
          setAreFriends(false);
        }
      }
      setUsersProfile(false);
    }
  };

  useEffect(() => {
    if (user) {
      checkIfFriends();
    }
  });

  const handleAddFriend = async() => {
    var addFriendResponse = await addFriend(user['_id'], friendId);
    if (addFriendResponse.status === 200) {
      setAreFriends(true);
      var updatedUser = await getUserData(user['_id']);
      dispatch(receiveLogin(updatedUser.data));
      checkIfFriends();
    } else {
      alert('Unable to add as friend. Please try again.');
    }
  };

  if (areFriends) {
    return (
      <div>
        You are Friends
      </div>
    );
  } else if (usersProfile) {
    return (
      <div>Your Profile</div>
    );
  } else {
    return (
      <div>
        <Button
          onClick={handleAddFriend}
        >
          Add Friend
        </Button>
      </div>
    );
  }
};