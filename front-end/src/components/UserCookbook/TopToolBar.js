import React, {useState} from 'react';
import CenterConsole from '../../components/CenterConsole/CenterConsole.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  centerText: {
    flexGrow: 1,
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const TopToolbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">

        </IconButton>
        <Link to="/">
          <img src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" width="100" height="100" ></img>
        </Link>


        <Avatar className={classes.avatar}>H</Avatar>
        <Typography variant="h2" className={classes.centerText}>
          {props.nickname}
        </Typography>


        <Button color="inherit">
          <Link to="/">Sign out</Link>
        </Button>
      </Toolbar>
    </AppBar>

  );

};

export default TopToolbar;