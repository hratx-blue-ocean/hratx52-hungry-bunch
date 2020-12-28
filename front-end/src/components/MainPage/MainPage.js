import React, {useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

import { Link, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line func-style
const MainPage = () => {


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            { /**<img src="../../assets/spoonforkplate.png"></img> **/}
            <img src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" width="100" height="100"></img>
          </Typography>
          HUNGRY BUNCH
          <Button color="inherit">
            <Link to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1>HELLO TEAM TRUFFLE</h1>
      </div>
    </>
  );
};

export default MainPage;