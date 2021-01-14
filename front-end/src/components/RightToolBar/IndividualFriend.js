import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';


const IndividualFriend = (props) => {

  let userId = props.friend._id;
  let friendLink = `/user/${userId}`;

  return (
    <Grid container item spacing={2}>
      <Link to={friendLink} style={{textDecoration: 'none'}}>
        <div className="friends-list-avatar-and-name">
          <div>
            <Avatar src={props.friend.picture}></Avatar>
          </div>
          <div className="friends-list-name">
            {props.friend.name}
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default IndividualFriend;