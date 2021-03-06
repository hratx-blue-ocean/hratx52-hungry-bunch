import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setRecipe, setCurrentStep, setCurrentIngredients } from '../../actions/addRecipeActions.js';
import { selectCurrentSteps, selectCurrentIngredients, selectRecipeName, selectCategory, selectShared, selectTime, selectDifficulty, selectVegan } from '../../containers/addRecipeContainer.js';
import { selectUser } from '../../containers/addUserContainer.js';
import { AddedIngredients } from './addedIngredients.js';
import { AddedInstructions } from './addedInstructions.js';
import { postNewRecipe, getUserData, uploadRecipeImage } from '../../utils/apiCalls.js';
import { listOfImages } from '../../assets/foodImageUrls.js';
import { receiveLogin } from '../../actions/action';
import Container from '@material-ui/core/Container';
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
  const recipeName = useSelector(selectRecipeName);
  const category = useSelector(selectCategory);
  const shared = useSelector(selectShared);
  const time = useSelector(selectTime);
  const difficulty = useSelector(selectDifficulty);
  const vegan = useSelector(selectVegan);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  var ingredient = '';
  var step = '';

  var newRecipe = {
    recipeName: recipeName,
    ingredients: ingredients,
    category: category,
    shared: shared,
    time: time,
    difficulty: difficulty,
    vegan: vegan,
    steps: steps,
    imageUrl: ''
  };

  const randomImage = () => {
    var index = Math.floor(Math.random() * listOfImages.length);
    return listOfImages[index];
  };

  const clearRecipe = () => {
    dispatch({type: 'SET_NEW_RECIPE_DEFAULT'});
  };

  const [recipeImage, handleRecipeImage] = useState(null);
  const [recipeUrl, handleRecipeUrl] = useState(null);

  const handleRecipeChange = (event) => {
    event.preventDefault();
    if (event.target.id === 'add-recipe-ingredient') {
      ingredient = event.target.value;
    } else if (event.target.id === 'add-recipe-name') {
      dispatch({type: 'SET_RECIPE_NAME', payload: event.target.value});
    } else if (event.target.id === 'add-recipe-step') {
      step = event.target.value;
    } else if (event.target.name === 'add-recipe-category') {
      dispatch({type: 'SET_CATEGORY', payload: event.target.value});
    } else if (event.target.name === 'add-recipe-share-with') {
      dispatch({type: 'SET_SHARED', payload: event.target.value});
    } else if (event.target.name === 'add-recipe-time') {
      dispatch({type: 'SET_TIME', payload: event.target.value});
    } else if (event.target.name === 'add-recipe-difficulty') {
      dispatch({type: 'SET_DIFFICULTY', payload: event.target.value});
    } else if (event.target.name === 'add-recipe-vegan') {
      dispatch({type: 'SET_VEGAN', payload: event.target.value});
    } else if (event.target.id === 'add-recipe-imageUrl') {
      handleRecipeImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('recipeImage', recipeImage);
    var imageUrl = await uploadRecipeImage(formData);
    var imageUrl = imageUrl.data;
    handleRecipeUrl(imageUrl);
  };

  const handleSubmit = async (event) => {
    newRecipe.imageUrl = recipeUrl;

    var response = await postNewRecipe(newRecipe, user['_id']);

    if (response.status === 200) {
      alert('Recipe Saved');
      dispatch({type: 'SET_MODAL', payload: false});
      clearRecipe();
      var updatedUser = await getUserData(user['_id']);
      dispatch(receiveLogin(updatedUser.data));
    } else {
      alert('Sorry, the recipe was not able to be saved. Please try again.');
    }
  };

  const handleAddIngredient = (event) => {
    event.preventDefault();
    dispatch({type: 'SET_CURRENT_INGREDIENTS', payload: ingredient});
    ingredient = '';
    document.getElementById('add-recipe-ingredient').value = '';
  };

  const handleAddInstruction = (event) => {
    event.preventDefault();
    dispatch({type: 'SET_CURRENT_STEPS', payload: step});
    step = '';
    document.getElementById('add-recipe-step').value = '';
  };

  return (
    <Container maxWidth='sm' style={{padding: '20px', height: '700px', overflow: 'scroll'}}>
      <h2>Add a new recipe:</h2>
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
            <AddedIngredients/>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField required id="add-recipe-step" defaultValue={step}variant="outlined" label="Add Instruction" onChange={handleRecipeChange}/>
            <Button variant="contained" color="primary" onClick={handleAddInstruction}>
              Add Instruction
            </Button>
            <AddedInstructions/>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="add-recipe-category-label">Category</InputLabel>
            <Select required id="add-recipe-category" name="add-recipe-category" defaultValue="Breakfast" label="Category" onChange={handleRecipeChange}>
              <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
              <MenuItem value={'Lunch'}>Lunch</MenuItem>
              <MenuItem value={'Dinner'}>Dinner</MenuItem>
              <MenuItem value={'Dessert'}>Dessert</MenuItem>
              <MenuItem value={'Beverage'}>Beverage</MenuItem>
              <MenuItem value={'Snack'}>Snack</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="add-share-with-lable">Share With</InputLabel>
            <Select required id="add-recipe-share-with" name="add-recipe-shared-with" defaultValue="Everyone" label="Share With" onChange={handleRecipeChange}>
              <MenuItem value={'Only Me'}>Only Me</MenuItem>
              <MenuItem value={'Friends Only'}>Friends Only</MenuItem>
              <MenuItem value={'Everyone'}>Everyone</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="add-recipe-time-lable">Time</InputLabel>
            <Select required id="add-recipe-time" name="add-recipe-time" defaultValue={30} label="Time" onChange={handleRecipeChange}>
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
            <Select required id="add-recipe-difficulty" name="add-recipe-difficulty" defaultValue="Medium" label="Difficulty" onChange={handleRecipeChange}>
              <MenuItem value={'Very Easy'}>Very Easy</MenuItem>
              <MenuItem value={'Easy'}>Easy</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'Hard'}>Hard</MenuItem>
              <MenuItem value={'Very Hard'}>Very Hard</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="add-recipe-vegan-label">Vegan?</InputLabel>
            <Select required id="add-recipe-vegan" name="add-recipe-vegan" defaultValue={false} label="Vegan?" onChange={handleRecipeChange}>
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <input
              accept="image/*"
              className={classes.input}
              id="add-recipe-imageUrl"
              multiple
              type="file"
              onChange={handleRecipeChange}
            />
            <label htmlFor="add-recipe-imageUrl">
              <Button variant="contained" color="primary" component="span" onClick={handleUpload}>
                Upload an image
              </Button>
            </label>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save Recipe
          </Button>
        </div>
      </form>
      <>
      </>
    </Container>

  );
};

