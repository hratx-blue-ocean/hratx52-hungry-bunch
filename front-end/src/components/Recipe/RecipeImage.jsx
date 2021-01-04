import React from 'react';
import Rating from './Rating.jsx';
import {recipe} from '../../data/recipeDummyData.js';
import Print from './Print.jsx';
import Favorite from './Favorite.jsx';

const RecipeImage = () => {
  return (
    <div className='recipe-image-and-rating-container'>
      <img className='recipe-page-image' src={recipe.imageUrl}></img>
      <div className='recipe-rating-container'>
        <Rating />
      </div>
      <div>
        <Print />
        <Favorite />
      </div>
    </div>
  );
};

export default RecipeImage;