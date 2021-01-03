const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeID: Number,
  ownerId: Number,
  recipeName: String,
  category: [String],
  shared: String,
  ingredients: [String],
  time: Number,
  difficulty: String,
  favoritedBy: [Number],
  vegan: Boolean,
  steps: [String],
  imageUrl: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
