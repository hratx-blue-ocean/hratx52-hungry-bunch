
const initialState = {userData: {}};


export default getUserReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'DATA_LOADED': {
    return {
      ...state,
      userData: action.payload
    };
  } default: {
    return state;
  }
  }
};