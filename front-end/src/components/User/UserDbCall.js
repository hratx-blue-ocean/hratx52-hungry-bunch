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
    }

    componentDidMount() {
        let userId = window.location.pathname.split('/')[2];
        axios.get(`http://localhost:3000/userInfo/${userId}`)
            .then((userUrlInfoDb) => {
                this.setState({
                    urlUserId: userId,
                    urlUserInfo: userUrlInfoDb.data
                });
            })
            .catch((error) => { console.log('error in axios request in setFilterCategory: ', error); });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // let currentUrlId = window.location.pathname.split('/')[2]
        // if (prevState.urlUserId !== currentUrlId) {
        //   this.setState({urlUserId: currentUrlId})
        // }

    }

    render() {
        return (
            <>
                <TopToolbar nickname={this.state.urlUserInfo.name} picture={this.state.urlUserInfo.picture} />
                {console.log('MONICA', this.props)}
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