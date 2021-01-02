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
    margin: theme.spacing(1),
  },
}));

const DifficultySelect = ({ updateDifficulty }) => {
  const classes = useStyles();
  const [Difficulty, setDifficulty] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setDifficulty(event.target.value);
    updateDifficulty(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl} size="small" variant="outlined">
      <InputLabel htmlFor="Difficulty-select-label">Difficulty</InputLabel>
      <Select
        labelId="Difficulty-select-label"
        id="Difficulty-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={Difficulty}
        onChange={handleChange}
        label="Difficulty"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Easy'}>Easy</MenuItem>
        <MenuItem value={'Medium'}>Medium</MenuItem>
        <MenuItem value={'Hard'}>Hard</MenuItem>
        <MenuItem value={'Expert'}>Expert</MenuItem>
        <MenuItem value={'Gordon Ramsay'}>Gordon Ramsay</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DifficultySelect;