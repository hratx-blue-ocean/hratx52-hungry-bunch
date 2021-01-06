const express = require('express');
const mongoose = require('mongoose');
const DB = require('../database/index');
const chalk = require('chalk');
const { Recipes } = require('../database/data');
const log = console.log;
const queries = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

const { User } = require('../database/data');

const app = express();
const port = 3000;

app.use(bodyParser.json()).use(cors());

app.get('/', (req, res) => {
  log(chalk.magenta('hey from the server'));
  res.send(200);
});

// ROUTES

// --------------------- GET  ---------------------------------------------------------------------------------------------
// get user info will send user object back to client with user info and user recipes
app.get('/userInfo/:id', (req, res) => {

  log(chalk.cyan(req.params.id));
  const { id } = req.params;
  // get User query - query user collection
  queries.GetUser({ id }, (err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed(err, 'ERROR GETTING USER COOKBOOK FROM DATABASE'));
    } else {
      res.status(200).send(response);
    }
  });
});

app.get('/friends/:name', (req, res) => {
  log(chalk.cyan(req.params.name));
  const { name } = req.params;
  // get Friends query - fuzzy search for friends
  queries.GetFriends({ name }, (err, response) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed(err, 'ERROR GETTING FRIENDS FROM DATABASE'));
    } else {
      res.status(200).send(response);
    }
  });
});

// -------------- POST ---------------------------------------------------------------------------------------------

app.post('/checkUser', (req, res) => {

  const userInfo = req.body;
  let check = userInfo.sub.split('|')[1];

  queries.CheckUser({ check }, (err, result) => {
    if (err) {
      res.send(500);
      log(chalk.bgRed(err, 'err'));
    } else {
      if (result === null) {
        // USER DOES NOT EXIST - CREATE ONE
        queries.AddNewUser({ userInfo }, (err, response) => {
          if (err) {
            res.status(500).send('there was an error adding a new user');
          } else {
            // send status success back to client
            console.log(response);
            res.send(response);
            log(chalk.magentaBright('NEW USER ADDED SUCCESFULLY'));
          }
        });
      } else {
        console.log(chalk.yellow(result));
        res.status(200).send(result);
      }
    }
  });
});

// Add recipe to add recipe to recipes collection and add id to user cookbook array
app.post('/addRecipe', (req, res) => {
  const { id, recipe } = req.body;
  // add recipe query
  queries.AddNewRecipe({ id, recipe }, (err, response)=> {
    if (err) {
      res.send(500);
      log(chalk.bgRed(err, 'ERROR ADDING NEW RECIPE TO DATABASE'));
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('RECIPE ADDED SUCCESFULLY'));
    }
  });
});

// add friend - add to friends array in friends collection
app.post('/addFriend', (req, res) => {
  const { id, friendId } = req.body;
  // add friend query
  queries.AddNewFriend({ id, friendId }, (err, response) => {
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
app.post('/addUser', (req, res) => {
  console.log(req.body);
  const userInfo = req.body;
  // add user query
  queries.AddNewUser({userInfo}, (err, response) => {
    if (err) {
      res.status(500).send('there was an error adding a new user');
    } else {
      // send status success back to client
      console.log(response);
      res.send(response);
      log(chalk.magentaBright('NEW USER ADDED SUCCESFULLY'));
    }
  });
});

app.post('/addUserName', (req, res) => {
  const { id, name } = req.body;
  // update username query
  queries.UpdateUserName({ userId, name }, (err, response) => {
    if (err) {
      res.send(500);
    } else {
      // send status success back to client
      res.send(200);
    }
  });
});

// update user photo, takes photo field if has changed and updates field in users collection
app.post('/addUserPhoto', (req, res) => {
  const { id, photoUrl } = req.body;
  // add user photo query
  queries.UpdateUserPhoto({ id, photoUrl }, (err, response) => {
    if (err) {
      res.send(500);
    } else {
      // send status success back to client
      res.send(200);
      log(chalk.magentaBright('NEW USER PHOTO ADDED SUCCESFULLY'));
    }
  });
});

app.listen(port, () => {
  log(chalk.magenta('HUNGRY BACK-END app listening at ') + chalk.bold.greenBright(`http://localhost:${port}`));
});