import { LOGIN_SUCCESS } from '../actions/action';

const initialState = {
  user: null
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
  case LOGIN_SUCCESS: {
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