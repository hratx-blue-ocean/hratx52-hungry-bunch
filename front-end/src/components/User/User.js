import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import TopToolbar from './TopToolBar.js';
import SetFilterCategory from './SetFilterCategory.js';
import CategoryCarousel from './CategoryCarousel.js';
import CenterConsole from '../CenterConsole/CenterConsole.js';
import { default as LeftToolbar } from '../RightToolBar/RightToolBar.js';

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

  //React router to grab pathname
  const location = useLocation();
  const history = useHistory();

  if (user) {
    const { name, picture, email, nickname } = user;

    /*can either use: location.pathname OR history.location.pathname*/
    let userId = location.pathname.split('/')[2];

    return (
      <>
        <TopToolbar nickname={nickname} picture={picture}/>
        <br></br>
        <div>
          <Container>
            <Grid container>
              <Grid item xs={3}>
                <LeftToolbar/>
              </Grid>
              <Grid item xs={9}>
                <SetFilterCategory userId={userId}/>
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