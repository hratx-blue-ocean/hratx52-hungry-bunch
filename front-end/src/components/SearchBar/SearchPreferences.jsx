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

const SearchPreferences = ({ updateFavoriteSearchBar, updateVeganSearchBar }) => {
  const classes = useStyles();

  const [Favorites, setFavorites] = useState(false);
  const [Vegan, setVegan] = useState(false);


  const handleFavoritesChange = (event) => {
    // setState([event.target.checked, state[1]]);
    setFavorites(event.target.checked);
    updateFavoriteSearchBar(event.target.checked);

  };

  const handleVeganChange = (event) => {
    // setState([state[0], event.target.checked]);
    setVegan(event.target.checked);
    updateVeganSearchBar(event.target.checked);
  };


  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Preferences</FormLabel>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={Favorites} onChange={handleFavoritesChange} name="Favorites" />}
          label="Favorites"
        />
        <FormControlLabel
          control={<Checkbox checked={Vegan} onChange={handleVeganChange} name="Vegan" />}
          label="Vegan"
        />
      </FormGroup>
    </FormControl>
  );
};

export default SearchPreferences;