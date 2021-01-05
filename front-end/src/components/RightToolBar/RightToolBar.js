import React, { useState } from 'react';
import { Grid, Container, Paper, InputBase, IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import { Users } from '../../data/recipeDummyData.js';
import IndividualFriend from './IndividualFriend.js';
import FriendsList from './FriendsList.js';

const RightToolBar = () => {

  const [userInput, setUserInput] = useState('');
  const [users, setUser] = useState(Users.fetchedUsers);
  const [friends, setFriends] = useState(Users.fetchedUsers[0].friends);

  const handleFriendsSearch = (e) => {
    setUserInput(e.target.value);
  };


  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <GroupIcon fontSize='large'/>
        </Grid>
        <Grid item>
          <Paper component='form'>
            <InputBase
              onChange={handleFriendsSearch}
              value={userInput}
              placeholder='search for friends'
            />
            <IconButton onClick={()=>alert('yo')}>
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Grid>
        <FriendsList friendsList={friends}/>
      </Grid>
    </>
  );
};

export default RightToolBar;