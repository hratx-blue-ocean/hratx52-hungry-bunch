import { combineReducers } from 'redux';
import { userReducer } from './user.js';
import { addRecipeReducer } from './addRecipeReducer'
// import reducer functions

// when rootReducer is called, redcuers are invoked to build new state object

var rootReducer = combineReducers({
  // insert reducer functions
  users: userReducer,
  addRecipes: addRecipeReducer
});


export default rootReducer;