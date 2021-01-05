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

    if (!categoryName && this.state.currCategory !== e.target.innerHTML) {
      this.setState({currCategory: e.target.innerHTML});
    } else if (categoryName && this.state.currCategory !== categoryName) {
      this.setState({currCategory: categoryName});
    } else {
      this.setState({currCategory: undefined});
    }


  }

  render() {
    if (this.state.currCategory) {
      console.warn('currCategory has been set!');
      return (
        <>
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          <CenterConsole userFilter={this.state.currCategory}/>
        </>
      );
    } else {
      console.warn('currCategory has NOT been set!');
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