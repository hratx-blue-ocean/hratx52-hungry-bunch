import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import IndividualFriend from './IndividualFriend.js';

const FriendsList = ({ friendsList, friends }) => {
  return (
    <Container>
      <Grid container direction='column' item spacing={3} xs={12}>
        {friendsList.map((friend)=>{
          return (
            <IndividualFriend key={friend.userId} singleFriend={friend} friend={friends}/>
          );
        })}
      </Grid>

    </Container>
  );
};

export default FriendsList;