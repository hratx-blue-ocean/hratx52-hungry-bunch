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
    //will be used for filtering
    console.log(props.categoryName, 'was clicked...');
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


  // return (
  //   <Grid container spacing={1}>
  //     <Grid item xs={12}>
  //       <img src = {props.picture} style={{width: '200px', height: '150px'}} onClick={handleClick} className={classes.borderOverlay}/>
  //     <Typography className={classes.centerText} variant='body1'> {props.categoryName} </Typography>
  //     </Grid>
  //   </Grid>
  // );
};

export default SingleCategory;