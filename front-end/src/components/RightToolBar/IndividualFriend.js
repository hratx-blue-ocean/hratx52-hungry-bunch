import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const IndividualFriend = (props) => {
  //userId for a friend will be in the original user's object received from the GET request
  //the User component will then use the url to make its own axios request

  let userId = props.friend._id;
  let friendLink = `/user/${userId}`;

  return (
    <Grid container item spacing={2}>
      <Grid item>
        <Link to={friendLink}>
          <Avatar src={props.friend.picture}></Avatar>
        </Link>
      </Grid>
      <Grid item>
        <Link to={friendLink}>
          {props.friend.name}
        </Link>
      </Grid>
    </Grid>
  );
};

export default IndividualFriend;