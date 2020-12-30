const { MONGO_URI, EC2_URI } = require('../config');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

// 'mongodb://hungrybunch:eateateat@3.138.189.191/HUNGRYBUNCH'

// SUCCESS ------ 'mongodb://admin:pwdpwdpwd@3.138.189.191/admin'

mongoose.connect('mongodb://hungrybunch:eateateat@3.138.189.191/HUNGRYBUNCH?authSource=admin', {useNewUrlParser: true })
  .then(result => {
    console.log('successfully connected to database!');
    console.log(mongoose.connection.name);
  })
  .catch(error => {
    console.log('ERROR connecting to ADMIN DATABASEe');
  });

// const db = mongoose.connection;

// console.log(db.name);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// module.exports = {
//   DB: db,
// };
