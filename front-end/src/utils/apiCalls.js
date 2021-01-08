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

export const addFriend = (userId, friendId) => {
  return axios.post('http://localhost:3000/addFriend', {
    id: userId,
    friendId: friendId
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};