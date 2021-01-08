import React, {useState} from 'react';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { AddRecipe } from '../AddRecipe/addRecipe.js';
import { AddFriend } from '../AddFriend/addFriend.js';
import { Link, Route, Switch } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { Grid, Container } from '@material-ui/core';
import TopToolbar from './TopToolbar';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import UserInfoToolbar from '../UserInfoToolbar/UserInfoToolbar.jsx';

//import styles from './mainpage.css';


// --------this seems to do nothing at all
// const useStyles = makeStyles(theme => ({
//   title: {
//     flexGrow: 1,
//     textAlign: 'center',
//   },
// }));
//---------

const MainPage = () => {
  //---------------
  // const classes = useStyles();
  //---------------
  return (
    <>
      <div>
        <TopToolbar />
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item >
          <UserInfoToolbar/>
        </Grid>
        <Grid item >
          <SearchBar />
        </ Grid>
        <Grid item >
          <RightToolBar/>
        </ Grid>
      </Grid>
      <div>
        HERE GEOS FOOOTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </div>
    </>
  );
};

export default MainPage;
