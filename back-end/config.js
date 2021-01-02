const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  MONGO_USER: process.env.MONGO_USERNAME,
  MONGO_PASS: process.env.MONGO_PASSWORD,
  EC2_URI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@3.138.189.191/HUNGRYBUNCH?authSource=admin`,
};