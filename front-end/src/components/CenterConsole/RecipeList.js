import React, { Component } from 'react';
import { userCookbook } from '../../data/recipeDummyData.js';
import SingleRecipe from './SingleRecipe.js';
import { Grid, Button, Container } from '@material-ui/core/';

class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      recipeList: userCookbook.recipes,
      disableShowMoreButton: false,
      disablePreviousButton: true,
      startOfSlice: 0,
      endOfSlice: 6,
    };
  }

  showPreviousClickHandler (e) {
    var previousButtonToggle = this.state.disablePreviousButton;

    if (this.state.startOfSlice === 6) {
      previousButtonToggle = true;
    }

    this.setState({
      disablePreviousButton: previousButtonToggle,
      disableShowMoreButton: false,
      startOfSlice: this.state.startOfSlice - 6,
      endOfSlice: this.state.endOfSlice - 6,
    });
  }

  showMoreClickHandler (e) {
    var newStart = this.state.endOfSlice;
    var newEnd = this.state.endOfSlice + 6;
    var newShowMoreButtonToggle = this.state.disableShowMoreButton;

    if (this.state.recipeList.length < newEnd) {
      newShowMoreButtonToggle = true;
    }
    this.setState({
      startOfSlice: newStart,
      endOfSlice: newEnd,
      disableShowMoreButton: newShowMoreButtonToggle,
      disablePreviousButton: false,
    });
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {this.state.recipeList.slice(this.state.startOfSlice, this.state.endOfSlice).map((oneRecipe) => {
            return (
              <SingleRecipe oneRecipe={oneRecipe} key={oneRecipe.recipeId}/>
            );
          })}
        </Grid>
        <Grid container spacing={10}>
          <Grid item >
            <Button
              disabled={this.state.disablePreviousButton}
              color='primary'
              onClick={() => this.showPreviousClickHandler()}
            >
            Show Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={this.state.disableShowMoreButton}
              color='primary'
              onClick={() => this.showMoreClickHandler()}
            >
            Show More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default RecipeList;