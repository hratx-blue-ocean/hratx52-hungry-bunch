import React from 'react';

import { Grid, Container } from '@material-ui/core';

import TopToolbar from './TopToolBar.js';
import SetFilterCategory from './SetFilterCategory.js';
import { default as LeftToolbar } from '../RightToolBar/RightToolBar.js';

import axios from 'axios';

class UserBbCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlUserInfo: {},
      urlUserId: '5ff4903962127775787d7d8f'
    };
    this.dbCallUserInfo = this.dbCallUserInfo.bind(this);
  }

  dbCallUserInfo (userId) {
    axios.get(`http://localhost:3000/userInfo/${userId}`)
      .then((userUrlInfoDb) => {
        this.setState({
          urlUserId: userId,
          urlUserInfo: userUrlInfoDb.data
        });
      })
      .catch((error) => { console.log('error in axios request in setFilterCategory: ', error); });
  }

  componentDidMount() {
    let userId = this.props.location;
    this.dbCallUserInfo(userId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location !== this.props.location) {
      this.dbCallUserInfo(this.props.location);
    }
  }

  render() {
    return (
      <>
        <TopToolbar nickname={this.state.urlUserInfo.name} picture={this.state.urlUserInfo.picture} />
        <br></br>
        <div>
          <Container>
            <Grid container>
              <Grid item xs={3}>
                {/*THIS IS THE FRIENDLIST*/}
                <LeftToolbar />
              </Grid>
              <Grid item xs={9}>
                <SetFilterCategory userId={this.state.urlUserId} userInfo={this.state.urlUserInfo} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </>);
  }
}

export default UserBbCalls;