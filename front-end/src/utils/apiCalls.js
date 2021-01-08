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

export const uploadAvatar = (formData) => {

  axios.post('http://localhost:3000/uploadAvatar', formData)
    .then(res => {
      console.log('avatar uploaded at: ', res);
    })
    .catch(err => {
      console.log('avatar could not be uploaded :^( : ', err);
    });
};

export const addFriend = (user, friend) => {

};