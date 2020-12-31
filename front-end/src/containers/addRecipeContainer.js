import { createSelector } from 'reselect';

export const selectSomething = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.recipe
)

export const selectCurrentIngredients = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.currentIngredients
)

export const selectCurrentSteps = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.currentSteps
)