import React, { useState } from 'react';
import { Grid, Container, Paper, InputBase, IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import { Users } from '../../data/recipeDummyData.js';
import IndividualFriend from './IndividualFriend.js';
import FriendsList from './FriendsList.js';
import { useDispatch, useSelector } from 'react-redux';

const RightToolBar = () => {

  const [userInput, setUserInput] = useState('');
  const state = useSelector(state => state);

  const handleFriendsSearch = (e) => {
    setUserInput(e.target.value);
  };

  if (state.userReducer.user) {
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
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </Paper>
          </Grid>
          <FriendsList friends={state.userReducer.user.friends} searchInput={userInput}/>
        </Grid>
      </>
    );
  } else {
    return (
      <></>
    );
  }
};

export default RightToolBar;