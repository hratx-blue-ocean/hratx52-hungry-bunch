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
          <div className='recipe-name'>{props.recipeData.recipeName}</div>
          <Link className='recipe-owner-name' to={`/user/${props.recipeData.owner._id}`} style={{textDecoration: 'none'}}>
            <div>{props.recipeData.owner.name}</div>
          </Link>
        </div>
        <div className='recipe-ingredients'>
          <ul>{props.recipeData.ingredients.map((ingredient, i) => (
            <>
              <div key={i}>
                <Checkbox style={{color: 'black'}}/>
                {ingredient}
              </div>

            </>
          ))}
          </ul>
        </div>
        <br></br>
        <div className='recipe-steps'>
          Category: {props.recipeData.category}
          <br></br>
          Time: {props.recipeData.time} minutes
          <br></br>
          Difficulty: {props.recipeData.difficulty}
          <br></br>
          {props.recipeData.vegan ? 'Vegan' : null}
        </div>
        <br></br>
        <br></br>

        <div className='recipe-steps'>

            Check off steps as you complete them!
          <Checkbox checked={true} color={'primary'}/>

          <ul>
            {props.recipeData.steps.map((step, i) => (
              <li key={i} margin={1} padding={0} >
                {i + 1}. {step}
                <Checkbox color={'primary'}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (<></>);
};

export default RecipeData;



