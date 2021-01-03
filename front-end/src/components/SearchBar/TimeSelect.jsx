import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 150,
  },
}));

const TimeSelect = ({ updateCategory }) => {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
    updateCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl} size="small" variant="outlined">
      <InputLabel htmlFor="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={category}
        onChange={handleChange}
        label="Category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
        <MenuItem value={'Lunch'}>Lunch</MenuItem>
        <MenuItem value={'Dinner'}>Dinner</MenuItem>
        <MenuItem value={'Snack'}>Snack</MenuItem>
        <MenuItem value={'Dessert'}>Dessert</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeSelect;