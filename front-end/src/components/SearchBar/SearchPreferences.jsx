import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

const SearchPreferences = ({ updatePreferences }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    Favorites: false,
    Vegan: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    updatePreferences('');
  };

  const { Favorites, Vegan } = state;
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Preferences</FormLabel>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={Favorites} onChange={handleChange} name="Favorites" />}
          label="Favorites"
        />
        <FormControlLabel
          control={<Checkbox checked={Vegan} onChange={handleChange} name="Vegan" />}
          label="Vegan"
        />
      </FormGroup>
    </FormControl>
  );
};

export default SearchPreferences;