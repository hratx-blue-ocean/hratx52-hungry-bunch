import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useHistory, useLocation } from 'react-router-dom';

//delete later
import {recipe} from '../../data/recipeDummyData.js';

const RecipeData = (props) => {
  const user = `/user/${recipe.ownerId}`;

  if (props.recipeData && props.recipeData.owner) {
    return (
      <div className='recipe-data'>
        <div className='recipe-name-and-user'>
          <h1>{recipe.recipeName}</h1>
          <Link to={`/user/${props.recipeData.owner}`}>
            <div>{props.recipeData.owner} - username goes here!</div>
          </Link>
        </div>
        <div className='recipe-ingredients'>
          <ul>{props.recipeData.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}</ul>
        </div>
        <div className='optional-recipe-data'>
          Category: {props.recipeData.category}

          Time: {props.recipeData.time} minutes,

          Difficulty: {props.recipeData.difficulty}
          {props.recipeData.vegan ? ', Vegan' : null}
        </div>
        <div className='recipe-steps'>
          <ol>{props.recipeData.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}</ol>
        </div>
      </div>
    );
  }
  return (<></>);
};

// recipe name, ingredients, time/vegan/difficulty, steps

export default RecipeData;

// TODO: styling, use ownerId to get username, figure out how to use router to make username a link to that user's profile



/*


      <div className='recipe-data'>
        <div className='recipe-name-and-user'>
          <h1>{recipe.recipeName}</h1>
          <Link to={`/user/${props.currRecipe.owner}`}>
            <div>{props.currRecipe.owner} - username goes here!</div>
          </Link>
        </div>
        <div className='recipe-ingredients'>
          <ul>{props.currRecipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}</ul>
        </div>
        <div className='optional-recipe-data'>
          Category: {props.currRecipe.category}

          Time: {props.currRecipe.time} minutes,

          Difficulty: {props.currRecipe.difficulty}
          {props.currRecipe.vegan ? ', Vegan' : null}
        </div>
        <div className='recipe-steps'>
          <ol>{props.currRecipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}</ol>
        </div>
      </div>

*/