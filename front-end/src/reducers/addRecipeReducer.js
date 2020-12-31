const initialState = {
  recipe: null,
  currentIngredients: [],
  currentSteps: [],
}

export const addRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPE': {
      return {
        ...state,
        recipe: action.payload
      };
    }
    case 'SET_CURRENT_INGREDIENTS': {
      return {
        ...state,
        currentIngredients: action.payload
      }
    }
    case 'SET_CURRENT_STEPS': {
      return {
        ...state,
        currentSteps: action.payload
      }
    }
    default: {
      return state;
    }
  }
};