
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './recipe.css';
import RecipeData from './RecipeData.jsx';
import RecipeImage from './RecipeImage.jsx';
import { Grid, Container } from '@material-ui/core';

export default function Recipe() {
  const location = useLocation();
  let recipeId = location.pathname.split('/')[2];

  const [currRecipe, setCurrRecipe] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/recipe/${recipeId}`)
      .then((recipeDataInDb)=>{
        setCurrRecipe(recipeDataInDb.data);
      })
      .catch((error) => { console.log('Axios ERROR in Recipe: ', error); });
  }, []);

  if (currRecipe.owner) {
    return (
      <Paper
        variant='outlined'>
        <div className='recipe-container'>
          <div className='recipe-page-container'>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
            >
              <Grid xs={6}>
                <RecipeData recipeData={currRecipe}/>
              </Grid>
              <Grid xs={6}>
                <RecipeImage image={currRecipe.imageUrl}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    );
  }
  return (<></>);
}