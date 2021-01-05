import makeActionCreator from '../utils/makeActionCreator';

const setUser = makeActionCreator('SET_USER', 'user');

export default {
  setUser
};