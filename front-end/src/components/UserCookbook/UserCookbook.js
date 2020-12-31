import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from 'react-router-dom';

import TopToolbar from './TopToolBar.js';
import { useAuth0 } from '@auth0/auth0-react';

import CategoryCarousel from './CategoryCarousel.js';
import { Container } from '@material-ui/core';


//This is Jonathan's component, will need to tweak for reusability later
import CenterConsole from '../CenterConsole/CenterConsole.js';
//import RecipeTiles from './RecipeTiles.js';

//wireframe: https://www.figma.com/file/C9TLcX8c0DNBW3xsYlv6kO/Untitled?node-id=60%3A2
/*
top toolbar
category carousel
recipe tiles
friend toolbar on left?
*/

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));


const UserCookbook = () => {

  const classes = useStyles();
  const { user } = useAuth0();

  if (user) {
    const { name, picture, email, nickname } = user;

    return (
      <>
        <TopToolbar nickname={nickname} picture={picture}/>
        <br></br>
        <Container maxWidth='sm'>
          <CategoryCarousel />
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <CenterConsole />
      </>
    );
  } else {
    return (<p>Eep! You shouldn't see this!</p>);
  }
};

export default UserCookbook;