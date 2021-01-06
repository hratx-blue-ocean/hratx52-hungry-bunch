const initialState = {
  recipe: null,
  currentIngredients: [],
  currentSteps: [],
  recipeName: '',
  category: 'Breakfast',
  shared: 'Everyone',
  time: 30,
  difficulty: 'Medium',
  vegan: false,
  imageUrl: '',
  modalOpen: false,
};

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
      currentIngredients: [...state.currentIngredients, action.payload]
    };
  }
  case 'SET_CURRENT_STEPS': {
    return {
      ...state,
      currentSteps: [...state.currentSteps, action.payload]
    };
  }
  case 'SET_RECIPE_NAME': {
    return {
      ...state,
      recipeName: action.payload
    };
  }
  case 'SET_CATEGORY': {
    return {
      ...state,
      category: action.payload
    };
  }
  case 'SET_SHARED': {
    return {
      ...state,
      shared: action.payload
    };
  }
  case 'SET_TIME': {
    return {
      ...state,
      time: action.payload
    };
  }
  case 'SET_DIFFICULTY': {
    return {
      ...state,
      difficulty: action.payload
    };
  }
  case 'SET_VEGAN': {
    return {
      ...state,
      vegan: action.payload
    };
  }
  case 'SET_MODAL': {
    return {
      ...state,
      modalOpen: action.payload
    };
  }
  case 'SET_NEW_RECIPE_DEFAULT': {
    return {
      ...state,
      recipe: null,
      currentIngredients: [],
      currentSteps: [],
      recipeName: '',
      category: 'Breakfast',
      shared: 'Everyone',
      time: 30,
      difficulty: 'Medium',
      vegan: false,
      imageUrl: '',
      modalOpen: false,
    };
  }
  default: {
    return state;
  }
  }
};