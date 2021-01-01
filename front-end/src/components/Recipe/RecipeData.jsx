import {recipe} from '../../data/recipeDummyData.js';
import React from 'react';

const RecipeData = () => {

  return (
    <div className='recipe-data'>
      <div className='recipe-name-and-user'>
        <h1>{recipe.recipeName}</h1>
        <a href="userId">{recipe.ownerId}</a>
      </div>
      <div className='recipe-ingredients'>
        <ul>{recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}</ul>
      </div>
      <div className='optional-recipe-data'>
        Category: {recipe.category}
        Time: {recipe.time} minutes
        Difficulty: {recipe.difficulty}
        {recipe.vegan ? 'Vegan' : null}
      </div>
      <div className='recipe-steps'>
        <ol>{recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}</ol>
      </div>
    </div>
  );
};

// recipe name, ingredients, time/vegan/difficulty, steps

export default RecipeData;

// TODO: styling, use ownerId to get username, figure out how to use router to make username a link to that user's profile