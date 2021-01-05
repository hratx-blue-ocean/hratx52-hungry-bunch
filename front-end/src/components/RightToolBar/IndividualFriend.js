import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import {Link} from 'react-router-dom';

const IndividualFriend = ({ singleFriend }) => {
  //userId for a friend will be in the original user's object received from the GET request
  //the User component will then use the url to make its own axios request

  let userId = '5ff2381f11fa42c5cd024b55';
  let friendLink = `/user/${userId}`;

  return (
    <Grid container item spacing={2}>
      <Grid item>
        <Link to={friendLink}>
          <Avatar src={singleFriend.picture}></Avatar>
        </Link>
      </Grid>
      <Grid item>
        <Link to={friendLink}>
          {singleFriend.name}
        </Link>
      </Grid>
    </Grid>
  );
};

export default IndividualFriend;