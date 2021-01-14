const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  };
};

module.exports = {
  LOGIN_SUCCESS,
  receiveLogin,
};