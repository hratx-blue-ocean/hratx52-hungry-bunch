import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setRecipe, setCurrentStep, setCurrentIngredients } from '../../actions/addRecipeActions.js';
import { selectCurrentSteps, selectCurrentIngredients } from '../../containers/addRecipeContainer.js';
import { AddedIngredients } from './addedIngredients.js';
import { AddedInstructions } from './addedInstructions.js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export const AddRecipe = () => {
  const classes = useStyles();
  const ingredients = useSelector(selectCurrentIngredients);
  const steps = useSelector(selectCurrentSteps);
  const dispatch = useDispatch();

  //MOVE THESE INTO STATE!
  var ingredient = '';
  var step = '';

  var newRecipe = {
    recipeName: '',
    ingredients: [],
    category: '',
    shared: '',
    time: null,
    difficulty: '',
    vegan: false,
    steps: [],
    imageUrl: ''
  }

  const handleRecipeChange = (event) => {
    event.preventDefault()
    if (event.target.id === 'add-recipe-ingredient') {
      ingredient = event.target.value;
    } else if (event.target.id === 'add-recipe-name') {
      newRecipe.recipeName = event.target.value;
    } else if (event.target.id === 'add-recipe-step') {
      step = event.target.value;
    }
  }

  const handleSubmit = (event) => {
    console.log(event)
  }

  const handleAddIngredient = (event) => {
    newRecipe.ingredients.push(ingredient);
    dispatch({type: 'SET_CURRENT_INGREDIENTS', payload: newRecipe.ingredients});
    ingredient = '';
    document.getElementById("add-recipe-ingredient").value = '';
    console.log(ingredients);
  }

  const handleAddInstruction = (event) => {
    newRecipe.steps.push(step);
    console.log(newRecipe)
    dispatch({type: 'SET_CURRENT_STEPS', payload: newRecipe.steps});
    step = '';
    document.getElementById("add-recipe-step").value = '';
    console.log(steps);
  }

  return (
    <form className={classes.root}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField required id="add-recipe-name" variant="outlined" label="Recipe Name" onChange={handleRecipeChange}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-ingredient" variant="outlined" label="Add Ingredient" defaultValue={ingredient} onChange={handleRecipeChange}/>
          <Button variant="contained" color="primary" onClick={handleAddIngredient}>
            Add Ingredient
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-step" defaultValue={step}variant="outlined" label="Add Instruction" onChange={handleRecipeChange}/>
          <Button variant="contained" color="primary" onClick={handleAddInstruction}>
            Add Instruction
          </Button>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-category-label">Category</InputLabel>
          <Select required id="add-recipe-category" defaultValue="Breakfast" label="Category">
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
            <MenuItem value={"Dessert"}>Dessert</MenuItem>
            <MenuItem value={"Beverage"}>Beverage</MenuItem>
            <MenuItem value={"Snack"}>Snack</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-share-with-lable">Share With</InputLabel>
          <Select required id="add-recipe-share-with" defaultValue="Everyone" label="Share With">
            <MenuItem value={"Only Me"}>Only Me</MenuItem>
            <MenuItem value={"Friends Only"}>Friends Only</MenuItem>
            <MenuItem value={"Everyone"}>Everyone</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-time-lable">Time</InputLabel>
          <Select required id="add-recipe-time" defaultValue={30} label="Time">
            <MenuItem value={10}>10 minutes</MenuItem>
            <MenuItem value={15}>15 minutes</MenuItem>
            <MenuItem value={20}>20 minutes</MenuItem>
            <MenuItem value={25}>25 minutes</MenuItem>
            <MenuItem value={30}>30 minutes</MenuItem>
            <MenuItem value={45}>45 minutes</MenuItem>
            <MenuItem value={60}>60 minutes</MenuItem>
            <MenuItem value={90}>75 minutes</MenuItem>
            <MenuItem value={90}>90 minutes</MenuItem>
            <MenuItem value={120}>2 hours</MenuItem>
            <MenuItem value={180}>3 hours</MenuItem>
            <MenuItem value={240}>4 hours</MenuItem>
            <MenuItem value={300}>5 hours</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-difficulty-label">Difficulty</InputLabel>
          <Select required id="add-recipe-difficulty" defaultValue="Medium" label="Difficulty">
            <MenuItem value={"Very Easy"}>Very Easy</MenuItem>
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
            <MenuItem value={"Very Hard"}>Very Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-vegan-label">Vegan?</InputLabel>
          <Select required id="add-recipe-vegan" defaultValue={false} label="Vegan?">
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload an image
            </Button>
          </label>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save Recipe
        </Button>
      </div>
    <>
      <AddedIngredients/>
      <AddedInstructions/>
    </>
    </form>

  )
}

