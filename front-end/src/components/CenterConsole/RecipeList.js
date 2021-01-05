import React, { Component } from 'react';
import { userCookbook } from '../../data/recipeDummyData.js';
import SingleRecipe from './SingleRecipe.js';
import { Grid, Button, Container } from '@material-ui/core/';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: userCookbook.recipes,
      filterList: [],
      disableShowMoreButton: false,
      disablePreviousButton: true,
      startOfSlice: 0,
      endOfSlice: 6,
      selectedCatagorie: this.props.selectedCatagorie
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

  filterByCatagorie (arrOfRecipes, filterTerm) {
    if (filterTerm === undefined) {
      return arrOfRecipes;
    } else {
      return arrOfRecipes.filter((currRecipe) => currRecipe.category === filterTerm);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.userFilter !== prevProps.userFilter) {
      this.filterByCatagorie(this.props.userFilter);
    }
  }



  componentDidMount() {
    this.filterByCatagorie(this.state.userFilter);
  }

  render() {
    return (
      <Grid container spacing={1}>
        {console.log(this.props)}
        <Grid container item xs={12} spacing={3}>
          {this.filterByCatagorie(this.state.recipeList, this.props.userFilter).slice(this.state.startOfSlice, this.state.endOfSlice).map((oneRecipe) => {
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