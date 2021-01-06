import makeActionCreator from '../utils/makeActionCreator';
import { createSelector } from 'reselect';

export const setUser = makeActionCreator('SET_USER', 'user');


const initialState = {
  user: null
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
  case 'SET_USER': {
    return {
      ...state,
      user: action.user
    };
  }
  default: {
    return state;
  }
  }
};

export const selectUser = createSelector(
  //This needs to map to whatever the key is in rootReducer.js
  state => state.users,
  //This needs to map to whatever is defined in this file
  users => users.user
);





