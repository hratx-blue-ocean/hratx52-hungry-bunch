import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useHistory, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText, Checkbox, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0
  }
});

const RecipeData = (props) => {
  const user = `/user/${props.recipeData.owner._id}`;

  if (props.recipeData && props.recipeData.owner) {
    return (
      <div className='recipe-data'>
        <div className='recipe-name-and-user'>
          <h1>{props.recipeData.recipeName}</h1>
          <Link to={`/user/${props.recipeData.owner._id}`}>
            <div>{props.recipeData.owner.name}</div>
          </Link>
        </div>
        <div className='recipe-ingredients'>

          <ul>{props.recipeData.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
          </ul>
        </div>
        <br></br>

        <Typography variant="body1">
          Category: {props.recipeData.category}
          <br></br>
          Time: {props.recipeData.time} minutes
          <br></br>
          Difficulty: {props.recipeData.difficulty}
          <br></br>
          {props.recipeData.vegan ? ', Vegan' : null}
        </Typography>
        <br></br>
        <br></br>

        <div className='recipe-steps'>
          <Typography variant="h6">
            Check off steps as you complete them!
            <Checkbox checked={true} color={'primary'}/>
          </Typography>

          <List dense={true} disableGutters={true}>
            {props.recipeData.steps.map((step, i) => (
              <ListItem key={i} margin={1} padding={0}>
                <ListItemText>{i + 1}. {step}</ListItemText>
                <Checkbox color={'primary'}/>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
  return (<></>);
};

export default RecipeData;



