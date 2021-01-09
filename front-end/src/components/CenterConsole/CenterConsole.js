import React from 'react';
import RecipeList from './RecipeList.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const CenterConsole = (props) => {
  const state = useSelector(state => state);
  return (
    <div>
      <RecipeList
        userFilter={props.userFilter}
        searchBarCategory={props.searchBarCategory}
        searchBarDifficulty={props.searchBarDifficulty}
        searchBarPreferences={props.searchBarPreferences}
        searchBarInput={props.searchBarInput}
        user={state.userReducer.user}
        friendId={props.friendId}
        friendRecipes={props.friendRecipes}
      />
    </div>
  );
};

export default CenterConsole;
