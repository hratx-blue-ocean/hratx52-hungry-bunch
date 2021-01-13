import React from 'react';
import axios from 'axios';
import { Grid, Container } from '@material-ui/core';
import TopToolbar from './TopToolBar.js';
import SetFilterCategory from './SetFilterCategory.js';
import { default as FriendToolbar } from '../RightToolBar/RightToolBar.js';
import RightToolBar from '../RightToolBar/RightToolBar.js';
import MainPageFooter from '../MainPage/MainPageFooter';
import { AddFriend } from '../AddFriend/addFriend.js';

class UserDbCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlUserInfo: {},
      urlUserId: '5ff4903962127775787d7d8f',
      loading: true
    };
    this.dbCallUserInfo = this.dbCallUserInfo.bind(this);
  }

  dbCallUserInfo (aUserId) {
    axios.get(`http://localhost:3000/userInfo/${aUserId}`)
      .then((userUrlInfoDb) => {
        this.setState({
          urlUserId: aUserId,
          urlUserInfo: userUrlInfoDb.data,
          loading: false
        });
      })
      .catch((error) => { console.log('Axios ERROR in setFilterCategory: ', error); });
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
    if (this.state.loading === false) {
      return (
        <>
          <TopToolbar nickname={this.state.urlUserInfo.name} picture={this.state.urlUserInfo.picture} />
          <div>
            <Grid container>
              <Grid item xs={3}>
                <div className="user-friends-list">
                  <RightToolBar friends={this.state.urlUserInfo.friends}/>
                </div>
              </Grid>
              <Grid item xs={7}>
                <SetFilterCategory userId={this.state.urlUserId} userInfo={this.state.urlUserInfo} />
              </Grid>
              <Grid item xs ={2} >
                <div className="add-remove-profile-grid">
                  <AddFriend/>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <MainPageFooter/>
          </div>
        </>);
    } else {
      return (<></>);
    }
  }
}

export default UserDbCalls;