import React, {useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import TopToolbar from './TopToolBar.js';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';
import LeftToolbarSearch from './LeftToolbarSearch.js';
import SetFilterCategory from './SetFilterCategory.js';

//wireframe: https://www.figma.com/file/C9TLcX8c0DNBW3xsYlv6kO/Untitled?node-id=60%3A2

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));


const User = () => {

  const classes = useStyles();
  const { user } = useAuth0();
  const [currCategory, setCurrCategory] = useState('');

  if (user) {
    const { name, picture, email, nickname } = user;

    return (
      <>
        <TopToolbar nickname={nickname} picture={picture}/>
        <br></br>
        <div>
          <Container>
            <Grid container>
              <Grid item xs={3}>
                <LeftToolbarSearch />
              </Grid>
              <Grid item xs={9}>
                <SetFilterCategory/>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  } else {
    return (<></>);
  }
};

export default User;