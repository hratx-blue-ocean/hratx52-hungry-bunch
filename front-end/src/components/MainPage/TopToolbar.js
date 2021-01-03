import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link, Route, Switch } from 'react-router-dom';
import Logout from '../../components/Login/Logout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));
export default function TopToolbar() {

  const classes = useStyles();
  return (
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

        <Link to="/"><Logout /></Link>

      </Toolbar>
    </AppBar>
  );
}