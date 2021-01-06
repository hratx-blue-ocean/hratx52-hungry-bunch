import React from 'react';
import RecipeList from './RecipeList.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import { Container, Grid } from '@material-ui/core';

const CenterConsole = (props) => {
  return (
    <div>
      <RecipeList
        userFilter={props.userFilter}
        searchBarCategory={props.searchBarCategory}
        searchBarDifficulty={props.searchBarDifficulty}
        searchBarPreferences={props.searchBarPreferences}
        searchBarInput={props.searchBarInput}
      />
    </div>

  );
};

export default CenterConsole;
