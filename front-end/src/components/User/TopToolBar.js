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


const TopToolbar = (props) => {

  return (
    <div>
      {/* hungry bunch logo*/}
      <div className="main-page-header">
        <Link to="/">
          <img src="https://i.pinimg.com/originals/60/ed/ab/60edabe557e8139d52dae12f380205dc.png" width="100" height="100" ></img>
        </Link>
        {/* user avatar and username*/}
        <div className="user-page-name-and-avatar">
          <Avatar src={props.picture} />
          <div className="user-page-name">
            {props.nickname}
          </div>
        </div>
        {/* <div>
          <AddFriend/>
        </div> */}
        <div>
          {/* sign out link*/}
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default TopToolbar;