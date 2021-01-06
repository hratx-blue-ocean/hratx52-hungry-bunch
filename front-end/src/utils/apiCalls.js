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
  axios.post('http://localhost:3000/uploadAvatar', image)
    .then(res => {
      console.log('avatar uploaded!: ', res);
    })
    .catch(err => {
      console.log('avatar could not be uploaded :^( : ', err);
    });
};