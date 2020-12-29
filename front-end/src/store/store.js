import { configureStore } from '@reduxjs/toolkit';
import rootReducer  from '../reducers/main.js';

/*
https://redux-toolkit.js.org/api/configureStore
configureStore - a friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience.


an object with a few methods on it that holds the whole state tree of your application
•	to create it, pass your root reducing function to createStore
•	only way to change the state inside of it is to dispatch an action on it


*/
export default configureStore({
  // *use it here*
  reducer: rootReducer
});