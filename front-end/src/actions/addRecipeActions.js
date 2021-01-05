import makeActionCreator from '../utils/makeActionCreator';

const setRecipe = makeActionCreator('SET_RECIPE', 'recipe');
const setCurrentIngredients = makeActionCreator('SET_CURRENT_INGREDIENTS', 'ingredients');
const setCurrentStep = makeActionCreator('SET_CURRENT_STEPS', 'steps');

export default {
  setRecipe,
  setCurrentIngredients,
  setCurrentStep
};