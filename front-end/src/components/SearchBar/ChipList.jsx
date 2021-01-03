import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipsList = ({ category, Difficulty, Preferences }) => {
  const classes = useStyles();

  return (
    <>
      <Chip
        size="small"
        label={'popcorn'}
        color="secondary"
        className={classes.chip}
      />
      <Chip
        size="small"
        label={Difficulty}
        color="secondary"
        className={classes.chip}
      />
      <Chip
        size="small"
        label={'favorites'}
        color="secondary"
        className={classes.chip}
      />
      <Chip
        size="small"
        label={'vegan'}
        color="secondary"
        className={classes.chip}
      />
    </>
  );
};

export default ChipsList;