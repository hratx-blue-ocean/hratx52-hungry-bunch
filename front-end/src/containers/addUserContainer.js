import { createSelector } from 'reselect';

export const selectUser = createSelector(
  state => state.userReducer,
  userReducer => userReducer.user
);