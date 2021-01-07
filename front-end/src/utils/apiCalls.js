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

/*
const onImageGetScores = (e) => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "image",
      images[0].file,
      selectedItem
    );
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:5000/drawings/PostImage", formData)
    .then(function (response) {
      // handle success
      setScore(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
*/

export const addFriend = (user, friend) => {

};