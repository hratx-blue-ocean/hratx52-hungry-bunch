import React, {useState} from 'react';
import LeftToolbarLanding from '../../components/LeftToolbarLanding/LeftToolbarLanding.jsx';
import CenterConsole from '../../components/CenterConsole/CenterConsole.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
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
      <div>
        {/* The Grid system below should be able to hold the left tool bar, center console, and
          * right toolbar in the proper format and can easily be moved from mainPage if needed.
         */}
        <Container>
          <Grid container>
            <Grid item xs={3}>
              {/* Replace with Left ToolBar*/}
              <LeftToolbarLanding/>
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
    </>
  );
};

export default MainPage;
