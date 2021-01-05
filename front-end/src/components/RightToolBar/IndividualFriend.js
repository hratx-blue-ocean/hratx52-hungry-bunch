import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const IndividualFriend = ({ singleFriend }) => {
  //userId for a friend will be in the original user's object received from the GET request
  //the User component will then use the url to make its own axios request

  let userId = 1232132;
  let friendLink = `./user/${userId}`;

  return (
    <Grid container item spacing={2}>

      <Grid item>
        <a href= {friendLink}>
          <Avatar src={singleFriend.picture}></Avatar>
        </a>
      </Grid>
      <Grid item>
        <a href= {friendLink}>
          {singleFriend.name}
        </a>
      </Grid>
    </Grid>

  );
};

export default IndividualFriend;