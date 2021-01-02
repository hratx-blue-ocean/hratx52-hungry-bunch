const chalk = require('chalk');
const Recipe = require('../database/models/recipe');
const UserCookBook = require('../database/models/recipe');
const User = require('../database/models/user');
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

/*
** userId (type: number) | single userId
** recipeIds (tpe: array) | array of numbers
*/
const UpdateUserCookBook = (({ userId, recipeIds }, callback) => {
  // User.up
});

/*
** userId (type: number) | single userId
** recipes (tpe: array) | array of recipe objects
*/
const AddRecipes = ({ userId, recipes }, callback) => {
  Recipe.insertMany(recipes, (err, docs) => {
    if (err) {
      log('Error at route: ' + chalk.redBright('AddRecipes'));
      callback(err);
    } else {
      UpdateUserCookBook({userId, recipeIds}, (err, result) => {
        if (err) {
          log('Error updating with UpdateUserCookBook method inside ' + chalk.redBright('AddRecipes'));
        } else {

        }
      });
    }
  });
};

const AddNewUser = ({ userId }, callback) => {

};

const UpdateUserPhoto = ({ userId }, callback) => {

};

module.exports = {
  GetUserCookBook,
  GetRecipes,
  AddRecipes,
  AddNewUser,
  UpdateUserPhoto,
  UpdateUserCookBook,
};
