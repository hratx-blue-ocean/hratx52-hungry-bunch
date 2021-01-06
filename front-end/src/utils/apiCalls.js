import axios from 'axios';

export const postNewRecipe = (recipe, userId) => {
  return axios.post('http://localhost:3000/addRecipe', {
    id: userId,
    recipe: recipe
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
