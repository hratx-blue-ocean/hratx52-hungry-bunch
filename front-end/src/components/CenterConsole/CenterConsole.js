import React from 'react';
import RecipeList from './RecipeList.js';
import { Container } from '@material-ui/core';

const CenterConsole = (props) => {
  return (
    <Container maxWidth='sm'>
      <RecipeList/>
    </Container>
  );
};

export default CenterConsole;