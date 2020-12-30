import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';

const SingleRecipe = ({oneRecipe}) => {


  return (
    <Grid item xs={4}>
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
              <StarRateIcon/>
              <StarRateIcon/>
              <StarRateIcon/>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleRecipe;