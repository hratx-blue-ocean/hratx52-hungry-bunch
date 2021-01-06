import React, { Component } from 'react';
import { userCookbook } from '../../data/recipeDummyData.js';
import SingleRecipe from './SingleRecipe.js';
import { Grid, Button, Container } from '@material-ui/core/';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: userCookbook.recipes,
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


  filterByCatagorie (arrOfRecipes, objOfProps) {
    if (objOfProps.userFilter === undefined) {
      return arrOfRecipes.slice(this.state.startOfSlice, this.state.endOfSlice);
    } else {
      return arrOfRecipes.filter((currRecipe) => currRecipe.category === objOfProps.userFilter).slice(this.state.startOfSlice, this.state.endOfSlice);
    }
  }

  filterBySearchBar (arrOfRecipes, objOfSearchTerms) {


    const searchArr = arrOfRecipes.filter (function (singleRecipe) {
      if (singleRecipe.category === objOfSearchTerms.searchBarCategory || singleRecipe.difficulty === objOfSearchTerms.searchBarDifficulty || singleRecipe.recipeName === objOfSearchTerms.searchBarInput) {
        return true;
      }
    });

    return searchArr.length ? searchArr.slice(this.state.startOfSlice, this.state.endOfSlice) : arrOfRecipes.slice(this.state.startOfSlice, this.state.endOfSlice);
  }

  mapHelper(arr) {
    return arr.map((singleItem) => {
      return (
        <SingleRecipe oneRecipe={singleItem} key={singleItem.recipeId}/>
      );
    });
  }

  // componentDidMount() {
  //   if(this.props.userFilter === undefined) {
  //     return this.mapHelper(this.state.recipeList)
  //   }
  // }

  // componentDidUpdate (prevProps, prevState) {
  //   if (this.props.userFilter !== prevProps.userFilter) {
  //     this.filterByCatagorie(this.state.recipeList, this.props.userFilter);
  //   } else if (this.props.searchBarInput !== prevProps.searchBarInput || this.props.searchBarCategory !== prevProps.searchBarCategory || this.props.searchBarDifficulty !== prevProps.searchBarDifficulty) {
  //     this.filterBySearchBar(this.state.recipeList, this.props);
  //   }
  // }

  render() {
    return (

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {this.props.userFilter ? this.mapHelper(this.filterByCatagorie(this.state.recipeList, this.props)) : this.mapHelper(this.filterBySearchBar(this.state.recipeList, this.props))}
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