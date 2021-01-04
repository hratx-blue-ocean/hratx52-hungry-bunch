import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function LeftToolbarLanding() {
  const classes = useStyles();
  const { user } = useAuth0();

  if (user) {
    const { name, picture, email, nickname } = user;
    return (
      <div>
        <img src={picture} />
        <Button>
          add picture
        </Button>
        <div>
          {nickname}
        </div>
        <Button>
      add recipe
        </Button>
      </div>
    );
  } else {
    return null;
  }
}