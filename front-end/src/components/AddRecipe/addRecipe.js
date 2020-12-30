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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  },
}));

export const AddRecipe = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField required id="add-recipe-name" defaultValue="ex: Brocolli Cheddar Soup"/>
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

        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-ingredient" variant="outlined" label="Add Ingredient" defaultValue="ex: Brocolli"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-time" variant="outlined" label="Time in Minutes" defaultValue="ex: 60"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-difficulty" variant="outlined" label="Difficulty" defaultValue="Easy/Medium/Hard"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-vegan" variant="outlined" label="Vegan?" defaultValue="Yes/No"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-step" variant="outlined" label="Add Instruction" defaultValue="ex: Cut the vegetables"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField required id="add-recipe-image" variant="outlined" label="Add an Image" defaultValue="Add image here" />
        </FormControl>

      </div>
    </form>
  )
}

