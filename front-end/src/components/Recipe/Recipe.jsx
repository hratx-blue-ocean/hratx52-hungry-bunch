import Print from './Print.jsx';
import Favorite from './Favorite.jsx';
import RecipeData from './RecipeData.jsx';
import Rating from './Rating.jsx';
import React from 'react';
import OptionalRecipeData from './OptionalRecipeData';

const Recipe = () => {
  return (
    <div>
      <RecipeData />
      <OptionalRecipeData />
      <Print />
      <Favorite />
      <Rating />
    </div>
  );
};

export default Recipe;

// TODO: styling, order of components