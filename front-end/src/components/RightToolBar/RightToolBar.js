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
  const [friends, setFriends] = useState(Users.fetchedUsers[0].friends)

  return (
    <Container>
      <Grid container >
        <Grid item sm={5}>
          <GroupIcon fontSize='large'/>
        </Grid>
        <Grid item>
          <Paper component='form'>
            <InputBase
              placeholder='search for friends'
            />
            <IconButton onClick={()=>alert('yo')}>
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Grid>
        <FriendsList friendsList={friends}/>
      </Grid>
    </Container>
  );
};

export default RightToolBar;