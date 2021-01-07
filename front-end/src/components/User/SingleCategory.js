import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Typography from '@material-ui/core/Typography';
import { Grid, Button, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';

const useStyles = makeStyles(()=>({
  borderOverlay: {
    border: '4px solid white'
  },
  centerText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255,0.6)'
  }
}));


const SingleCategory = (props) => {
  const classes = useStyles();

  let handleClick = function (e) {
    e.preventDefault();
    props.setCurrCategory(e, props.categoryName);
  };

  return (
    <Grid container spacing={1}>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            image={props.picture}
            height='200'
            className={classes.borderOverlay}
            onClick={handleClick}
          />
          <CardContent>
            <Typography
              className={classes.centerText}
              variant='body1'
              onClick={handleClick}>
              {props.categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleCategory;