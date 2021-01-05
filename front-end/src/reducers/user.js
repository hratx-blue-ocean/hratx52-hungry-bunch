import makeActionCreator from '../utils/makeActionCreator';
import { createSelector } from 'reselect';

const url = 'http://localhost:3000';

export const setUser = makeActionCreator('SET_USER', 'user');

const initialState = {
  user: {
    _id: null,
    username: null,
    name: null,
    picture: null,
    updated_at: null,
    email: null,
    recipes: [],
    favoriteRecipes: [],
    friends: [],
    sub: null
  }
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


//API call to Add user
export const postUser = (Auth0User) => {
  return async (dispatch, getState) => {
    fetch(url + '/checkUser', {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // },
      body: JSON.stringify(Auth0User)
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          console.log('user data', data);
          const newUser = {
            _id: data._id,
            username: data.username,
            name: data.name,
            picture: data.picture,
            updated_at: data.updated_at,
            email: data.email,
            recipes: data.recipes,
            favoriteRecipes: data.favoriteRecipes,
            friends: data.friends,
            sub: data.sub,
          };
          debugger;
          dispatch(setUser(newUser));
        })
      .catch((error) => {
        console.log('error cannot post user data: ', error);
      });
  };
};





