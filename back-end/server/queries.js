const chalk = require('chalk');
const Recipe = require('../database/models/recipe');
const UserCookBook = require('../database/models/userCookBook');
const User = require('../database/models/user');
const FriendsList = require('../database/models/friendsList');
const log = console.log;

/*
** userId (type: number) | single userId
*/
const GetUserCookBook = ({ userId }, callback) => {
  UserCookBook.find({userId: userId}, (err, doc) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('GetUserCookBook'));
      callback(err);
    } else {
      callback(null, doc);
    }
  });
};

/*
** recipes (type: array) | array of numbers
*/
const GetRecipes = ({ recipes }, callback) => {
  Recipe.find({ recipeId: { $in: recipes }}, (err, docs) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('GetRecipes'));
      callback(err);
    } else {
      callback(null, docs);
    }
  });
};

const GetFriends = ({ userId }, callback) => {
  FriendsList.find({userId: userId}, (err, freinds) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('GetFriends'));
      callback(err);
    } else {
      callback(null, friends);
    }
  });
};

const GetUser = ({userId}, callback) => {
  User.find({userId: userId}, (err, user) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('GetUser'));
      callback(err);
    } else {
      callback(null, user);
    }
  });
};

/*
** userId (type: number) | single userId
** recipeId (tpe: number) | single recipeId
*/
const UpdateUserCookBook = ({ userId, recipeId }, callback) => {
  User.update({userId: userId}, { $push: {recipes: recipeId}}, (err, result) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('UpdateUserCookBook'));
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

/*
** userId (type: number) | single userId
** recipe (tpe: number) | single recipeId
*/
const AddNewRecipe = ({ userId, recipe }, callback) => {
  Recipe.insertOne(recipe, (err, doc) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('AddRecipe'));
      callback(err);
    } else {
      const { recipeId } = doc;
      UpdateUserCookBook({userId, recipeId}, (err, result) => {
        if (err) {
          log('Error updating with UpdateUserCookBook method inside ' + chalk.redBright('AddRecipes'));
        } else {
          log(chalk.green('Success Updating recipe array for userId: ' + chalk.magentaBright(userId)));
        }
      });
      callback(null, doc);
    }
  });
};

const AddNewUser = ({ userId }, callback) => {
  // 1. add user to User collection
  // 2. make a userCookBook for that user
  // 3. make a friends list for the user
};

const AddNewFriend = ({userId, friend}, callback) => {
  FriendsList.update({userId: userId}, { $push: {friends: friend}}, (err, result) => {
    if (err) {
      log('Error in ' + chalk.redBright('AddNewFriend'));
      callback(err);
    } else {
      log(chalk.green('Success adding new friend'));
      callback(null, result);
    }
  });
};

const UpdateUserPhoto = ({ userId, photoUrl }, callback) => {

};

const formatData = (UserCookBook, newRecipes) => {
  UserCookBook.recipes = newRecipes;
  return UserCookBook;
};

const DeleteRecipeById = ({recipeId}, callback) => {

  Recipe.deleteMany({recipeId: recipeId}, (err, result) => {
    if (err) {
      log('err deleting recipe with id: ' + recipeId);
      callback(err);
    } else {
      log('success deleting recipes');
      callback(null, result);
    }
  });
};

module.exports = {
  GetUserCookBook,
  GetRecipes,
  GetFriends,
  AddNewRecipe,
  AddNewUser,
  AddNewFriend,
  UpdateUserPhoto,
  UpdateUserCookBook,
  formatData,
  DeleteRecipeById,
};