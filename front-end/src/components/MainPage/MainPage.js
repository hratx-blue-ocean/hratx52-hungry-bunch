import React, {useState} from 'react';
import CenterConsole from '../../components/CenterConsole/CenterConsole.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from 'react-router-dom';
import Recipe from '../Recipe/Recipe.jsx';
import Logout from '../../components/Login/Logout';
import { Grid, Container } from '@material-ui/core';

//import styles from './mainpage.css';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));



const MainPage = () => {

  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">

          </IconButton>

          { /**<img src="../../assets/spoonforkplate.png"></img>  **/}
          <Link to="/">
            <img src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" width="100" height="100" ></img>
          </Link>



          <Typography variant="h6" className={classes.title}>
            HUNGRY BUNCH
          </Typography>


          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup">Sign up</Link>
          </Button>
          <Button color="inherit">
            <Link to="/"><Logout /></Link>
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1>HELLO TEAM TRUFFLE</h1>
        {/* The Grid system below should be able to hold the left tool bar, center console, and
          * right toolbar in the proper format and can easily be moved from mainPage if needed.
         */}
        <Container>
          <Grid container>
            <Grid item xs={3}>
              {/* Replace with Left ToolBar*/}
              <RightToolBar/>
            </Grid>
            <Grid item xs={6}>
              <CenterConsole/>
            </Grid>
            <Grid item xs={3}>
              <RightToolBar/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className='recipe-page-component'>
        <Recipe />
      </div>
    </>
  );
};

export default MainPage;
