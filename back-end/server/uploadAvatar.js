const fs = require('fs');
const AWS = require('aws-sdk');
const {S3_ID, S3_SECRET, S3_BUCKET_NAME} = require('./bucketConfig.js');

const s3 = new AWS.S3({
  accessKeyId: S3_ID,
  secretAccessKey: S3_SECRET
});

const uploadAvatar = (fileName, callback) => {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: 'cooking.jpg', // change to grab off the fileName
    Body: fileContent
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      callback(err);
    }
    console.log(`File uploaded successfully. ${data.Location}`);
    callback(null, data.location);
  });
};

module.exports = {
  uploadAvatar,
};