const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  MONGO_USER: process.env.MONGO_USERNAME,
  MONGO_PASS: process.env.MONGO_PASSWORD,
  MONGO_URI: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hungry.jrmv9.mongodb.net/hungry?retryWrites=true&w=majority`,
  EC2_URI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ec2-18-191-32-107.us-east-2.compute.amazonaws.com/admin`,
};