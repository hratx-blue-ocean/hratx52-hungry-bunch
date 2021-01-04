import React from 'react';
import RecipeList from './RecipeList.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import { Container, Grid } from '@material-ui/core';

const CenterConsole = (props) => {
  return (
    <Container maxWidth='sm'>
      <RecipeList selectedCatagorie={props.userFilter}/>
    </Container>

  );
};

export default CenterConsole;
