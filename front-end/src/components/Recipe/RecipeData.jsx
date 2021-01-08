import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useHistory, useLocation } from 'react-router-dom';

const RecipeData = (props) => {
  const user = `/user/${recipe.ownerId}`;

  if (props.recipeData && props.recipeData.owner) {
    return (
      <div className='recipe-data'>
        <div className='recipe-name-and-user'>
          <h1>{props.recipeData.recipeName}</h1>
          <Link to={`/user/${props.recipeData.owner._id}`}>
            <div>{props.recipeData.owner.name}</div>
          </Link>
        </div>
        <div className='recipe-ingredients'>

          <ul>{props.recipeData.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
          </ul>

        </div>
        <div className='optional-recipe-data'>
          Category: {props.recipeData.category}
          <br></br>
          Time: {props.recipeData.time} minutes,
          <br></br>
          Difficulty: {props.recipeData.difficulty}
          {props.recipeData.vegan ? ', Vegan' : null}
        </div>
        <div className='recipe-steps'>

          <ol>{props.recipeData.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
          </ol>

        </div>
      </div>
    );
  }
  return (<></>);
};

export default RecipeData;



