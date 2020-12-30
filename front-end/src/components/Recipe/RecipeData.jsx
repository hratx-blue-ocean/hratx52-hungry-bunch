import {recipe} from '../../data/recipeDummyData.js';
import React from 'react';

//TODO: ownerId => username, change url to whatever we end up using

const RecipeData = () => {

  return (
    <div>
      <h1>{recipe.recipeName}</h1>
      <a href="fakeurl.com">{recipe.ownerId}</a>
      <img src={recipe.imageUrl}></img>
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