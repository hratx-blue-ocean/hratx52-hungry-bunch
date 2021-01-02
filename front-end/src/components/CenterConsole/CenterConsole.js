import React from 'react';
import RecipeList from './RecipeList.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import { Container, Grid } from '@material-ui/core';

const CenterConsole = (props) => {
  return (
    <Container maxWidth='sm'>
      <RecipeList/>
    </Container>

  );
};

export default CenterConsole;

{/* <Container maxWidth='sm'>
<Grid container>
  <Grid item sm= {11} >
    <RecipeList/>
  </Grid>
  <Grid item sm={1}>
    <RightToolBar/>
  </Grid>
</Grid>
</Container> */}