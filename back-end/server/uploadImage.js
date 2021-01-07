const fs = require('fs');
const AWS = require('aws-sdk');

// bucket config
const ID = 'AKIAIZ2RR4N3VM44OJ2A';
const SECRET = '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';
const BUCKET_NAME = 'hratx52-hungry-bunch';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const uploadFile = (fileName, callback) => {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
    Bucket: BUCKET_NAME,
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

uploadFile('../../front-end/src/assets/cooking.jpg');

module.exports = {
  uploadFile,
};