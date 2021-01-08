
import RecipeData from './RecipeData.jsx';
import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';
import './recipe.css';
import RecipeImage from './RecipeImage.jsx';
import Paper from '@material-ui/core/Paper';

import { useHistory, useLocation } from 'react-router-dom';

export default function Recipe() {
  const location = useLocation();
  let recipeId = location.pathname.split('/')[2];

  return (
    <Paper
      variant='outlined'>
      <div className='recipe-container'>
        <div className='recipe-page-container'>
          <RecipeData recipeId={recipeId}/>
        </div>
        <RecipeImage />
      </div>
    </Paper>

  );
}