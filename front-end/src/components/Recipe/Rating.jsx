import Rating from '@material-ui/lab/Rating';
import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';

const RecipeRating = () => {

  const [value, setValue] = React.useState(recipe.rating);

  return (
    <Rating
      name='recipe-rating'
      value={value}
      precision={0.5}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}/>
  );
};

export default RecipeRating;

// TODO: transition to real data from db once that's implemented, onClick/Change should update the number of ratings on the recipe