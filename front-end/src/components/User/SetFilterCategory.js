import React from 'react';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';

import axios from 'axios';

class SetFilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCategory: undefined,
      userId: '',
      userUrlRecipes: []
    };

    this.setCurrCategory = this.setCurrCategory.bind(this);
  }

  componentDidMount() {
    //console.log('Props in componentDidMount: ', this.props);

    this.setState({
      userId: this.props.userInfo._id,
      userUrlRecipes: this.props.userInfo.recipes
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({
        userId: this.props.userId,
        userUrlRecipes: this.props.userInfo.recipes
      });
    }
  }

  setCurrCategory(e, categoryName) {
    e.preventDefault();

    if (categoryName && this.state.currCategory !== categoryName) {
      this.setState({currCategory: categoryName});
    } else {
      this.setState({currCategory: undefined});
    }
  }

  render() {
    if (this.state.currCategory) {
      return (
        <>
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          <CenterConsole userFilter={this.state.currCategory} friendRecipes={this.state.userUrlRecipes}/>
        </>
      );
    } else {
      return (
        <>
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          <CenterConsole friendRecipes={this.state.userUrlRecipes}/>
        </>
      );
    }
  }
}

export default SetFilterCategory;