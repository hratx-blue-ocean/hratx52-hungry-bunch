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
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from 'react-router-dom';

//import styles from './mainpage.css';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

// ------------------------------------------------------------------------------------------------------------------------------------
// Attention, please!
// To whomever is working directly in the MainPage component, you should really create your own component (like Jonathan did) and just render it here and anywhere else you may need it.
// Please, delete comments after fixing it. Thank you :)
// ------------------------------------------------------------------------------------------------------------------------------------

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
            <Link to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1>HELLO TEAM TRUFFLE</h1>
        <CenterConsole/>
      </div>
    </>
  );
};

export default MainPage;