
import RecipeData from './RecipeData.jsx';
import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';
import './recipe.css';
import RecipeImage from './RecipeImage.jsx';
import Paper from '@material-ui/core/Paper';

export default function Recipe() {

  return (
    <Paper
      variant='outlined'>
      <div className='recipe-container'>
        <div className='recipe-page-container'>
          <RecipeData />
        </div>
        <RecipeImage />
      </div>
    </Paper>

  );
}