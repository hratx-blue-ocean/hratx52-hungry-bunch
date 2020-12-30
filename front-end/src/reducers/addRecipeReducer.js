import setRecipe from '../actions/addRecipeActions';

const initialState = {
  recipe: null,
}

export const addRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPE': {
      return {
        ...state,
        recipe: action.recipe
      };
    }
    default: {
      return state;
    }
  }
};