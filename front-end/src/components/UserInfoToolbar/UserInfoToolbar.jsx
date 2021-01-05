import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { AddRecipe } from '../AddRecipe/addRecipe.js';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Grid, Container, Paper, InputBase, IconButton, Typography, Modal } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from '../../containers/addRecipeContainer.js';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function UserInfoToolbar() {
  const classes = useStyles();
  const { user } = useAuth0();
  const [isVisible, toggleVisibility] = useState(false);
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
          <Link to='/user'>
            <img src={picture}></img>
          </Link>
        </Grid>
        <Grid>
          <Link to='/user'>
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