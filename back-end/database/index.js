const { EC2_URI } = require('../config');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb://hungrybunch:eateateat@3.138.189.191/HUNGRYBUNCH?authSource=admin', {useNewUrlParser: true })
  .then(result => {
    console.log('successfully connected to database!');
    console.log(mongoose.connection.name);
  })
  .catch(error => {
    console.log('ERROR connecting to ADMIN DATABASEe');
  });
