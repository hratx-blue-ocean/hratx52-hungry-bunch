import { createSelector } from 'reselect';

export const selectSomething = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.recipe
);

export const selectCurrentIngredients = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.currentIngredients
);

export const selectCurrentSteps = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.currentSteps
);

export const selectRecipeName = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.recipeName
);

export const selectCategory = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.category
);

export const selectShared = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.shared
);

export const selectTime = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.time
);

export const selectDifficulty = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.difficulty
);

export const selectVegan = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.vegan
);

export const selectModal = createSelector(
  state => state.addRecipes,
  addRecipes => addRecipes.modalOpen
);