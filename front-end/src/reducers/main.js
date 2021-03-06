import { combineReducers } from 'redux';
import { userReducer } from './user.js';
import { addRecipeReducer } from './addRecipeReducer';
// import reducer functions

// when rootReducer is called, redcuers are invoked to build new state object

/*
combineReducers is a helper function which turns an object (whose values are different reducing functions) into a single reducing function you can pass to configureStore
*/
var rootReducer = combineReducers({
  // insert reducer functions
  userReducer,
  addRecipes: addRecipeReducer
});


export default rootReducer;