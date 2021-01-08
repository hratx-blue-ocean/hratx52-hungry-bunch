import React, {useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import Logout from '../Login/Logout';
import { Link, Route, Switch } from 'react-router-dom';
import { AddFriend } from '../AddFriend/addFriend.js';

const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    '& > *': {
      //this is for the spacing in front of the AppBar
      margin: theme.spacing(0),
    },
  },
  centerText: {
    flexGrow: 1,
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

const TopToolbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>

          {/* hungry bunch logo*/}
          <Box flexGrow={1}>
            <Link to="/">
              <img src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" width="100" height="100" ></img>
            </Link>
          </Box>

          {/* user avatar and username*/}
          <Box>
            <Avatar src={props.picture} className={classes.avatar}/>
          </Box>

          {/* user name*/}
          <Box flexGrow={1}>
            <Typography variant="h2">
              {props.nickname}
            </Typography>
          </Box>
          <Box>
            <AddFriend profileId={props.userId}/>
          </Box>

          {/* sign out link*/}
          <Box>
            <Logout />
          </Box>

        </Toolbar>
      </AppBar>
    </div>
  );

};

export default TopToolbar;