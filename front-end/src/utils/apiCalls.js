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

// uploads avatar to S3 bucket and receives a url back
export const uploadAvatar = (formData) => {
  axios.post('http://localhost:3000/uploadAvatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      //handle error
      console.log(err);
    });
};

export const searchForFriends = (userSearchTerm) => {
  return axios.get(`http://localhost:3000/friends/${userSearchTerm}`)
    .then((res) => {
      return res;
    })
    .catch((err) =>{
      return err;
    });
};

export const addFriend = (user, friend) => {

};