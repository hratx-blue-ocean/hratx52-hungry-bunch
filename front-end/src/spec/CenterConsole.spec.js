import React from 'react';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import CenterConsole from '../components/CenterConsole/CenterConsole.js';

configure({ adapter: new Adapter() });

describe('Cookbook component', () => {

  it('should render', () => {
    const wrapper = shallow(<CenterConsole />);
  });


});






