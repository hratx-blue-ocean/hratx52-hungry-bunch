const express = require('express');
const mongoose = require('mongoose');
const DB = require('../database/index');
const chalk = require('chalk');
const { Recipes } = require('../database/data');
const Recipe = require('../database/models/recipe');
const log = console.log;

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  log(chalk.magenta('hey from the server'));
  res.send(200);
});

app.get('/recipes', (req, res) => {
  Recipe.find((err, docs) => {
    if (err) {
      log(chalk.bgRed('ERROR FINDING RECIPES. SORRY BRO.'), err);
      res.send(500);
    } else {
      log(chalk.cyan('WE FOUND THE RECIPES'));
      log(chalk.cyanBright(docs));
      res.send(docs);
    }
  });
});

app.post('/recipes', (req, res) => {
  console.log(Recipes[0]);
  Recipe.create(Recipes[0], (err, doc) => {
    if (err) {
      log(chalk.bgRed('ERROR ADDING RECIPES. SORRY BRO.'), err);
      res.send(500);
    } else {
      log(chalk.magentaBright('WE ADDED THE RECIPES'));
      log(chalk.cyan(doc));
      res.send(doc);
    }
  });
});

app.listen(port, () => {
  log(chalk.magenta('HUNGRY BACK-END app listening at ') + chalk.bold.greenBright(`http://localhost:${port}`));
});