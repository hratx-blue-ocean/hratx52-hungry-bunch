import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import CenterConsole from '../../components/CenterConsole/CenterConsole.js';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    // alignItems: 'center',
    // paddingTop: '10px',
    // width: '400px',
    maxWidth: '500px',
  },
  mainDiv: {
    flexGrow: 1,
    // paddingTop: '10px',
    // paddingBottom: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    // height: 28,
    // margin: 4,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',
  },
}));

const CategoryBadge = withStyles((theme) => ({
  badge: {
    right: 325,
    top: 0,
  },
}))(Badge);

const DifficultyBadge = withStyles((theme) => ({
  badge: {
    right: 240,
    top: 0,
  },
}))(Badge);

const FavoritesBadge = withStyles((theme) => ({
  badge: {
    right: 160,
    top: 0,
  },
}))(Badge);

const VeganBadge = withStyles((theme) => ({
  badge: {
    right: 85,
    top: 0,
  },
}))(Badge);


const SearchBar = () => {

  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [Difficulty, setDifficulty] = useState('');
  const [FavoritesSearchBar, setFavoritesSearchBar] = useState(false);
  const [VeganSearchBar, setVeganSearchBar] = useState(false);
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

  const updateFavoriteSearchBar = (val) => {
    console.log(val);
    setFavoritesSearchBar(val);
  };

  const updateVeganSearchBar = (val) => {
    console.log(val);
    setVeganSearchBar(val);
  };

  const handleCategoryDelete = () => {
    setCategory('');
  };

  const handleDifficultyDelete = () => {
    setDifficulty('');
  };

  const handlePreferencesZeroDelete = () => {
    setFavoritesSearchBar(false);
  };

  const handlePreferencesOneDelete = () => {
    setVeganSearchBar(false);
  };

  return (
    <div className={classes.mainDiv}>
      <Grid container direction="column" >
        <Grid className="search-recipe-bar" xs={4}>
          <CategoryBadge
            // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            badgeContent={category === '' ? 0 :
              <Chip
                style={{backgroundColor: '#ffc107'}}
                color='secondary'
                size='small'
                label={category}
                onDelete={handleCategoryDelete}>
              </Chip>}
          >
            <DifficultyBadge
              // anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={Difficulty === '' ? 0 :
                <Chip
                  style={{backgroundColor: '#2196f3'}}
                  color='primary'
                  size='small'
                  label={Difficulty}
                  onDelete={handleDifficultyDelete}>
                </Chip>}
            >
              <FavoritesBadge
                // anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={FavoritesSearchBar === false ? 0 :
                  <Chip
                    style={{backgroundColor: 'pink'}}
                    color='default'
                    size='small'
                    label={'favorites'}
                    onDelete={handlePreferencesZeroDelete}>
                  </Chip>}
              >
                <VeganBadge
                  // anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  badgeContent={VeganSearchBar === false ? 0 :
                    <Chip
                      style={{backgroundColor: '#4CAF50'}}
                      size='small'
                      label={'vegan'}
                      onDelete={handlePreferencesOneDelete}>
                    </Chip>}
                >
                  <Paper onSubmit={(e)=> e.preventDefault()} component="form" className={classes.root} variant="outlined" elevation={3}>
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
                            <SearchPreferences updateFavoriteSearchBar={updateFavoriteSearchBar} updateVeganSearchBar={updateVeganSearchBar}/>
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
                </VeganBadge>
              </FavoritesBadge>
            </DifficultyBadge>
          </CategoryBadge>
        </Grid>

      </Grid>
      <br></br>
      <Container maxWidth={false} >
        <Grid >
          <Grid item xs={12}>
            <CenterConsole
              searchBarCategory={category}
              searchBarDifficulty={Difficulty}
              searchBarPreferences={[FavoritesSearchBar, VeganSearchBar]}
              searchBarInput={input}
            />
          </Grid>
        </Grid>
      </Container>
    </div>

  );
};

export default SearchBar;
