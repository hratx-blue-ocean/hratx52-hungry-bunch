const express = require('express');
const mongoose = require('mongoose');
const DB = require('../database/index');
const chalk = require('chalk');
const { Recipes } = require('../database/data');
const Recipe = require('../database/models/recipe');
const log = console.log;
const queries = require('./queries');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  log(chalk.magenta('hey from the server'));
  res.send(200);
});

// ROUTES

// --------------------- GET  ---------------------------------------------------------------------------------------------
// get user cookbook will send user cookbook object back to client with user info and recipes
app.get('/usercookbook/:userId', (req, res) => {

  const { userId } = req.params;

  queries.GetUserCookBook({ userId }, (err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER COOKBOOK FROM DATABASE'));
    } else {
      const userCookBook = response;
      // get recipes query
      const {recipesIds} = response;
      queries.GetRecipes({ recipesIds }, (err, recipes) => {
        if (err) {
          res.send(500);
          log(chalk.bgRed('ERROR GETTING USER RECIPES FROM DATABASE'));
        } else {
          // format data to combine userCookBook and recipes data structures
          userCookBook.recipes = recipes;
          res.status(200).send(userCookBook);
        }
      });
    }
  });
});

// get friends - query friends collection
app.get('/friends/:userId', (req, res) => {

  const { userId } = req.params;

  // get friends query
  queries.GetFriends({ userId }, (err, friends) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER FRIENDS FROM DATABASE'));
    } else {
      // send friends back to client
      res.status(200).send(friends);
    }
  });
});

// getting user authentication info
app.get('/user/:userId', (req, res) => {

  const { userId } = req.params;

  // get user query
  queries.GetUser({ userId }, (err, user) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER FROM DATABASE'));
    } else {
      // send user back to client
      res.status(200).send(user);
    }
  });
});

// -------------- POST ---------------------------------------------------------------------------------------------
// Add recipe to add recipe to recipes collection and add id to user cookbook array
app.post('/addrecipe', (req, res) => {

  const { userId, recipe } = req.body;

  // add recipe query
  queries.AddNewRecipe({ userId, recipe }, (err, response)=> {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR ADDING NEW RECIPE TO DATABASE'));
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('RECIPE ADDED SUCCESFULLY'));
    }
  });
});

// add friend - add to friends array in friends collection
app.post('/addfriend', (req, res) => {

  const { userId, friend } = req.body;

  // add friend query
  queries.AddNewFriend({ userId, friend }, (err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR ADDING NEW FRIEND TO DATABASE'));
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('NEW FRIEND ADDED SUCCESFULLY'));
    }
  });
});

// add user, adds new user to users collection (default avatar if no photo)
app.post('/adduser', (req, res) => {

  const { user } = req.body;

  // add user query
  queries.AddNewUser({user}, (err, response) => {
    if (err) {
      res.status(500).send('there was an error adding a new user');
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('NEW USER ADDED SUCCESFULLY'));
    }
  });
});

// update user photo, takes photo field if has changed and updates field in users collection
app.post('/adduserphoto', (req, res) => {

  const { userId, photoUrl } = req.body;

  // add user photo query
  queries.UpdateUserPhoto({ userId, photoUrl }, (err, response) => {
    if (err) {
      res.send(500);
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('NEW USER PHOTO ADDED SUCCESFULLY'));
    }
  });
});

app.post('/deleterecipes/:recipeId', (req, res) => {

  const { recipeId } = req.params.recipeId;

  queries.DeleteRecipeById({ recipeId }, (err, response) => {
    if (err) {
      res.send(500);
    } else {
      res.send('success deleting recipes');
    }
  });
});

app.listen(port, () => {
  log(chalk.magenta('HUNGRY BACK-END app listening at ') + chalk.bold.greenBright(`http://localhost:${port}`));
});