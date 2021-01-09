const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  name: String,
  picture: String,
  updated_at: String,
  email: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe'}],
  favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe'}],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  sub: String
});

const recipeSchema = new mongoose.Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  recipeName: String,
  category: String,
  shared: String,
  ingredients: [String],
  time: Number,
  difficulty: String,
  favoritedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
  vegan: Boolean,
  steps: [String],
  imageUrl: String
});

module.exports = {
  Recipe: mongoose.model('Recipe', recipeSchema),
  User: mongoose.model('User', userSchema),
};
