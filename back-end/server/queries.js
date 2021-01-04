const chalk = require('chalk');
const { Friend, Recipe, User } = require('../database/models/models');
const mongoose = require('mongoose');
const log = console.log;

const GetUser = ({ id }, callback) => {
  console.log(id);
  User.findById(id, (err, doc) => {
    if (err) { callback(err); }

    doc.
      populate('recipes').
      populate('friends').
      populate('favoriteRecipes').
      execPopulate((err, user) => {
        if (err) { callback(err); }
        log(chalk.green('success getting user'));
        log(user);
        callback(null, user);
      });
  });
};
/*
** userId (type: number) | single userId
** recipe (tpe: number) | single recipeId
*/
const AddNewRecipe = ({ id, recipe }, callback) => {

  const { recipeName, category, shared, ingredients, time, difficulty, vegan, steps, imageUrl } = recipe;

  const newRecipe = new Recipe({
    owner: id,
    recipeName: recipeName,
    category: category,
    shared: shared,
    ingredients: ingredients,
    time: time,
    difficulty: difficulty,
    favoritedBy: [],
    vegan: vegan,
    steps: steps,
    imageUrl: imageUrl
  });

  newRecipe.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      User.findByIdAndUpdate(id, { $push: { recipes: result._id }}, (err, addedRecipe) => {
        if (err) { callback(err); }
        callback(null, addedRecipe);
      });
    }
  });
};

const AddNewUser = ({userInfo}, callback) => {
  const { username, name, picture, updated_at, email } = userInfo;
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    name: name,
    picture: picture,
    updated_at: updated_at,
    email: email
  });

  user.save((err, newUser) => {
    if (err) { callback(err); }
    callback(null, newUser);
  });
};

const AddNewFriend = ({id, friendId}, callback) => {
  User.findByIdAndUpdate(id, { $push: { friends: friendId }}, (err, newFriend) => {
    if (err) { callback(err); }
    callback(null, newFriend);
  });
};

const AddNewFavoriteRecipe = ({id, recipeId}, callback) => {
  User.findByIdAndUpdate(id, { $push: { favoriteRecipes: recipeId }}, (err, newFavorite) => {
    if (err) { callback(err); }
    callback(null, newFavorite);
  });
};

const UpdateUserPhoto = ({ id, photoUrl }, callback) => {
  User.findByIdAndUpdate(id, { $set: { picture: photoUrl }}, (err, result) => {
    if (err) {
      log('Error in ' + chalk.redBright('UpdateUserPhoto'));
      callback(err);
    } else {
      log(chalk.green('Success adding updating user photo'));
      callback(null, result);
    }
  });
};

module.exports = {
  GetUser,
  AddNewRecipe,
  AddNewUser,
  AddNewFriend,
  UpdateUserPhoto,
  AddNewFavoriteRecipe,
};
