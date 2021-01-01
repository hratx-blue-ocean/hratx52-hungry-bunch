
import RecipeData from './RecipeData.jsx';
import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';
import './recipe.css';
import RecipeImage from './RecipeImage.jsx';

export default function Recipe() {

  return (
    <div className='recipe-container'>
      <div className='recipe-page-container'>
        <RecipeData />
      </div>
      <RecipeImage />
    </div>

  );
}