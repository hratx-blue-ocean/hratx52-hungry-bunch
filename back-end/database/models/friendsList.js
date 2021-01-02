const mongoose = require('mongoose');

const friendsListSchema = new mongoose.Schema({
  nickname: String,
  name: String,
  picture: String,
});

module.exports = mongoose.model('FriendsList', friendsListSchema);