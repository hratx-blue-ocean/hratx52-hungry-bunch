import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import TopToolbar from '../MainPage/TopToolbar.js';
import Recipe from '../Recipe/Recipe';
import UserInfoToolbar from '../UserInfoToolbar/UserInfoToolbar';
import SearchBar from '../SearchBar/SearchBar';
import MainPageFooter from '../MainPage/MainPageFooter';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function RecipePage() {
  const classes = useStyles();
  return (
    <>
      <TopToolbar />
      <div>
        <Container maxWidth={false}>
          <Grid container>
            <Grid item xs={2}>
              <UserInfoToolbar />
            </Grid>
            <Grid item xs={10} className="recipe-page-grid-container">
              <Recipe/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <MainPageFooter />
    </>
  );
}
