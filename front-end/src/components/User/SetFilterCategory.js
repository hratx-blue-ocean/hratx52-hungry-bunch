import React from 'react';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';

import axios from 'axios';

//send friendData in array form

class SetFilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCategory: undefined,
      friendData: undefined
    };

    this.setCurrCategory = this.setCurrCategory.bind(this);

  }

  componentDidMount() {
    console.log('this is component did mount');
    console.warn('these are props: ', this.props);
  }

  //friendData are an array of the friend's recipes

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
          <CenterConsole userFilter={this.state.currCategory} friendData={undefined}/>
        </>
      );
    } else {
      return (
        <>
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          <CenterConsole />
        </>
      );
    }
  }
}

export default SetFilterCategory;