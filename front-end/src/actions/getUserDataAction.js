import axios from 'axios';

export default getUserData = makeActionCreator('DATA_LOADED', 'userdata');


export function getData() {
  return function(dispatch) {
    return axios.get('http://localhost:3000/userInfo/:id')
      .then((response) => {
        dispatch({ type: 'DATA_LOADED', payload: response.data });
      });
  };
}