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
    <div className="main-page-header">
      <div></div>
      <div>
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="titile-and-logo">
            <div className="title">HUNGRY BUNCH</div>
            <img className="logo" src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" ></img>
          </div>

        </Link>
      </div>
      <Link to="/" style={{textDecoration: 'none'}}><Logout /></Link>
    </div>
  );
}