import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { useHistory, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText, Checkbox, Avatar } from '@material-ui/core';


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
        <div className='optional-recipe-data'>
          Category: {props.recipeData.category}
          <br></br>
          Time: {props.recipeData.time} minutes,
          <br></br>
          Difficulty: {props.recipeData.difficulty}
          {props.recipeData.vegan ? ', Vegan' : null}
        </div>
        <div className='recipe-steps'>
          <List dense={true} disableGutters={true}	>
            {props.recipeData.steps.map((step, i) => (
              <ListItem key={i} margin={1} padding={0}>
                <ListItemText>{i + 1}. {step}</ListItemText>
                <Checkbox />
              </ListItem>
            ))}
          </List>

          <ol>{props.recipeData.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
          </ol>

        </div>
      </div>
    );
  }
  return (<></>);
};

export default RecipeData;



