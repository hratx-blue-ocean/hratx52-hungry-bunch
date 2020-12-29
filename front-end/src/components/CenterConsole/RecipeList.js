import React, { Component } from 'react';
import { userCookbook } from '../../data/recipeDummyData.js';
import SingleRecipe from './SingleRecipe.js';
import { Grid } from '@material-ui/core/';

class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      recipeList: userCookbook.recipes,
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {this.state.recipeList.map((oneRecipe) => {
              return (
                <SingleRecipe oneRecipe={oneRecipe} key={oneRecipe.recipeId}/>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RecipeList;