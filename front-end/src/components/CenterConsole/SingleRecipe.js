import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';
import FavoritedByDisplay from './favoritedByDisplay.js';


const SingleRecipe = ({oneRecipe}) => {
  const link = `/recipe/${oneRecipe.recipeId}`;

  const checkFavoriteAmount = (arrLength) => {
    if (arrLength <= 2) {
      return 1;
    }
    if (arrLength >= 5) {
      return 3;
    }
    return 2;
  };

  return (
    <Grid item xs={4}>
      <Link to={link}>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              image={oneRecipe.imageUrl}
              height='200'
              alt='image of recipe'
            />
            <CardContent>
              {oneRecipe.recipeName}
              <Grid>
                <FavoritedByDisplay value={checkFavoriteAmount(oneRecipe.favoritedBy.length)}/>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default SingleRecipe;