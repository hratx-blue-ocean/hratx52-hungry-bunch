import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';

const SingleRecipe = ({oneRecipe}) => {
  const link = `/recipe/${oneRecipe.recipeId}`;

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
                {oneRecipe.favoritedBy.length}
                <StarRateIcon/>
                <StarRateIcon/>
                <StarRateIcon/>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default SingleRecipe;