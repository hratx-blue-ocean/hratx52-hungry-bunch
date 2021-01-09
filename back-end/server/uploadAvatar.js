const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const {S3_ID, S3_SECRET, S3_BUCKET_NAME} = require('./bucketConfig.js');

const s3 = new AWS.S3({
  accessKeyId: S3_ID,
  secretAccessKey: S3_SECRET
});

const uploadAvatarToS3 = (fileName, callback) => {
  var fileLoc = path.join(__dirname, `uploads/${fileName}`);
  // Read content from the file
  const fileContent = fs.readFileSync(fileLoc);

  // Setting up S3 upload parameters
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: fileName,
    Body: fileContent,
    ContentType: 'image/png'
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      callback(err);
    } else {
      console.log(`File uploaded successfully. ${data.Location}`);
      callback(null, data.location);
    }
  });
};

module.exports = {
  uploadAvatarToS3,
};