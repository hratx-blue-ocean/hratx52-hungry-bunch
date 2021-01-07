import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import IndividualFriend from './IndividualFriend.js';

const FriendsList = ({ friends, searchInput }) => {

  const userFriendSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredArr = friends.filter((singleFriend) => singleFriend.name.includes(searchTerm));
      return filteredArr;
    } else {
      return friends;
    }
  };

  return (
    <Container>
      <Grid container direction='column' item spacing={3} xs={12}>
        {userFriendSearch(searchInput).map((friend)=>{
          return (
            <IndividualFriend key={friend._id} friend={friend}/>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FriendsList;