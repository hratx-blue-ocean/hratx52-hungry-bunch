import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setRecipe, setCurrentStep, setCurrentIngredients } from '../../actions/addRecipeActions.js';
import { selectCurrentSteps, selectCurrentIngredients } from '../../containers/addRecipeContainer.js';

export const AddedInstructions = () => {
  const ingredients = useSelector(selectCurrentIngredients);
  const steps = useSelector(selectCurrentSteps);

  return (
    <div>
      <h4>Here are the instructions: </h4>
      <div>
        {steps.map((step, index) => {
          return (
            <div key={step + index}>{index + 1}. {step}</div>
          );
        })}
      </div>
    </div>
  );
};