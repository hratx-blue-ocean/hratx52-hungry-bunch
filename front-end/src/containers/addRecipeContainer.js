import { createSelector } from 'reselect';

export const selectSomething = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.recipe
)