import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';

const SingleRecipe = ({oneRecipe}) => {


  return (
    <Grid item xs={4}>
      <Link to='/login'>
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
      </Link>
    </Grid>
  );
};

export default SingleRecipe;