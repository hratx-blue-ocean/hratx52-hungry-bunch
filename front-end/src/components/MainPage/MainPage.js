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


// --------this seems to do nothing at the moment
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
      <div className="main-header">
        <TopToolbar />
      </div>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
      >
        <Grid xs={2}>
          <UserInfoToolbar/>
        </Grid>
        <Grid xs={8}>
          <SearchBar />
        </ Grid>
        <Grid xs={2}>
          <RightToolBar/>
        </ Grid>
      </Grid>
      <div>
        HERE GOES FOOOTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </div>
    </>
  );
};

export default MainPage;
