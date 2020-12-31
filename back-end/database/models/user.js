/* eslint-disable camelcase */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: String,
  name: String,
  picture: String,
  updated_at: String,
  email: String,
  email_verified: Boolean,
  sub: String
});

module.exports = mongoose.model('User', userSchema);