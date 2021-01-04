import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setRecipe, setCurrentStep, setCurrentIngredients } from '../../actions/addRecipeActions.js';
import { selectCurrentSteps, selectCurrentIngredients } from '../../containers/addRecipeContainer.js';

export const AddedIngredients = () => {
  const ingredients = useSelector(selectCurrentIngredients);
  const steps = useSelector(selectCurrentSteps);

  return (
    <div>
      <h4>Here are the ingredients: </h4>
      <div>
        {ingredients.map((ingredient) => {
          return (
            <div key={ingredient}>{ingredient}</div>
          );
        })}
      </div>
    </div>
  );
};