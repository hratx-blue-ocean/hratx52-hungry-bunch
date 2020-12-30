import React from 'react';
import {recipe} from '../../data/recipeDummyData.js';

const OptionalRecipeData = () => {
  return (
    <div>

      Category: {recipe.category}

      Time: {recipe.time} minutes

      Difficulty: {recipe.difficulty}

      {recipe.vegan ? 'Vegan' : null}

    </div>
  );
};

export default OptionalRecipeData;