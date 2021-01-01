import {recipe} from '../../data/recipeDummyData.js';
import React from 'react';

const RecipeData = () => {

  return (
    <div>
      <h1>{recipe.recipeName}</h1>
      <a href="fakeurl.com">{recipe.ownerId}</a> 
      <ul>{recipe.ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}</ul>
      <ol>{recipe.steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}</ol>
    </div>
  );
};

export default RecipeData;

// TODO: styling, use ownerId to get username, figure out how to use router to make username a link to that user's profile