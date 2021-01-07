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

export const uploadAvatar = (image) => {
  let formData = new FormData();
  formData.append('file', image);
  let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  axios.post('http://localhost:3000/uploadAvatar', formData, config)
    .then(res => {
      console.log('avatar uploaded!: ', res);
      //TODO: take created url from result and send a POST to '/addUserPhoto with userId and imageurl)
    })
    .catch(err => {
      console.log('avatar could not be uploaded :^( : ', err);
    });
};

export const addFriend = (user, friend) => {

};