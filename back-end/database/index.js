const { MONGO_URI, EC2_URI } = require('../config');
const MongoClient = require('mongodb').MongoClient;

/*
** create an instance of the mongo client
*/
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

/*
** Establish an initial connection to the mongo client
*/
client.connect(err => {
  const collection = client.db('test').collection('devices');
  console.log('CONNECTED');
  client.close();
});




// const mongoose = require('mongoose');

// // mongoose.connect('mongodb://host:port/database');
// // mongoose.connect('mongodb://host:port/database');
// // http://ec2-18-191-32-107.us-east-2.compute.amazonaws.com/
// // "mongodb+srv://18.191.32.107:27017
// mongodb+srv://ec2-18-191-32-107.us-east-2.compute.amazonaws.com/
// // 18.191.32.107
// // ip-172-31-42-5
// mongoose.connect('mongodb://18.191.32.107:27017', { useUnifiedTopology: true, useNewUrlParser: true })
//   .then(result => {
//     console.log('successfully connected to database');
//     console.log(result);
//   })
//   .catch(err => {
//     console.log('error connecting to database');
//     console.log(err);
//     console.log(err.reason);
//   });

// mongoose.connection.on('error', err => {
//   console.log(err);
// });

// const db = mongoose.connection;

//   const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'myproject';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });


// const db = mongoose.connection;

// const { MongoClient } = require("mongodb");

// const uri = 'mongodb+srv://ec2-18-191-32-107.us-east-2.compute.amazonaws.com:27017';
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
