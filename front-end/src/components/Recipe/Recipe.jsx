import Print from './Print.jsx';
import Favorite from './Favorite.jsx';
import RecipeData from './RecipeData.jsx';
import Rating from './Rating.jsx';
import React from 'react';

const Recipe = () => {
  return (
    <div>
      <RecipeData />
      <Print />
      <Favorite />
      <Rating />
    </div>
  );
};

export default Recipe;