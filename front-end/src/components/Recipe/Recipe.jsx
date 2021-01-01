import Print from './Print.jsx';
import Favorite from './Favorite.jsx';
import RecipeData from './RecipeData.jsx';
import Rating from './Rating.jsx';
import React from 'react';
import OptionalRecipeData from './OptionalRecipeData';
import {recipe} from '../../data/recipeDummyData.js';
import './recipe.css';

export default function Recipe() {

  return (
    <div className='recipe-container'>
      <div className='recipe-info-container'>
        <RecipeData />
        <OptionalRecipeData />
      </div>
      <div className='recipe-image-and-rating-container'>
        <div className='recipe-image-container'>
          <img src={recipe.imageUrl}></img>
        </div>
        <div className='recipe-rating-container'>
          <Rating />
        </div>
        <div className='recipe-buttons'>
          <Print />
          <Favorite />
        </div>
      </div>
    </div>

  );
}