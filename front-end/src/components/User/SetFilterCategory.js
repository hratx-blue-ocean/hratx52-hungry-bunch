import React from 'react';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';


class SetFilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setCurrCategory = this.setCurrCategory.bind(this);
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
          <CenterConsole userFilter={this.state.currCategory}/>
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