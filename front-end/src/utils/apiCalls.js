import axios from 'axios';

export const postNewRecipe = (recipe, userId) => {
  axios.post('http://localhost:3000/addRecipe', {
    id: userId,
    recipe: recipe
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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