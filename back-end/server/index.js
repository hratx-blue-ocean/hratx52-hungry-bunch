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

//ROUTES
//GET
// get user cookbook will send user cookbook object back to client with user info and recipes
app.get('/usercookbook/:userid', (req, res) => {
  // get user cookbook query
  // log('body.params', req.body.params);
  // log('req.params', req.params.userid);
  const userid = req.params.userid;
  // console.log('userId', userId);
  queries.GetUserCookBook({ userid }, (err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER COOKBOOK FROM DATABASE'));
    } else {
      const userCookBook = response;
      // get recipes query
      const {recipes} = response;
      queries.GetRecipes({ recipes }, (err, response) => {
        if (err) {
          res.send(500);
          log(chalk.bgRed('ERROR GETTING USER RECIPES FROM DATABASE'));
        } else {
          // format data to combine userCookBook and recipes data structures
          const recipes = response;
          res.status(200).send(userCookBook);
        }
      });
    }
  });
});

// get friends - query friends collection
app.get('/friends', (req, res) => {
  // get friends query
  queries.GetFriends((err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER FRIENDS FROM DATABASE'));
    } else {
      // send friends back to client
      res.status(200).send(response);
    }
  });
});
// getting user authentication info
app.get('/user', (req, res) => {
  // get user query
  queries.GetUser((err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed('ERROR GETTING USER FROM DATABASE'));
    } else {
      // send user back to client
      res.status(200).send(response);
    }
  });
});

//POST
// Add recipe to add recipe to recipes collection and add id to user cookbook array
app.post('/addrecipe', (req, res) => {
// add recipe query
  queries.AddNewRecipe((err, response)=> {
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
// add friend query
  queries.AddNewFriend((err, response) => {
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
// add user query
  queries.AddNewUser((err, response) => {
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
// add user photo query
  queries.UpdateUserPhoto((err, response) => {
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

// app.get('/recipes', (req, res) => {
//   Recipe.find((err, docs) => {
//     if (err) {
//       log(chalk.bgRed('ERROR FINDING RECIPES. SORRY BRO.'), err);
//       res.send(500);
//     } else {
//       log(chalk.cyan('WE FOUND THE RECIPES'));
//       log(chalk.cyanBright(docs));
//       res.send(docs);
//     }
//   });
// });

// app.post('/recipes', (req, res) => {
//   console.log(Recipes[0]);
//   Recipe.create(Recipes[0], (err, doc) => {
//     if (err) {
//       log(chalk.bgRed('ERROR ADDING RECIPES. SORRY BRO.'), err);
//       res.send(500);
//     } else {
//       log(chalk.magentaBright('WE ADDED THE RECIPES'));
//       log(chalk.cyan(doc));
//       res.send(doc);
//     }
//   });
// });

app.listen(port, () => {
  log(chalk.magenta('HUNGRY BACK-END app listening at ') + chalk.bold.greenBright(`http://localhost:${port}`));
});