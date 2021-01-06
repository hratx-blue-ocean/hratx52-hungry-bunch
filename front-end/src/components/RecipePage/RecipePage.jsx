import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import TopToolbar from '../MainPage/TopToolbar.js';
import Recipe from '../Recipe/Recipe';
import LeftToolbarRecipe from './LeftToolbarRecipe';

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
        <Container>
          <Grid container>
            <Grid item xs={3}>
              <LeftToolbarRecipe />
            </Grid>
            <Grid item xs={9}>
              <Recipe/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
