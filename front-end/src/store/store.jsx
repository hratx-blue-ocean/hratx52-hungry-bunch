import { configureStore } from '@reduxjs/toolkit';
import rootReducer  from '../reducers/main.js';

export default configureStore({
  // *use it here*
  reducer: rootReducer
});