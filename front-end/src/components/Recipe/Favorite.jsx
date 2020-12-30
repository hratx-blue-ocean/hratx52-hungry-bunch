import { Button } from '@material-ui/core';
import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';
import heartIcon from './heart.png';

const Favorite = () => {
  return (
    <Button>Fave? ({recipe.favoritedBy})</Button>
  );
};

export default Favorite;

// TODO: button styling, fave icon instead?, clicking the button should: 1. add the recipe to the user's faves, 2. update the number of users who have faved the recipe (increasing the number indicated on the fave button)