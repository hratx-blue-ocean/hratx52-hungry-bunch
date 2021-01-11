import React, { Component } from 'react';
import SingleRecipe from './SingleRecipe.js';
import { Grid, Button, Container } from '@material-ui/core/';
import axios from 'axios';



class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableShowMoreButton: false,
      disablePreviousButton: true,
      startOfSlice: 0,
      endOfSlice: 6,
      userRecipes: this.props.user ? this.props.user.recipes : [],
      friendRecipes: this.props.friendId ? this.props.friendRecipes : []
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

    if (this.state.userRecipes.length < newEnd) {
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
      if (singleRecipe.category === objOfSearchTerms.searchBarCategory || singleRecipe.difficulty === objOfSearchTerms.searchBarDifficulty || (singleRecipe.vegan && objOfSearchTerms.searchBarPreferences[1]) || (singleRecipe.favoritedBy.length && objOfSearchTerms.searchBarPreferences[0])) {
        return true;
      } else if (objOfSearchTerms.searchBarInput) {
        if (singleRecipe.recipeName.toLowerCase().includes(objOfSearchTerms.searchBarInput.toLowerCase())) {
          return true;
        }
      }
    });
    return searchArr.length ? searchArr.slice(this.state.startOfSlice, this.state.endOfSlice) : arrOfRecipes.slice(this.state.startOfSlice, this.state.endOfSlice);
  }

  mapHelper(arr) {
    return arr.map((singleItem) => {
      return (
        <SingleRecipe oneRecipe={singleItem} key={singleItem._id}/>
      );
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        userRecipes: this.props.user.recipes,
      });
    }
    if (this.props.friendId !== prevProps.friendId) {
      this.setState({
        friendRecipes: this.props.friendRecipes,
      });
    }
  }


  render() {
    return (
      <Grid >
        {console.log(this.state.userRecipes[0])}
        <Grid container item lg={12} spacing={3}>
          {this.props.friendId ? this.mapHelper(this.filterByCatagorie(this.state.friendRecipes, this.props)) : this.mapHelper(this.filterBySearchBar(this.state.userRecipes, this.props))}
        </Grid>
        <div className="show-more-previous-buttons">
          <Button
            disabled={this.state.disablePreviousButton}
            color='primary'
            onClick={() => this.showPreviousClickHandler()}
          >
          Show Previous
          </Button>
          <Button
            disabled={this.state.disableShowMoreButton}
            color='primary'
            onClick={() => this.showMoreClickHandler()}
          >
          Show More
          </Button>
        </div>

      </Grid>
    );
  }
}

export default RecipeList;