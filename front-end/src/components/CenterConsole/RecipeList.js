import React, { Component } from 'react';
import { userCookbook } from '../../data/recipeDummyData.js';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: userCookbook.recipes,
    };
  }
  render() {
    return (
      <div>
        {this.state.recipeList[0].recipeName}
      </div>
    );
  }
}

export default RecipeList;