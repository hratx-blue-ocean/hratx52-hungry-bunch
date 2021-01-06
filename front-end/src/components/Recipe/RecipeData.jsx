import {recipe} from '../../data/recipeDummyData.js';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeData = () => {

  const user = `/user/${recipe.ownerId}`;

  return (
    <div className='recipe-data'>
      <div className='recipe-name-and-user'>
        <h1>{recipe.recipeName}</h1>
        <Link to={user}>
          <div>{recipe.ownerId} - username goes here!</div>
        </Link>
      </div>
      <div className='recipe-ingredients'>
        <ul>{recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}</ul>
      </div>
      <div className='optional-recipe-data'>
        <div>
        Category: {recipe.category}
        </div>
        <div>
        Time: {recipe.time} minutes
        </div>
        <div>
        Difficulty: {recipe.difficulty}
        </div>
        {recipe.vegan ? ', Vegan' : null}
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