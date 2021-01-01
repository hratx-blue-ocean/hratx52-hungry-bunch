import React from 'react';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/*
provides a React renderer that can be used to render React components to pure JavaScript objects,
without depending on the DOM or a native mobile environment
*/
import renderer from 'react-test-renderer';


import UserCookbook from '../components/UserCookbook/UserCookbook.js';
//var UserCookbook = require('../components/UserCookbook/UserCookbook');

import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

/********************************************/
import * as reducer from '../reducers/user.js';




describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.userReducer(undefined, {})).toEqual(
      {
        user: null
      }
    );
  });

  it('should render my component', () => {
    const wrapper = shallow(<UserCookbook />);
  });


});






