import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import { Link, Route, Switch } from 'react-router-dom';
import User from '../User/User.js';



const IndividualFriend = ({ singleFriend }) => {
  return (
    <Grid container item spacing={2}>

      <Grid item>
        <a href='/user'>
          <Avatar src={singleFriend.picture}></Avatar>
        </a>
      </Grid>
      <Grid item>
        <a href='/user'>
          {singleFriend.name}
        </a>
      </Grid>
    </Grid>

  );
};

export default IndividualFriend;