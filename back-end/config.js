const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  MONGO_USER: process.env.MONGO_USERNAME,
  MONGO_PASS: process.env.MONGO_PASSWORD,
  EC2_URI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@3.16.163.11/HUNGRYBUNCH?authSource=admin`,
  S3_ID: process.env.S3_ID,
  S3_SECRET: process.env.S3_SECRET,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
};