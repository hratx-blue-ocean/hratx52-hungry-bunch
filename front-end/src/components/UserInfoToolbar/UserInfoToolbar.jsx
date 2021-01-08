import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddRecipe } from '../AddRecipe/addRecipe.js';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Grid, Container, Paper, InputBase, IconButton, Typography, Modal } from '@material-ui/core';
import {connect, useSelector, useDispatch } from 'react-redux';
import { selectModal } from '../../containers/addRecipeContainer.js';
import { selectUser } from '../../containers/addUserContainer.js';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function UserInfoToolbar() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  const [isVisible, toggleVisibility] = useState(false);
  const modalState = useSelector(selectModal);
  const dispatch = useDispatch();

  const clearRecipe = () => {
    dispatch({type: 'SET_NEW_RECIPE_DEFAULT'});
  };

  const handleOpen = () => {
    dispatch({type: 'SET_MODAL', payload: true});
  };

  const handleClose = () => {
    dispatch({type: 'SET_MODAL', payload: false});
    clearRecipe();
  };
  // app, recipe page, user
  if (user) {
    const { name, picture, email, _id } = user;
    // change to userID
    const userLink = `/user/${_id}`;
    return (
      <Container>
        <Grid>
          <Link to={userLink}>
            <img src={picture}></img>
          </Link>
        </Grid>
        <Grid>
          <Link to={userLink}>
            <Typography>
              {name}
            </Typography>
          </Link>
        </Grid>
        <Grid>
          <Button onClick={(e) => {
            e.preventDefault();
            toggleVisibility(!isVisible);
          }}>
            change avatar
          </Button>
          {isVisible ?
            <div>
              <input type="file"></input>
              <Button onClick={(e)=>{
                e.preventDefault();
                alert('avatar updated!');
                toggleVisibility(!isVisible);
              }}>
                upload
              </Button>
            </div>
            : null}
        </Grid>
        <Grid>
          <Button onClick={handleOpen}>
              add recipe
          </Button>
          <Modal
            open={modalState}
            onClose={handleClose}
          >
            <div style={{width: '650px', backgroundColor: 'white', margin: '0 auto'}}>
              <AddRecipe></AddRecipe>
            </div>
          </Modal>
        </Grid>
      </Container>
    );
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    user: selectUserId(state)
  };
}

export const connection = connect(mapStateToProps)(UserInfoToolbar);