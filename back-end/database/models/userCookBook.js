const mongoose = require('mongoose');

const userCookBookSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  favoriteRecipes: [Number],
  recipes: [Number],
});

module.exports = mongoose.model('UserCookBook', userCookBookSchema);