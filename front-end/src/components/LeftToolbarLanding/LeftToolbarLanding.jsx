import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import { Grid, Container, Paper, InputBase, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function LeftToolbarLanding() {
  const classes = useStyles();
  const { user } = useAuth0();
  const [uploadVisibility, handleUploadVisibility] = useState(false);

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
          <Button onClick={()=>{ handleUploadVisibility(uploadVisibility = !uploadVisibility); }}>
            change avatar
          </Button>
          {uploadVisibility ? <input type="file"></input> : null}
        </Grid>
        <Grid>
          <Button>
              add recipe
          </Button>
        </Grid>
      </Container>
    );
  } else {
    return null;
  }
}