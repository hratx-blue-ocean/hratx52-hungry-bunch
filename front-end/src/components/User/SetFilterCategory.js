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

    axios.get(`http://localhost:3000/userInfo/${this.props.userId}`)
      .then((currentUrlUser)=>{
        //console.log('Got data in axios request: ', currentUrlUser.data)
        this.setState({friendData: currentUrlUser.data});
      })
      .catch((error)=>{
        console.log('Error in axios request: ', error);
      });
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
          <CenterConsole userFilter={this.state.currCategory} friendData={this.state.friendData}/>
        </>
      );
    } else {
      return (
        <>
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          {/*this.state.friendData is passing the entire user's info from database...or would you rather have the recipes?*/}
          <CenterConsole friendData={this.state.friendData}/>
        </>
      );
    }
  }
}

export default SetFilterCategory;