import React from 'react';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';

import axios from 'axios';

//friendData are an array of the friend's recipes

class SetFilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCategory: undefined,
      friendData: undefined,
      userId: '',
      userUrlRecipes: []

    };

    this.setCurrCategory = this.setCurrCategory.bind(this);

  }

  componentDidMount() {
    console.log('this is component did mount');
    console.warn('these are props: ', this.props);
    this.setState({userId: this.props.userId});

    axios.get(`http://localhost:3000/userRecipes/${this.props.userId}`)
      .then((userUrlRecipesDb)=>{
        this.setState({userUrlRecipes: userUrlRecipesDb.data});
      })
      .catch((error)=>{ console.log('error in axios request in setFilterCategory: ', error); });
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
          {/*console.log('MONICA IT FILTERED!: ')*/}
          <CategoryCarousel setCurrCategory={this.setCurrCategory}/>
          <br></br>
          <CenterConsole userFilter={this.state.currCategory} friendData={this.state.friendData}/>
        </>
      );
    } else {
      return (
        <>
          {/*console.log('MONICA IT FILTERED!: ')*/}
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