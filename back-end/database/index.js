const mongoose = require('mongoose');

// mongoose.connect('mongodb://host:port/database');
// mongoose.connect('mongodb://host:port/database');
// http://ec2-18-191-32-107.us-east-2.compute.amazonaws.com/
// "mongodb+srv://18.191.32.107:27017


mongoose.connect('mongodb://127.0.0.1:27017/HUNGRYBUNCH', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    console.log('successfully connected to database');
    console.log(result);
  })
  .catch(err => {
    console.log('error connecting to database');
    console.log(err);
  });


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
