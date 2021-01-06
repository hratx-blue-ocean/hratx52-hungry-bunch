import React from 'react';
import { Grid, Container, Paper, InputBase, IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';

const RightToolBar = () => {

  return (
    <Container>
      <Grid container >
        <Grid item sm={5}>
          <GroupIcon fontSize='large'/>
        </Grid>
        <Grid item>
          <Paper component='form'>
            <InputBase
              placeholder='search for friends'
            />
            <IconButton onClick={()=>alert('yo')}>
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RightToolBar;