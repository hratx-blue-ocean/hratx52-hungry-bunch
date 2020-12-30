import Rating from '@material-ui/lab/Rating';
import React from 'react';

const RecipeRating = () => {

  const [value, setValue] = React.useState(3.5);

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

//TODO:
// add onChange
// change 3.5 to dynamically render whatever the avg rating is