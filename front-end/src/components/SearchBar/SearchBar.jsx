import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SearchPreferences from './SearchPreferences';
import ClearIcon from '@material-ui/icons/Clear';
import CategorySelect from './CategorySelect';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DifficultySelect from './DifficultySelect';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';
import ChipsList from './ChipList';
// import LeftToolbarLanding from '../LeftToolbarLanding/LeftToolbarLanding.jsx';
import CenterConsole from '../../components/CenterConsole/CenterConsole.js';
import RightToolBar from '../../components/RightToolBar/RightToolBar.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: '10px',
    width: 400,
  },
  mainDiv: {
    flexGrow: 1,
    paddingTop: '10px',
    paddingBottom: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SearchBar = () => {

  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [Difficulty, setDifficulty] = useState('');
  const [Preferences, setPreferences] = useState([]);
  const classes = useStyles();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setInput('');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const updateDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const updatePreferences = (PreferencesValue) => {
    setPreferences(PreferencesValue);
  };

  const handleDelete = () => {
    setCategory('');
  };

  return (
    <div className={classes.mainDiv}>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Badge
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            badgeContent={category === '' ? 0 :
              <Chip
                color='secondary'
                size='small'
                label={category}
                onDelete={handleDelete}>
              </Chip>}
          >
            <Paper component="form" className={classes.root} variant="outlined" elevation={3}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search Recipes"
                onChange={handleChange}
                value={input}
                inputProps={{ 'aria-label': 'search recipes' }}
              />
              {input === '' ? null :
                <IconButton className={classes.iconButton} aria-label="clear" onClick={handleClick}>
                  <ClearIcon />
                </IconButton>}
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton className={classes.iconButton} aria-label="add filter" onClick={handleClickOpen}>
                <PlaylistAddIcon />
              </IconButton>
              <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle className={classes.container}>Search Criteria</DialogTitle>
                <DialogContent>
                  <form className={classes.container}>
                    <Container>
                      <CategorySelect updateCategory={updateCategory} />
                      <DifficultySelect updateDifficulty={updateDifficulty} />
                    </Container>
                    <Container>
                      <SearchPreferences updatePreferences={updatePreferences}/>
                    </Container>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
            Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
            Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Badge>
        </Grid>
      </Grid>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <RightToolBar/>
          </Grid>
          <Grid item xs={6}>
            <CenterConsole
              searchBarCategory={category}
              searchBarDifficulty={Difficulty}
              searchBarPreferences={Preferences}
              searchBarInput={input}
            />
          </Grid>
          <Grid item xs={3}>
            <RightToolBar/>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
};

export default SearchBar;
