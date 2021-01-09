import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddRecipe } from '../AddRecipe/addRecipe.js';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Grid, Container, Paper, InputBase, IconButton, Typography, Modal } from '@material-ui/core';
import {connect, useSelector, useDispatch } from 'react-redux';
import { selectModal } from '../../containers/addRecipeContainer.js';
import { uploadAvatar, getUserData } from '../../utils/apiCalls.js';
import { selectUser } from '../../containers/addUserContainer.js';
import axios from 'axios';
import { receiveLogin } from '../../actions/action';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function UserInfoToolbar() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  const [isVisible, toggleVisibility] = useState(false);
  const [file, handleFile] = useState(null);
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

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('userId', user['_id']);
    var uploadedAvatar = await uploadAvatar(formData);
    var updatedUser = await getUserData(user['_id']);
    dispatch(receiveLogin(updatedUser.data));
  };

  if (user) {
    const { name, picture, email, _id } = user;
    // change to userID
    const userLink = `/user/${_id}`;
    return (
      <Container>
        <Grid>
          <Link to={userLink}>
            <Avatar alt={name} src={picture} className={classes.large}/>
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
              <input
                type="file"
                onChange={e => {
                  e.preventDefault();
                  handleFile(e.target.files[0]);
                }}></input>


              <Button
                onClick={(e)=>{
                  // e.preventDefault();
                  handleUpload();
                  toggleVisibility(!isVisible);
                }}
              >
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