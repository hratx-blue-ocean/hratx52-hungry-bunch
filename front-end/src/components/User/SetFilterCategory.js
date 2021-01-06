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
      friendData: undefined,
      userId: '',
      loggedInUser: {}
    };

    this.setCurrCategory = this.setCurrCategory.bind(this);

  }

  componentDidMount() {
    console.log('this is component did mount');
    console.warn('these are props: ', this.props);
    this.setState({userId: this.props.userId});
    this.setState({loggedInUser: this.props.userInfo});
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

    if (this.state.loggedInUser.friends) {

      if (this.state.currCategory) {
        return (
          <>
            {console.log('MONICA IT FILTERED!: ', this.state.loggedInUser.friends)}
            <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
            <br></br>
            <CenterConsole userFilter={this.state.currCategory} friendData={this.state.friendData}/>
          </>
        );
      } else {
        return (
          <>
            {console.log('MONICA IT FILTERED!: ', this.state.loggedInUser.friends)}
            <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
            <br></br>
            {/*this.state.friendData is passing the entire user's info from database...or would you rather have the recipes?*/}
            <CenterConsole friendData={this.state.friendData}/>
          </>
        );
      }
    } else {
      return ( <></> );
    }
  }
}

export default SetFilterCategory;