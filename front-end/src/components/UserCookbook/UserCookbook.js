import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from 'react-router-dom';

import TopToolbar from './TopToolBar.js';

//wireframe: https://www.figma.com/file/C9TLcX8c0DNBW3xsYlv6kO/Untitled?node-id=60%3A2
/*
top toolbar
category carousel
recipe tiles
friend toolbar on left?
*/

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));


const UserCookbook = () => {

  const classes = useStyles();
  return (
    <>
      <TopToolbar />

    </>
  );
};

export default UserCookbook;