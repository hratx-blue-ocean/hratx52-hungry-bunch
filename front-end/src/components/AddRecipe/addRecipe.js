import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { setRecipe } from '../../actions/addRecipeActions.js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

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

  return (
    <form className={classes.root}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField required id="add-recipe-name" variant="outlined" label="Recipe Name"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-ingredient" variant="outlined" label="Add Ingredient"/>
          <Button variant="contained" color="primary">
            Add Ingredient
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-step" variant="outlined" label="Add Instruction"/>
          <Button variant="contained" color="primary">
            Add Instruction
          </Button>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-category-label">Category</InputLabel>
          <Select required id="add-recipe-category" label="Category">
            <MenuItem>Breakfast</MenuItem>
            <MenuItem>Lunch</MenuItem>
            <MenuItem>Dinner</MenuItem>
            <MenuItem>Dessert</MenuItem>
            <MenuItem>Beverage</MenuItem>
            <MenuItem>Snack</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-share-with-lable">Share With</InputLabel>
          <Select required id="add-recipe-share-with" label="Share With">
            <MenuItem>Only Me</MenuItem>
            <MenuItem>Friends Only</MenuItem>
            <MenuItem>Everyone</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-time-lable">Time in Minutes</InputLabel>
          <Select required id="add-recipe-time" label="Time in Minutes">
            <MenuItem>10</MenuItem>
            <MenuItem>15</MenuItem>
            <MenuItem>20</MenuItem>
            <MenuItem>25</MenuItem>
            <MenuItem>30</MenuItem>
            <MenuItem>45</MenuItem>
            <MenuItem>60</MenuItem>
            <MenuItem>75</MenuItem>
            <MenuItem>90</MenuItem>
            <MenuItem>120</MenuItem>
            <MenuItem>180</MenuItem>
            <MenuItem>240</MenuItem>
            <MenuItem>300</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-difficulty-label">Difficulty</InputLabel>
          <Select required id="add-recipe-difficulty" label="Difficulty">
            <MenuItem>Easy</MenuItem>
            <MenuItem>Medium</MenuItem>
            <MenuItem>Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="add-recipe-vegan-label">Vegan?</InputLabel>
          <Select required id="add-recipe-vegan" label="Vegan?">
            <MenuItem>Yes</MenuItem>
            <MenuItem>No</MenuItem>
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
      </div>
    </form>
  )
}

