import React, {useState} from 'react';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { AddRecipe } from '../AddRecipe/addRecipe.js';

import { Link, Route, Switch } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { Grid, Container } from '@material-ui/core';
import TopToolbar from './TopToolbar';

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
      <TopToolbar />
      <SearchBar />

    </>
  );
};

export default MainPage;
