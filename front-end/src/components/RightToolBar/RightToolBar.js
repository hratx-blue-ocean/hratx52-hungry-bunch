import React, { useState, useEffect } from 'react';
import { Grid, Container, Paper, InputBase, IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import { Users } from '../../data/recipeDummyData.js';
import IndividualFriend from './IndividualFriend.js';
import FriendsList from './FriendsList.js';
import { useDispatch, useSelector } from 'react-redux';
import { searchForFriends } from '../../utils/apiCalls.js';

const RightToolBar = ({ friends }) => {

  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const state = useSelector(state => state);

  const handleFriendsSearch = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === '') {
      setSearchResults([]);
    }
  };

  const searchBarClickHandler = async (e) => {
    e.preventDefault();

    const fetchedUsers = await searchForFriends(userInput);

    if (fetchedUsers.status === 200) {
      setSearchResults(fetchedUsers.data);
    } else {
      setSearchResults([state.userReducer.user]);
    }

  };

  const checkForUserPageFriends = () => {
    if (friends) {
      return friends;
    } else {
      return state.userReducer.user.friends;
    }
  };

  useEffect(()=> {
    searchBarClickHandler;
  }, [searchResults, userInput]);

  if (state.userReducer.user) {
    return (
      <>
        <Grid container spacing={4}>
          <Grid item>
            <Paper component='form' onSubmit={searchBarClickHandler}>
              <InputBase
                onChange={handleFriendsSearch}
                value={userInput}
                placeholder='     search for friends'
              />
              <IconButton onClick={searchBarClickHandler} >
                <SearchIcon/>
              </IconButton>
            </Paper>
          </Grid>
          <FriendsList
            userFriends={friends}
            friends={searchResults.length ? searchResults : checkForUserPageFriends()}
            searchInput={userInput}/>
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