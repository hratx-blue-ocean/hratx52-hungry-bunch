import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


const IndividualFriend = ({ singleFriend }) => {
  return (
    <Grid container item spacing={2}>
      <Grid item>
        <Avatar src={singleFriend.picture}></Avatar>
      </Grid>
      <Grid item>
        {singleFriend.name}
      </Grid>
    </Grid>

  );
};

export default IndividualFriend;