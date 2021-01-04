import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { AddRecipe } from '../AddRecipe/addRecipe.js';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import { Grid, Container, Paper, InputBase, IconButton, Typography, Modal } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from '../../containers/addRecipeContainer.js';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function LeftToolbarLanding() {
  const classes = useStyles();
  const { user } = useAuth0();
  const modalState = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({type: 'SET_MODAL', payload: true});
  };

  const handleClose = () => {
    dispatch({type: 'SET_MODAL', payload: false});
  };

  if (user) {
    const { name, picture, email, nickname } = user;
    return (
      <Container>
        <Grid>
          <a href='/user'>
            <img src={picture}></img>
          </a>
        </Grid>
        <Grid>
          <a href='/user'>
            <Typography>
              {name}
            </Typography>
          </a>
        </Grid>
        <Grid>
          <Button onClick={()=>alert('popup modal with picture upload')}>
                add picture
          </Button>
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
// TODO: connect recipe form at "add recipe" button